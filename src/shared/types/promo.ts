import { z } from "zod";

export const JenisPromoEnum = z.enum(["DISKON", "CASHBACK", "BONUS", "DLL"]);
export type JenisPromo = z.infer<typeof JenisPromoEnum>;

export const promoSchemaCreate = z
  .object({
    nama: z
      .string()
      .min(3, "Nama promo minimal 3 karakter")
      .max(100, "Nama promo maksimal 100 karakter")
      .refine((val) => val.trim().length > 0, "Nama promo wajib diisi"),
    deskripsi: z
      .string()
      .min(5, "Deskripsi promo minimal 5 karakter")
      .max(255, "Deskripsi promo maksimal 255 karakter")
      .refine((val) => val.trim().length > 0, {
        message: "Deskripsi promo wajib diisi",
      }),
    jenis: JenisPromoEnum,
    diskon: z
      .number("Diskon wajib diisi")
      .min(0, "Diskon minimal 0")
      .max(100, "Diskon maksimal 100"),
    mulai: z.coerce
      .date()
      .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
        message: "Tanggal mulai promo wajib diisi",
        path: ["mulai"],
      }),
    akhir: z.coerce
      .date()
      .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
        message: "Tanggal akhir promo wajib diisi",
        path: ["akhir"],
      }),
    is_global: z.boolean("Status global promo wajib diisi"),
  })
  .refine(
    (data) => {
      if (data.mulai && data.akhir) {
        return data.akhir > data.mulai;
      }
      return true;
    },
    {
      message: "Tanggal akhir promo harus setelah tanggal mulai promo",
      path: ["akhir"],
    }
  );

export const promoSchemaUpdate = promoSchemaCreate.partial();

export type PromoInputCreate = z.infer<typeof promoSchemaCreate>;
export type PromoInputUpdate = z.infer<typeof promoSchemaUpdate>;
