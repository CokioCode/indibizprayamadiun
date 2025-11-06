import { z } from "zod";
import { TipePromoEnum } from "./enum";

export const promoSchemaCreate = z
  .object({
    nama: z
      .string()
      .min(3, "Nama promo minimal 3 karakter")
      .max(150, "Nama promo maksimal 150 karakter")
      .refine((val) => val.trim().length > 0, "Nama promo wajib diisi"),
    deskripsi: z.string().optional(),
    tipe_promo: TipePromoEnum,
    diskon_persen: z.number().min(0).max(100).optional(),
    diskon_nominal: z.number().min(0).optional(),
    psb_normal: z.number().min(0).default(500).optional(),
    psb_diskon_persen: z.number().min(0).max(100).default(70).optional(),
    psb_setelah_diskon: z.number().min(0).default(150).optional(),
    is_global: z.boolean().default(false).optional(),
    tanggal_mulai: z.coerce.date(),
    tanggal_selesai: z.coerce.date(),
    aktif: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (data.tanggal_mulai && data.tanggal_selesai) {
        return data.tanggal_selesai > data.tanggal_mulai;
      }
      return true;
    },
    {
      message: "Tanggal selesai harus setelah tanggal mulai",
      path: ["tanggal_selesai"],
    }
  );

export const promoSchemaUpdate = promoSchemaCreate.partial();

export type PromoInputCreate = z.infer<typeof promoSchemaCreate>;
export type PromoInputUpdate = z.infer<typeof promoSchemaUpdate>;