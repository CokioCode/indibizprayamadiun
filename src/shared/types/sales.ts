import { z } from "zod";

export const StatusSalesEnum = z.enum(["ACTIVE", "DELETED"]);
export type StatusSales = z.infer<typeof StatusSalesEnum>;

export const createSalesSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  kode_sales: z.string().min(1, "Kode sales wajib diisi"),
  email: z.string().email("Email tidak valid"),
  status: StatusSalesEnum,
  agency_id: z.string().min(1, "Agency ID wajib diisi"),
  datel_id: z.string().min(1, "Datel ID wajib diisi"),
  kat_umur_sa: z.coerce.date("Tanggal tidak valid").optional(),
});

export const updateSalesSchema = createSalesSchema.partial();

export type CreateSalesInput = z.infer<typeof createSalesSchema>;
export type UpdateSalesInput = z.infer<typeof updateSalesSchema>;
