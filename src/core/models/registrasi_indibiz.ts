import prisma from "../../integrations/prisma/index.js";
import MegaUploadUtils, { megaClient } from "../../integrations/mega/index.js";
import type {
  CreateRegistrasiIndibizInput,
  UpdateRegistrasiIndibizInput,
} from "../../shared/types/registrasi_indibiz.js";
import {
  BadRequestError,
  NotFoundError,
  ConflictError,
} from "../../shared/utils/error.js";

const MEGA_CONFIG = {
  email: process.env.MEGA_EMAIL || "your-mega-email@example.com",
  password: process.env.MEGA_PASSWORD || "your-mega-password",
  uploadFolder: "registrasi-indibiz",
};

class RegistrasiIndibizService {
  private megaUploader: MegaUploadUtils;

  constructor() {
    this.megaUploader = megaClient;
    // warm up login asynchronously; errors will be retried lazily on first real upload
    this.initializeMega().catch(() => {});
  }

  private async initializeMega(): Promise<void> {
    try {
      if (!this.megaUploader.isLoggedIn) {
        const loginSuccess = await this.megaUploader.login();
        if (!loginSuccess) {
          throw new Error("MEGA login failed");
        }
        console.log("MEGA login successful");
      } else {
        console.log("MEGA already logged in");
      }
    } catch (error) {
      console.error("Failed to initialize MEGA:", error);

      this.megaUploader.isLoggedIn = false;
      throw new Error(
        `Gagal koneksi ke cloud storage: ${(error as Error).message}`
      );
    }
  }

  private detectFileType(buffer: Buffer): string {
    const signature = buffer.toString("hex", 0, 8).toLowerCase();

    if (signature.startsWith("ffd8ff")) {
      return "jpg";
    } else if (signature.startsWith("89504e47")) {
      return "png";
    } else if (signature.startsWith("47494638")) {
      return "gif";
    } else if (signature.startsWith("25504446")) {
      return "pdf";
    } else if (
      signature.startsWith("504b0304") ||
      signature.startsWith("504b0506") ||
      signature.startsWith("504b0708")
    ) {
      return "zip";
    } else {
      return "jpg";
    }
  }

  private async uploadFileToMega(
    fileBuffer: Buffer,
    fileName: string,
    subfolder: string = ""
  ): Promise<string> {
    try {
      if (!this.megaUploader.isLoggedIn) {
        console.log("Not logged in to MEGA, attempting to login...");
        await this.initializeMega();
      }

      const remoteFolder = subfolder
        ? `${MEGA_CONFIG.uploadFolder}/${subfolder}`
        : MEGA_CONFIG.uploadFolder;

      const result = await this.megaUploader.uploadFile(
        fileBuffer,
        fileName,
        remoteFolder
      );

      if (result.success && result.shareLink) {
        console.log(`Successfully uploaded ${fileName}: ${result.shareLink}`);
        return result.shareLink;
      } else {
        console.error(`Upload failed for ${fileName}:`, result.error);
        throw new Error(result.error || "Upload gagal");
      }
    } catch (error: any) {
      console.error(`Failed to upload ${fileName}:`, error);
      throw new Error(`Gagal upload ${fileName}: ${error.message}`);
    }
  }

  private async handleFileUploads(
    data: any,
    registrasiId?: string
  ): Promise<{
    foto_ktp?: string;
    foto_selfie?: string;
    bukti_usaha?: string;
    bukti_niwp?: string;
  }> {
    const uploadResults: any = {};
    const subfolder = registrasiId || `temp_${Date.now()}`;

    if (data.foto_ktp) {
      if (Buffer.isBuffer(data.foto_ktp)) {
        const fileType = this.detectFileType(data.foto_ktp);
        const fileName = `foto_ktp_${subfolder}_${Date.now()}.${fileType}`;
        console.log(
          `Uploading foto_ktp: ${fileName} (detected as ${fileType})`
        );
        uploadResults.foto_ktp = await this.uploadFileToMega(
          data.foto_ktp,
          fileName,
          "FotoKTP"
        );
      } else if (
        typeof data.foto_ktp === "string" &&
        data.foto_ktp.trim() !== ""
      ) {
        uploadResults.foto_ktp = data.foto_ktp;
        console.log("Using existing foto_ktp URL:", data.foto_ktp);
      } else {
        console.log(
          "foto_ktp is not a Buffer or string, attempting conversion..."
        );
        try {
          let buffer: Buffer;

          if (
            data.foto_ktp.stream &&
            typeof data.foto_ktp.stream.getReader === "function"
          ) {
            const chunks: Buffer[] = [];
            const reader = data.foto_ktp.stream.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(Buffer.from(value));
            }
            buffer = Buffer.concat(chunks);
          } else if (
            data.foto_ktp.arrayBuffer &&
            typeof data.foto_ktp.arrayBuffer === "function"
          ) {
            const arrayBuffer = await data.foto_ktp.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else if (
            data.foto_ktp.buffer &&
            data.foto_ktp.buffer instanceof ArrayBuffer
          ) {
            buffer = Buffer.from(data.foto_ktp.buffer);
          } else if (data.foto_ktp instanceof ArrayBuffer) {
            buffer = Buffer.from(data.foto_ktp);
          } else if (data.foto_ktp instanceof Uint8Array) {
            buffer = Buffer.from(data.foto_ktp);
          } else if (data.foto_ktp.data && Array.isArray(data.foto_ktp.data)) {
            buffer = Buffer.from(data.foto_ktp.data);
          } else if (
            typeof data.foto_ktp === "object" &&
            data.foto_ktp.constructor?.name === "File"
          ) {
            const arrayBuffer = await data.foto_ktp.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else {
            throw new Error(
              `Cannot convert foto_ktp to Buffer. Available keys: ${Object.keys(
                data.foto_ktp
              ).join(", ")}`
            );
          }

          const fileType = this.detectFileType(buffer);
          const fileName = `foto_ktp_${subfolder}_${Date.now()}.${fileType}`;
          console.log(
            `Converting and uploading foto_ktp: ${fileName}, size: ${buffer.length} (detected as ${fileType})`
          );
          uploadResults.foto_ktp = await this.uploadFileToMega(
            buffer,
            fileName,
            "FotoKTP"
          );
        } catch (conversionError) {
          console.error("Failed to convert foto_ktp:", conversionError);
        }
      }
    }

    if (data.foto_selfie) {
      if (Buffer.isBuffer(data.foto_selfie)) {
        const fileType = this.detectFileType(data.foto_selfie);
        const fileName = `foto_selfie_${subfolder}_${Date.now()}.${fileType}`;
        console.log(
          `Uploading foto_selfie: ${fileName} (detected as ${fileType})`
        );
        uploadResults.foto_selfie = await this.uploadFileToMega(
          data.foto_selfie,
          fileName,
          "FotoSelfie"
        );
      } else if (
        typeof data.foto_selfie === "string" &&
        data.foto_selfie.trim() !== ""
      ) {
        uploadResults.foto_selfie = data.foto_selfie;
        console.log("Using existing foto_selfie URL:", data.foto_selfie);
      } else {
        console.log(
          "foto_selfie is not a Buffer or string, attempting conversion..."
        );
        try {
          let buffer: Buffer;

          if (
            data.foto_selfie.stream &&
            typeof data.foto_selfie.stream.getReader === "function"
          ) {
            const chunks: Buffer[] = [];
            const reader = data.foto_selfie.stream.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(Buffer.from(value));
            }
            buffer = Buffer.concat(chunks);
          } else if (
            data.foto_selfie.arrayBuffer &&
            typeof data.foto_selfie.arrayBuffer === "function"
          ) {
            const arrayBuffer = await data.foto_selfie.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else if (
            data.foto_selfie.buffer &&
            data.foto_selfie.buffer instanceof ArrayBuffer
          ) {
            buffer = Buffer.from(data.foto_selfie.buffer);
          } else if (data.foto_selfie instanceof ArrayBuffer) {
            buffer = Buffer.from(data.foto_selfie);
          } else if (data.foto_selfie instanceof Uint8Array) {
            buffer = Buffer.from(data.foto_selfie);
          } else if (
            data.foto_selfie.data &&
            Array.isArray(data.foto_selfie.data)
          ) {
            buffer = Buffer.from(data.foto_selfie.data);
          } else if (
            typeof data.foto_selfie === "object" &&
            data.foto_selfie.constructor?.name === "File"
          ) {
            const arrayBuffer = await data.foto_selfie.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else {
            throw new Error(
              `Cannot convert foto_selfie to Buffer. Available keys: ${Object.keys(
                data.foto_selfie
              ).join(", ")}`
            );
          }

          const fileType = this.detectFileType(buffer);
          const fileName = `foto_selfie_${subfolder}_${Date.now()}.${fileType}`;
          console.log(
            `Converting and uploading foto_selfie: ${fileName}, size: ${buffer.length} (detected as ${fileType})`
          );
          uploadResults.foto_selfie = await this.uploadFileToMega(
            buffer,
            fileName,
            "FotoSelfie"
          );
        } catch (conversionError) {
          console.error("Failed to convert foto_selfie:", conversionError);
        }
      }
    }

    if (data.bukti_usaha) {
      if (Buffer.isBuffer(data.bukti_usaha)) {
        const fileType = this.detectFileType(data.bukti_usaha);
        const fileName = `bukti_usaha_${subfolder}_${Date.now()}.${fileType}`;
        console.log(
          `Uploading bukti_usaha: ${fileName} (detected as ${fileType})`
        );
        uploadResults.bukti_usaha = await this.uploadFileToMega(
          data.bukti_usaha,
          fileName,
          "BuktiUsaha"
        );
      } else if (
        typeof data.bukti_usaha === "string" &&
        data.bukti_usaha.trim() !== ""
      ) {
        uploadResults.bukti_usaha = data.bukti_usaha;
        console.log("Using existing bukti_usaha URL:", data.bukti_usaha);
      } else {
        console.log(
          "bukti_usaha is not a Buffer or string, attempting conversion..."
        );
        try {
          let buffer: Buffer;

          if (
            data.bukti_usaha.stream &&
            typeof data.bukti_usaha.stream.getReader === "function"
          ) {
            const chunks: Buffer[] = [];
            const reader = data.bukti_usaha.stream.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(Buffer.from(value));
            }
            buffer = Buffer.concat(chunks);
          } else if (
            data.bukti_usaha.arrayBuffer &&
            typeof data.bukti_usaha.arrayBuffer === "function"
          ) {
            const arrayBuffer = await data.bukti_usaha.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else if (
            data.bukti_usaha.buffer &&
            data.bukti_usaha.buffer instanceof ArrayBuffer
          ) {
            buffer = Buffer.from(data.bukti_usaha.buffer);
          } else if (data.bukti_usaha instanceof ArrayBuffer) {
            buffer = Buffer.from(data.bukti_usaha);
          } else if (data.bukti_usaha instanceof Uint8Array) {
            buffer = Buffer.from(data.bukti_usaha);
          } else if (
            data.bukti_usaha.data &&
            Array.isArray(data.bukti_usaha.data)
          ) {
            buffer = Buffer.from(data.bukti_usaha.data);
          } else if (
            typeof data.bukti_usaha === "object" &&
            data.bukti_usaha.constructor?.name === "File"
          ) {
            const arrayBuffer = await data.bukti_usaha.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else {
            throw new Error(
              `Cannot convert bukti_usaha to Buffer. Available keys: ${Object.keys(
                data.bukti_usaha
              ).join(", ")}`
            );
          }

          const fileType = this.detectFileType(buffer);
          const fileName = `bukti_usaha_${subfolder}_${Date.now()}.${fileType}`;
          console.log(
            `Converting and uploading bukti_usaha: ${fileName}, size: ${buffer.length} (detected as ${fileType})`
          );
          uploadResults.bukti_usaha = await this.uploadFileToMega(
            buffer,
            fileName,
            "BuktiUsaha"
          );
        } catch (conversionError) {
          console.error("Failed to convert bukti_usaha:", conversionError);
        }
      }
    }

    if (data.bukti_niwp) {
      if (Buffer.isBuffer(data.bukti_niwp)) {
        const fileType = this.detectFileType(data.bukti_niwp);
        const fileName = `bukti_niwp_${subfolder}_${Date.now()}.${fileType}`;
        console.log(
          `Uploading bukti_niwp: ${fileName} (detected as ${fileType})`
        );
        uploadResults.bukti_niwp = await this.uploadFileToMega(
          data.bukti_niwp,
          fileName,
          "BuktiNIWP"
        );
      } else if (
        typeof data.bukti_niwp === "string" &&
        data.bukti_niwp.trim() !== ""
      ) {
        uploadResults.bukti_niwp = data.bukti_niwp;
        console.log("Using existing bukti_niwp URL:", data.bukti_niwp);
      } else {
        console.log(
          "bukti_niwp is not a Buffer or string, attempting conversion..."
        );
        try {
          let buffer: Buffer;

          if (
            data.bukti_niwp.stream &&
            typeof data.bukti_niwp.stream.getReader === "function"
          ) {
            const chunks: Buffer[] = [];
            const reader = data.bukti_niwp.stream.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(Buffer.from(value));
            }
            buffer = Buffer.concat(chunks);
          } else if (
            data.bukti_niwp.arrayBuffer &&
            typeof data.bukti_niwp.arrayBuffer === "function"
          ) {
            const arrayBuffer = await data.bukti_niwp.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else if (
            data.bukti_niwp.buffer &&
            data.bukti_niwp.buffer instanceof ArrayBuffer
          ) {
            buffer = Buffer.from(data.bukti_niwp.buffer);
          } else if (data.bukti_niwp instanceof ArrayBuffer) {
            buffer = Buffer.from(data.bukti_niwp);
          } else if (data.bukti_niwp instanceof Uint8Array) {
            buffer = Buffer.from(data.bukti_niwp);
          } else if (
            data.bukti_niwp.data &&
            Array.isArray(data.bukti_niwp.data)
          ) {
            buffer = Buffer.from(data.bukti_niwp.data);
          } else if (
            typeof data.bukti_niwp === "object" &&
            data.bukti_niwp.constructor?.name === "File"
          ) {
            const arrayBuffer = await data.bukti_niwp.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else {
            throw new Error(
              `Cannot convert bukti_niwp to Buffer. Available keys: ${Object.keys(
                data.bukti_niwp
              ).join(", ")}`
            );
          }

          const fileType = this.detectFileType(buffer);
          const fileName = `bukti_niwp_${subfolder}_${Date.now()}.${fileType}`;
          console.log(
            `Converting and uploading bukti_niwp: ${fileName}, size: ${buffer.length} (detected as ${fileType})`
          );
          uploadResults.bukti_niwp = await this.uploadFileToMega(
            buffer,
            fileName,
            "BuktiNIWP"
          );
        } catch (conversionError) {
          console.error("Failed to convert bukti_niwp:", conversionError);
        }
      }
    }

    if (data.foto_lokasi) {
      if (Buffer.isBuffer(data.foto_lokasi)) {
        const fileType = this.detectFileType(data.foto_lokasi);
        const fileName = `foto_lokasi_${subfolder}_${Date.now()}.${fileType}`;
        console.log(
          `Uploading foto_lokasi: ${fileName} (detected as ${fileType})`
        );
        uploadResults.foto_lokasi = await this.uploadFileToMega(
          data.foto_lokasi,
          fileName,
          "FotoLokasi"
        );
      } else if (
        typeof data.foto_lokasi === "string" &&
        data.foto_lokasi.trim() !== ""
      ) {
        uploadResults.foto_lokasi = data.foto_lokasi;
        console.log("Using existing foto_lokasi URL:", data.foto_lokasi);
      } else {
        console.log(
          "foto_lokasi is not a Buffer or string, attempting conversion..."
        );
        try {
          let buffer: Buffer;

          if (
            data.foto_lokasi.stream &&
            typeof data.foto_lokasi.stream.getReader === "function"
          ) {
            const chunks: Buffer[] = [];
            const reader = data.foto_lokasi.stream.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(Buffer.from(value));
            }
            buffer = Buffer.concat(chunks);
          } else if (
            data.foto_lokasi.arrayBuffer &&
            typeof data.foto_lokasi.arrayBuffer === "function"
          ) {
            const arrayBuffer = await data.foto_lokasi.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else if (
            data.foto_lokasi.buffer &&
            data.foto_lokasi.buffer instanceof ArrayBuffer
          ) {
            buffer = Buffer.from(data.foto_lokasi.buffer);
          } else if (data.foto_lokasi instanceof ArrayBuffer) {
            buffer = Buffer.from(data.foto_lokasi);
          } else if (data.foto_lokasi instanceof Uint8Array) {
            buffer = Buffer.from(data.foto_lokasi);
          } else if (
            data.foto_lokasi.data &&
            Array.isArray(data.foto_lokasi.data)
          ) {
            buffer = Buffer.from(data.foto_lokasi.data);
          } else if (
            typeof data.foto_lokasi === "object" &&
            data.foto_lokasi.constructor?.name === "File"
          ) {
            const arrayBuffer = await data.foto_lokasi.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
          } else {
            throw new Error(
              `Cannot convert foto_lokasi to Buffer. Available keys: ${Object.keys(
                data.foto_lokasi
              ).join(", ")}`
            );
          }

          const fileType = this.detectFileType(buffer);
          const fileName = `foto_lokasi_${subfolder}_${Date.now()}.${fileType}`;
          console.log(
            `Converting and uploading foto_lokasi: ${fileName}, size: ${buffer.length} (detected as ${fileType})`
          );
          uploadResults.foto_lokasi = await this.uploadFileToMega(
            buffer,
            fileName,
            "FotoLokasi"
          );
        } catch (conversionError) {
          console.error("Failed to convert foto_lokasi:", conversionError);
        }
      }
    }

    console.log("File uploads completed:", uploadResults);
    return uploadResults;
  }

  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await Promise.all([
        prisma.registrasiIndibiz.findMany({
          skip,
          take: limit,
          orderBy: { created_at: "desc" },
          include: {
            paket: true,
            sales: true,
            wilayah: true,
          },
        }),
        prisma.registrasiIndibiz.count(),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("RegistrasiIndibiz index error:", error);
      throw error;
    }
  }

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID registrasi_indibiz tidak valid");
      }

      const registrasi = await prisma.registrasiIndibiz.findUnique({
        where: { id },
      });

      if (!registrasi) {
        throw new NotFoundError("RegistrasiIndibiz tidak ditemukan");
      }

      return registrasi;
    } catch (error) {
      console.error("RegistrasiIndibiz shows error:", error);
      throw error;
    }
  }

  async create(data: CreateRegistrasiIndibizInput) {
    try {
      if (
        !data ||
        typeof data.nama !== "string" ||
        data.nama.trim() === "" ||
        typeof data.wilayah_id !== "string" ||
        data.wilayah_id.trim() === "" ||
        typeof data.paket_id !== "string" ||
        data.paket_id.trim() === "" ||
        data.sales_id.trim() === "" ||
        typeof data.no_hp_1 !== "string" ||
        data.no_hp_1.trim() === "" ||
        typeof data.kordinat !== "string" ||
        data.kordinat.trim() === "" ||
        typeof data.alamat !== "string" ||
        data.alamat.trim() === "" ||
        typeof data.nama_pic !== "string" ||
        data.nama_pic.trim() === "" ||
        typeof data.ttl_pic !== "string" ||
        data.ttl_pic.trim() === "" ||
        typeof data.no_ktp !== "string" ||
        data.no_ktp.trim() === "" ||
        typeof data.email !== "string" ||
        data.email.trim() === ""
      ) {
        throw new BadRequestError("Data registrasi_indibiz tidak valid");
      }

      const existing = await prisma.registrasiIndibiz.findFirst({
        where: {
          OR: [{ no_ktp: data.no_ktp.trim() }, { email: data.email.trim() }],
        },
      });

      if (existing) {
        throw new ConflictError(
          "Registrasi dengan No KTP atau Email ini sudah ada"
        );
      }

      const hasFileUploads =
        (data.foto_ktp && Buffer.isBuffer(data.foto_ktp)) ||
        (data.foto_selfie && Buffer.isBuffer(data.foto_selfie)) ||
        (data.bukti_usaha && Buffer.isBuffer(data.bukti_usaha)) ||
        (data.bukti_niwp && Buffer.isBuffer(data.bukti_niwp)) ||
        (data.foto_lokasi && Buffer.isBuffer(data.foto_lokasi));

      let uploadedFiles: any = {};

      if (hasFileUploads) {
        console.log("Files detected for upload, initializing MEGA...");
        try {
          await this.initializeMega();
          uploadedFiles = await this.handleFileUploads(data);
          console.log("All files uploaded successfully");
        } catch (uploadError) {
          console.error("❌ File upload failed:", uploadError);
          throw uploadError;
        } finally {
          // keep MEGA session alive to speed up subsequent uploads
        }
      } else {
        uploadedFiles = await this.handleFileUploads(data);
      }

      const newRegistrasi = await prisma.registrasiIndibiz.create({
        data: {
          nama: data.nama.trim(),
          wilayah_id: data.wilayah_id.trim(),
          paket_id: data.paket_id.trim(),
          sales_id: data.sales_id.trim() ?? "",
          no_hp_1: data.no_hp_1.trim(),
          no_hp_2: data.no_hp_2?.trim() ?? "",
          kordinat: data.kordinat.trim(),
          alamat: data.alamat.trim(),
          nama_pic: data.nama_pic.trim(),
          ttl_pic: data.ttl_pic.trim(),
          no_ktp: data.no_ktp.trim(),
          email: data.email.trim(),
          nomer_ao: "",
          status: null,
          keterangan: "",
          foto_ktp: uploadedFiles.foto_ktp ?? "",
          foto_selfie: uploadedFiles.foto_selfie ?? "",
          bukti_usaha: uploadedFiles.bukti_usaha ?? "",
          bukti_niwp: uploadedFiles.bukti_niwp ?? "",
          foto_lokasi: uploadedFiles.foto_lokasi ?? "",
        },
      });

      return newRegistrasi;
    } catch (error) {
      console.error("Create error:", error);
      throw error;
    }
  }

  async update(id: string, data: UpdateRegistrasiIndibizInput) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID registrasi_indibiz tidak valid");
      }

      const registrasi = await prisma.registrasiIndibiz.findUnique({
        where: { id },
      });

      if (!registrasi) {
        throw new NotFoundError("RegistrasiIndibiz tidak ditemukan");
      }

      if (
        (data.no_ktp && data.no_ktp.trim() !== registrasi.no_ktp) ||
        (data.email && data.email.trim() !== registrasi.email)
      ) {
        const exist = await prisma.registrasiIndibiz.findFirst({
          where: {
            OR: [
              data.no_ktp && data.no_ktp.trim() !== registrasi.no_ktp
                ? { no_ktp: data.no_ktp.trim() }
                : undefined,
              data.email && data.email.trim() !== registrasi.email
                ? { email: data.email.trim() }
                : undefined,
            ].filter(Boolean) as any,
            NOT: { id },
          },
        });
        if (exist) {
          throw new ConflictError(
            "Registrasi dengan No KTP atau Email ini sudah ada"
          );
        }
      }

      const hasFileUploads =
        (data.foto_ktp && Buffer.isBuffer(data.foto_ktp)) ||
        (data.foto_selfie && Buffer.isBuffer(data.foto_selfie)) ||
        (data.bukti_usaha && Buffer.isBuffer(data.bukti_usaha)) ||
        (data.bukti_niwp && Buffer.isBuffer(data.bukti_niwp)) ||
        (data.foto_lokasi && Buffer.isBuffer(data.foto_lokasi));

      let uploadedFiles: any = {};

      if (hasFileUploads) {
        console.log("Files detected for update, initializing MEGA...");
        try {
          await this.initializeMega();
          uploadedFiles = await this.handleFileUploads(data, id);
          console.log("All files uploaded successfully for update");
        } catch (uploadError) {
          console.error("❌ File upload failed during update:", uploadError);
          throw uploadError;
        } finally {
          // keep MEGA session alive after update to speed up subsequent uploads
        }
      } else if (
        data.foto_ktp ||
        data.foto_selfie ||
        data.bukti_usaha ||
        data.bukti_niwp ||
        data.foto_lokasi
      ) {
        uploadedFiles = await this.handleFileUploads(data, id);
      }

      const updatedRegistrasi = await prisma.registrasiIndibiz.update({
        where: { id },
        data: {
          ...(data.nama !== undefined ? { nama: data.nama.trim() } : {}),
          ...(data.wilayah_id !== undefined
            ? { wilayah_id: data.wilayah_id.trim() }
            : {}),
          ...(data.paket_id !== undefined
            ? { paket_id: data.paket_id.trim() }
            : {}),
          ...(data.sales_id !== undefined
            ? { sales_id: data.sales_id.trim() }
            : {}),
          ...(data.no_hp_1 !== undefined
            ? { no_hp_1: data.no_hp_1.trim() }
            : {}),
          ...(data.no_hp_2 !== undefined
            ? { no_hp_2: data.no_hp_2?.trim() ?? "" }
            : {}),
          ...(data.kordinat !== undefined
            ? { kordinat: data.kordinat.trim() }
            : {}),
          ...(data.alamat !== undefined ? { alamat: data.alamat.trim() } : {}),
          ...(data.nama_pic !== undefined
            ? { nama_pic: data.nama_pic.trim() }
            : {}),
          ...(data.ttl_pic !== undefined
            ? { ttl_pic: data.ttl_pic.trim() }
            : {}),
          ...(data.no_ktp !== undefined ? { no_ktp: data.no_ktp.trim() } : {}),
          ...(data.email !== undefined ? { email: data.email.trim() } : {}),
          ...(uploadedFiles.foto_ktp !== undefined ||
          (data.foto_ktp !== undefined && typeof data.foto_ktp === "string")
            ? { foto_ktp: uploadedFiles.foto_ktp ?? data.foto_ktp ?? "" }
            : {}),
          ...(uploadedFiles.foto_selfie !== undefined ||
          (data.foto_selfie !== undefined &&
            typeof data.foto_selfie === "string")
            ? {
                foto_selfie:
                  uploadedFiles.foto_selfie ?? data.foto_selfie ?? "",
              }
            : {}),
          ...(uploadedFiles.bukti_usaha !== undefined ||
          (data.bukti_usaha !== undefined &&
            typeof data.bukti_usaha === "string")
            ? {
                bukti_usaha:
                  uploadedFiles.bukti_usaha ?? data.bukti_usaha ?? "",
              }
            : {}),
          ...(uploadedFiles.bukti_niwp !== undefined ||
          (data.bukti_niwp !== undefined && typeof data.bukti_niwp === "string")
            ? { bukti_niwp: uploadedFiles.bukti_niwp ?? data.bukti_niwp ?? "" }
            : {}),
          ...(uploadedFiles.foto_lokasi !== undefined ||
          (data.foto_lokasi !== undefined &&
            typeof data.foto_lokasi === "string")
            ? {
                foto_lokasi:
                  uploadedFiles.foto_lokasi ?? data.foto_lokasi ?? "",
              }
            : {}),
        },
      });

      return updatedRegistrasi;
    } catch (error) {
      console.error("Update error:", error);
      throw error;
    }
  }

  async setKodeSc(
    id: string,
    data: {
      nomer_ao: string;
      status:
        | "PS"
        | "CANCEL"
        | "KENDALA"
        | "REVOKE"
        | "QC1"
        | "PI"
        | "FALLOUT"
        | "WFM_UNSC"
        | "QC2_FCC"
        | "PAPERLESS"
        | "SURVER"
        | "DECLINE_FCC"
        | "PT3_WAITING_AKTIVASI"
        | "FOLLOWUP_TO_COMPLETE";
      keterangan: string;
    }
  ) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID registrasi_indibiz tidak valid");
      }

      const registrasi = await prisma.registrasiIndibiz.findUnique({
        where: { id },
      });

      if (!registrasi) {
        throw new NotFoundError("RegistrasiIndibiz tidak ditemukan");
      }

      const update = await prisma.registrasiIndibiz.update({
        where: { id },
        data: {
          nomer_ao: data.nomer_ao,
          status: data.status,
          keterangan: data.keterangan,
        },
      });

      return update;
    } catch (error) {
      throw error;
    }
  }

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID registrasi_indibiz tidak valid");
      }

      const registrasi = await prisma.registrasiIndibiz.findUnique({
        where: { id },
      });

      if (!registrasi) {
        throw new NotFoundError("RegistrasiIndibiz tidak ditemukan");
      }

      await prisma.registrasiIndibiz.delete({
        where: { id },
      });

      return { message: "RegistrasiIndibiz berhasil dihapus" };
    } catch (error) {
      throw error;
    }
  }

  async getMegaStorageInfo() {
    try {
      await this.initializeMega();
      const accountInfo = await this.megaUploader.getAccountInfo();
      await this.megaUploader.logout();
      return accountInfo;
    } catch (error) {
      console.error("Get storage info error:", error);
      throw error;
    }
  }

  async importExcelCustomers(rows: any[]) {
    try {
      if (!Array.isArray(rows) || rows.length === 0) {
        throw new BadRequestError("Data Excel kosong atau tidak valid");
      }

      const results = [];

      for (const row of rows) {
        const {
          nama,
          wilayah,
          paket,
          sales,
          no_hp_1,
          no_hp_2,
          koordinat,
          alamat,
          nama_pic,
          ttl_pic,
          no_ktp,
          email,
          foto_ktp,
          foto_selfie,
          bukti_usaha,
          bukti_niwp,
          foto_lokasi,
        } = row;

        if (
          !nama ||
          !wilayah ||
          !paket ||
          !sales ||
          !no_hp_1 ||
          !alamat ||
          !nama_pic ||
          !ttl_pic ||
          !no_ktp ||
          !email
        ) {
          throw new BadRequestError(
            `Data customer tidak lengkap untuk baris dengan nama: ${
              nama || "Unknown"
            }`
          );
        }

        const wilayahRecord = await prisma.wilayah.findFirst({
          where: { nama: { equals: wilayah.trim(), mode: "insensitive" } },
          select: { id: true, nama: true },
        });
        if (!wilayahRecord) {
          throw new BadRequestError(
            `Wilayah '${wilayah}' tidak ditemukan untuk customer: ${nama}`
          );
        }

        const paketRecord = await prisma.paket.findFirst({
          where: { nama: { equals: paket.trim(), mode: "insensitive" } },
          select: { id: true, nama: true },
        });
        if (!paketRecord) {
          throw new BadRequestError(
            `Paket '${paket}' tidak ditemukan untuk customer: ${nama}`
          );
        }

        const salesRecord = await prisma.sales.findFirst({
          where: { nama: { equals: sales.trim(), mode: "insensitive" } },
          select: { id: true, nama: true },
        });
        if (!salesRecord) {
          throw new BadRequestError(
            `Sales '${sales}' tidak ditemukan untuk customer: ${nama}`
          );
        }

        const existingCustomer = await prisma.registrasiIndibiz.findFirst({
          where: {
            OR: [{ no_ktp: no_ktp.trim() }, { email: email.trim() }],
          },
        });

        if (existingCustomer) {
          console.warn(
            `Customer dengan KTP/email '${no_ktp}' sudah ada, dilewati`
          );
          continue;
        }

        const newCustomer = await prisma.registrasiIndibiz.createMany({
          data: {
            nama: nama.trim(),
            wilayah_id: wilayahRecord.id,
            paket_id: paketRecord.id,
            sales_id: salesRecord.id,
            no_hp_1: no_hp_1.trim(),
            no_hp_2: no_hp_2?.trim() || null,
            kordinat: koordinat?.trim() || "",
            alamat: alamat.trim(),
            nama_pic: nama_pic.trim(),
            ttl_pic: ttl_pic.trim(),
            no_ktp: no_ktp.trim(),
            email: email.trim(),
            foto_ktp: foto_ktp?.trim() || "",
            foto_selfie: foto_selfie?.trim() || "",
            bukti_usaha: bukti_usaha?.trim() || "",
            bukti_niwp: bukti_niwp?.trim() || "",
            foto_lokasi: foto_lokasi?.trim() || "",
          },
        });

        results.push(newCustomer);
      }

      return null;
    } catch (error) {
      console.error("Customer importExcel error:", error);
      throw error;
    }
  }
}

export const RegistrasiIndibizModel = new RegistrasiIndibizService();