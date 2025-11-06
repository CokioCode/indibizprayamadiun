import { z } from "zod";

export const stoSchema = z.object({
  name: z
    .string()
    .min(1, "Nama sto harus diisi")
    .max(100, "Nama sto maksimal 100 karakter"),
  abbreviation: z
    .string()
    .min(1, "Abbreviation harus diisi")
    .max(100, "Abbreviation maksimal 100 karakter"),
});

export type StoAgencInput = z.infer<typeof stoSchema>;