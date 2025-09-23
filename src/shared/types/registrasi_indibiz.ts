import type { RegistrasiIndibiz } from "@prisma/client";
import { z } from "zod";

export interface CreateRegistrasiIndibizInput {
  nama: string;
  datel_id: string;
  paket_id: string;
  sales_id: string;
  no_hp_1: string;
  no_hp_2: string;
  kordinat: string;
  alamat: string;
  nama_pic: string;
  ttl_pic: string;
  no_ktp: string;
  email: string;

  foto_ktp?: File | string;
  foto_selfie?: File | string;
  bukti_usaha?: File | string;
  bukti_niwp?: File | string;
}

export interface UpdateRegistrasiIndibizInput {
  nama?: string;
  datel_id?: string;
  paket_id?: string;
  sales_id?: string;
  no_hp_1?: string;
  no_hp_2?: string;
  kordinat?: string;
  alamat?: string;
  nama_pic?: string;
  ttl_pic?: string;
  no_ktp?: string;
  email?: string;

  foto_ktp?: File | string;
  foto_selfie?: File | string;
  bukti_usaha?: File | string;
  bukti_niwp?: File | string;
}

export const createRegistrasiIndibizSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  datel_id: z.string().min(1, "Datel ID wajib diisi"),
  paket_id: z.string().min(1, "Paket ID wajib diisi"),
  sales_id: z.string().min(1, "Sales ID wajib diisi"),
  no_hp_1: z.string().min(1, "No HP 1 wajib diisi"),
  no_hp_2: z.string(),
  kordinat: z.string().min(1, "Koordinat wajib diisi"),
  alamat: z.string().min(1, "Alamat wajib diisi"),
  nama_pic: z.string().min(1, "Nama PIC wajib diisi"),
  ttl_pic: z.string().min(1, "TTL PIC wajib diisi"),
  no_ktp: z.string().min(1, "No KTP wajib diisi"),
  email: z.email("Format email tidak valid"),
  foto_ktp: z.instanceof(File, { message: "Foto KTP wajib diisi" }),
  foto_selfie: z.instanceof(File, { message: "Foto selfie wajib diisi" }),
  bukti_usaha: z.instanceof(File, { message: "Bukti usaha wajib diisi" }),
  bukti_niwp: z.instanceof(File, { message: "Bukti NIB & NPWP wajib diisi" }),
});

export const updateRegistrasiIndibizSchema =
  createRegistrasiIndibizSchema.partial();

export interface FileUploadResult {
  success: boolean;
  fileId?: string;
  fileName?: string;
  webViewLink?: string;
  webContentLink?: string;
  error?: string;
}

export interface RegistrasiWithFiles extends RegistrasiIndibiz {
  foto_ktp_info?: FileUploadResult;
  foto_selfie_info?: FileUploadResult;
  bukti_usaha_info?: FileUploadResult;
  bukti_niwp_info?: FileUploadResult;
}
