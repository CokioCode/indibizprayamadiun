import { google } from "googleapis";
import { Readable } from "stream";

const auth = new google.auth.GoogleAuth({
  keyFile: "./pkltelkom-472915-307b8a56c7e7.json",
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });

export async function uploadToGoogleDrive(file: File, folderId?: string) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const stream = Readable.from(buffer);

  const targetFolder = folderId ?? process.env.GDRIVE_FOLDER_ID!;
  console.log("Uploading to folder:", targetFolder);

  const response = await drive.files.create({
    requestBody: {
      name: file.name,
      parents: [targetFolder], // Wajib benar
    },
    media: {
      mimeType: file.type,
      body: stream,
    },
    fields: "id, name, webViewLink, webContentLink",
  });

  return response.data;
}
