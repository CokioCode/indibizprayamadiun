import { z } from "zod";

export const wilayahSchema = z.object({
  nama: z
    .string()
    .min(1, "Nama wilayah harus diisi")
    .max(100, "Nama wilayah maksimal 100 karakter"),
  sto_ids: z.array(z.uuid()).optional(),
});

export type WilayahInput = z.infer<typeof wilayahSchema>;