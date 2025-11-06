import { Storage } from "megajs";
import * as fs from "fs";
import * as path from "path";

interface UploadResult {
  success: boolean;
  fileName: string;
  fileSize: number;
  shareLink: string;
  file?: any;
  error?: string;
}

interface AccountInfo {
  email: string;
  totalSpace: string;
  usedSpace: string;
  freeSpace: string;
  usedPercentage: number;
}

interface UploadOptions {
  progress?: (progress: number) => void;
}

class MegaUploadUtils {
  private email: string;
  private password: string;
  private storage: Storage | null = null;
  public isLoggedIn: boolean = false;
  private loginPromise: Promise<boolean> | null = null;
  private folderCache: Map<string, any> = new Map();

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  async login(): Promise<boolean> {
    try {
      if (this.isLoggedIn && this.storage) {
        return true;
      }
      if (this.loginPromise) {
        return this.loginPromise;
      }

      this.storage = new Storage({
        email: this.email,
        password: this.password,
      });

      this.loginPromise = new Promise<boolean>((resolve, reject) => {
        const timeout = setTimeout(() => {
          this.loginPromise = null;
          reject(new Error("MEGA login timeout after 30 seconds"));
        }, 30000);

        this.storage!.on("ready", () => {
          clearTimeout(timeout);
          this.isLoggedIn = true;
          this.loginPromise = null;
          resolve(true);
        });
      });

      return await this.loginPromise;
    } catch (error) {
      this.isLoggedIn = false;
      this.storage = null;
      this.loginPromise = null;
      throw error;
    }
  }

  async uploadFile(
    filePath: string | Buffer,
    remoteName: string | null = null,
    remoteFolder: string | null = null
  ): Promise<UploadResult> {
    if (!this.isLoggedIn || !this.storage) {
      throw new Error("Not logged in to MEGA. Please call login() first.");
    }

    try {
      let fileName: string;
      let fileBuffer: Buffer;
      let fileSize: number;

      if (typeof filePath === "string") {
        if (!fs.existsSync(filePath)) {
          throw new Error(`File not found: ${filePath}`);
        }
        fileName = remoteName || path.basename(filePath);
        fileBuffer = fs.readFileSync(filePath);
        fileSize = fs.statSync(filePath).size;
      } else {
        fileName = remoteName || `upload_${Date.now()}.bin`;
        fileBuffer = filePath;
        fileSize = filePath.length;
      }

      console.log(
        `📤 Starting upload: ${fileName} (${this.formatFileSize(fileSize)})`
      );

      let targetFolder = this.storage.root;
      if (remoteFolder) {
        targetFolder = await this.createOrGetFolder(remoteFolder);
      }

      const uploadedFile = await new Promise<any>((resolve, reject) => {
        const uploadStream = targetFolder.upload(fileName, fileBuffer);

        // Add timeout untuk upload
        const uploadTimeout = setTimeout(() => {
          console.log(`\n⏰ Upload timeout for: ${fileName}`);
          reject(new Error(`Upload timeout for ${fileName}`));
        }, 60000); // 60 seconds timeout

        uploadStream.on("progress", (progress: number) => {
          const percent = Math.round(progress * 100);
          process.stdout.write(`\r📈 Progress: ${percent}%`);
        });

        uploadStream.on("complete", (file: any) => {
          clearTimeout(uploadTimeout);
          console.log(`\n✅ Successfully uploaded: ${fileName}`);
          resolve(file);
        });

        uploadStream.on("error", (err: Error) => {
          clearTimeout(uploadTimeout);
          console.error(`\n❌ Upload error: ${err.message}`);
          reject(err);
        });
      });

      // Add timeout untuk link generation
      const shareLink = (await Promise.race([
        uploadedFile.link(),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error(`Timeout generating link for ${fileName}`)),
            15000
          )
        ),
      ])) as string;

      return {
        success: true,
        fileName: fileName,
        fileSize: fileSize,
        shareLink: shareLink,
        file: uploadedFile,
      };
    } catch (error) {
      console.error(`❌ Failed to upload file: ${(error as Error).message}`);
      return {
        success: false,
        fileName: remoteName || "unknown",
        fileSize: 0,
        shareLink: "",
        error: (error as Error).message,
      };
    }
  }

  async uploadMultipleFiles(
    filePaths: string[],
    remoteFolder: string | null = null
  ): Promise<UploadResult[]> {
    const results: UploadResult[] = [];

    for (let i = 0; i < filePaths.length; i++) {
      const filePath = filePaths[i];
      console.log(
        `\n[${i + 1}/${filePaths.length}] Processing: ${path.basename(
          filePath
        )}`
      );

      try {
        const result = await this.uploadFile(filePath, null, remoteFolder);
        results.push(result);
      } catch (error) {
        results.push({
          success: false,
          fileName: path.basename(filePath),
          fileSize: 0,
          shareLink: "",
          error: (error as Error).message,
        });
      }
    }

    return results;
  }

  async uploadFolder(
    folderPath: string,
    remoteFolderName: string | null = null
  ): Promise<UploadResult[]> {
    if (!fs.existsSync(folderPath)) {
      throw new Error(`Folder not found: ${folderPath}`);
    }

    const folderName = remoteFolderName || path.basename(folderPath);
    const remoteFolder = await this.createOrGetFolder(folderName);

    const files = this.getAllFiles(folderPath);
    const results: UploadResult[] = [];

    for (let i = 0; i < files.length; i++) {
      const filePath = files[i];
      const relativePath = path.relative(folderPath, filePath);
      const remoteSubFolder = path.dirname(relativePath);

      console.log(`\n[${i + 1}/${files.length}] Processing: ${relativePath}`);

      try {
        let targetFolder = remoteFolder;
        if (remoteSubFolder !== ".") {
          targetFolder = await this.createOrGetFolder(
            remoteSubFolder,
            remoteFolder
          );
        }

        const result = await this.uploadFile(
          filePath,
          path.basename(filePath),
          targetFolder.name
        );
        results.push(result);
      } catch (error) {
        results.push({
          success: false,
          fileName: relativePath,
          fileSize: 0,
          shareLink: "",
          error: (error as Error).message,
        });
      }
    }

    return results;
  }

  async createOrGetFolder(
    folderPath: string,
    parentFolder: any = null
  ): Promise<any> {
    if (!this.storage) {
      throw new Error("Storage not initialized");
    }

    const cacheKey = (parentFolder?.name ? parentFolder.name + "/" : "") + folderPath;
    if (this.folderCache.has(cacheKey)) {
      return this.folderCache.get(cacheKey);
    }

    const parent = parentFolder || this.storage.root;
    const folderParts = folderPath
      .split("/")
      .filter((part) => part.trim() !== "");

    let currentFolder = parent;

    for (const folderName of folderParts) {
      const existingFolder = currentFolder.children?.find(
        (child: any) => child.name === folderName && child.directory
      );

      if (existingFolder) {
        currentFolder = existingFolder;
      } else {
        try {
          currentFolder = (await Promise.race([
            currentFolder.mkdir(folderName),
            new Promise((_, reject) =>
              setTimeout(
                () => reject(new Error(`Timeout creating folder: ${folderName}`)),
                10000
              )
            ),
          ])) as any;
        } catch (error) {
          // If mkdir fails, retry by listing children again in case of race
          const retryExisting = currentFolder.children?.find(
            (child: any) => child.name === folderName && child.directory
          );
          if (retryExisting) {
            currentFolder = retryExisting;
          } else {
            throw error;
          }
        }
      }
    }

    this.folderCache.set(cacheKey, currentFolder);
    return currentFolder;
  }

  private getAllFiles(dirPath: string): string[] {
    const files: string[] = [];
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }

    return files;
  }

  private formatFileSize(bytes: number): string {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Bytes";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  }

  async getAccountInfo(): Promise<AccountInfo> {
    if (!this.isLoggedIn || !this.storage) {
      throw new Error("Not logged in to MEGA");
    }

    try {
      const quota = await this.storage.getAccountInfo();
      return {
        email: this.email,
        totalSpace: this.formatFileSize(quota.spaceTotal),
        usedSpace: this.formatFileSize(quota.spaceUsed),
        freeSpace: this.formatFileSize(quota.spaceTotal - quota.spaceUsed),
        usedPercentage: Math.round((quota.spaceUsed / quota.spaceTotal) * 100),
      };
    } catch (error) {
      console.error("❌ Failed to get account info:", (error as Error).message);
      throw error;
    }
  }

  async logout(): Promise<void> {
    if (this.storage && this.isLoggedIn) {
      try {
        this.storage.close();
        this.isLoggedIn = false;
        this.storage = null;
        console.log("👋 Logged out from MEGA");
      } catch (error) {
        console.error("Error during logout:", error);

        this.isLoggedIn = false;
        this.storage = null;
      }
    }
  }
}

export default MegaUploadUtils;
export { UploadResult, AccountInfo, UploadOptions };

// Shared singleton instance to reuse login/session across the app
export const megaClient = new MegaUploadUtils(
  process.env.MEGA_EMAIL as string,
  process.env.MEGA_PASSWORD as string
);

