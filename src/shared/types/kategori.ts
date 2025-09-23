import { z } from "zod";

export const kategoriSchema = z.object({
  nama: z
    .string()
    .min(1, "Nama kategori harus diisi")
    .max(100, "Nama kategori maksimal 100 karakter"),
});

export type KategoriInput = z.infer<typeof kategoriSchema>;
