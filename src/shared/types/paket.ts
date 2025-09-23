import { z } from "zod";

export const paketSchemaCreate = z.object({
  nama: z.string().min(1, "Nama paket tidak boleh kosong"),
  bandwith: z
    .number()
    .int("Bandwith harus berupa bilangan bulat")
    .positive("Bandwith harus lebih dari 0"),
  price: z.number().min(0, "Harga tidak boleh kurang dari 0"),
  price_psb: z.number().min(0, "Harga PSB tidak boleh kurang dari 0"),
  category_ids: z
    .array(z.string().min(1, "Kategori tidak boleh kosong"))
    .min(1, "Kategori tidak boleh kosong"),
  promo_ids: z
    .array(
      z
        .string()
        .min(1, "Promo tidak boleh kosong")
        .optional()
        .or(z.literal("").transform(() => undefined))
    )
    .optional(),
  ppn: z
    .number()
    .int("PPN harus berupa bilangan bulat")
    .min(0, "PPN tidak boleh kurang dari 0"),
});

export const paketSchemaUpdate = paketSchemaCreate.partial();

export type PaketInputCreate = z.infer<typeof paketSchemaCreate>;
export type PaketInputUpdate = z.infer<typeof paketSchemaUpdate>;
