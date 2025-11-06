import { z } from "zod";

export const prodigiSchemaCreate = z.object({
  nama: z.string().min(1, "Nama prodigi wajib diisi"),
  harga: z.number().min(0, "Harga harus >= 0"),
  aktif: z.boolean().optional(),
});

export const prodigiSchemaUpdate = prodigiSchemaCreate.partial();

export type ProdigiInputCreate = z.infer<typeof prodigiSchemaCreate>;
export type ProdigiInputUpdate = z.infer<typeof prodigiSchemaUpdate>;







