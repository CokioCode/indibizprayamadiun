import { z } from "zod";

export const StatusSalesEnum = z.enum(["ACTIVE", "DELETED"]);
export type StatusSales = z.infer<typeof StatusSalesEnum>;

export const createSalesSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  kode_sales: z.string(),
  email: z.email("Email tidak valid"),
  status: StatusSalesEnum,
  agency_id: z.string().min(1, "Agency ID wajib diisi"),
  wilayah_id: z.string().optional(),
  sto_id: z.string().optional(),
  kat_umur_sa: z.coerce.date("Tanggal tidak valid").optional(),
  tgl_reg: z.coerce.date("Tanggal tidak valid").default(new Date()),
});

export const updateSalesSchema = createSalesSchema.partial();

export type CreateSalesInput = z.infer<typeof createSalesSchema>;
export type UpdateSalesInput = z.infer<typeof updateSalesSchema>;