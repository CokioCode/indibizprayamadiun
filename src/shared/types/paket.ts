import { z } from "zod";
import {
  KategoriPaketEnum,
  RatioEnum,
  JenisPaketEnum,
  TipeONTEnum,
} from "./enum";

export const paketSchemaCreate = z.object({
  kode: z.string().optional().nullable(),
  nama: z.string().min(1, "Nama paket wajib diisi"),
  kategori: KategoriPaketEnum.optional(),
  ratio: RatioEnum.optional(),
  jenis_paket: JenisPaketEnum,
  bandwidth: z.number().int().positive("Bandwidth harus angka positif"),
  ont_type: TipeONTEnum.optional(),
  harga: z.number().min(0, "Harga harus angka non-negatif"),
  harga_psb: z.number().min(0, "Harga PSB harus angka non-negatif"),
  total: z.number().min(0, "Total harus angka non-negatif"),
  aktif: z.boolean().optional(),
  prodigis: z.array(z.string()).optional(),
  promo_pakets: z.array(z.string()).optional(),
});

export const paketSchemaUpdate = paketSchemaCreate.partial();

export type PaketInputCreate = z.infer<typeof paketSchemaCreate>;
export type PaketInputUpdate = z.infer<typeof paketSchemaUpdate>;
