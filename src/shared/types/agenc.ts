import { z } from "zod";

export const agencSchema = z.object({
  nama: z
    .string()
    .min(1, "Nama agenc harus diisi")
    .max(100, "Nama agenc maksimal 100 karakter"),
});

export type AgencInput = z.infer<typeof agencSchema>;
