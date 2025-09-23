import { z } from "zod";

export const KategoriDatelEnum = z.enum(["HERO", "NON_HERO"]);
export type KategoriDatel = z.infer<typeof KategoriDatelEnum>;

export const SubAreaEnum = z.enum(["INNER", "OUTER"]);
export type SubArea = z.infer<typeof SubAreaEnum>;

export const datelSchemaCreate = z.object({
  kode_sto: z.string(),
  nama: z.string(),
  categori: KategoriDatelEnum,
  wilayah: z.string(),
  sub_area: SubAreaEnum,
});
export const datelSchemaUpdate = datelSchemaCreate.partial();

export type DatelInputCreate = z.infer<typeof datelSchemaCreate>;
export type DatelInputUpdate = z.infer<typeof datelSchemaUpdate>;
