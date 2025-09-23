import { asyncHandler, ResponseHelper, PaginationHelper } from "@/shared";
import { Context } from "hono";
import { SalesModel } from "../models";
import { CreateSalesInput, UpdateSalesInput } from "@/shared/types/sales";

export const salesController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await SalesModel.index({
      page: validPage,
      limit: validLimit,
    });
    const meta = PaginationHelper.createMeta(
      validPage,
      validLimit,
      result.total
    );

    return ResponseHelper.paginated(
      c,
      result.data,
      meta,
      "Berhasil mengambil daftar sales"
    );
  }),
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await SalesModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list sales");
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await SalesModel.shows(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail sales");
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as CreateSalesInput;
    const created = await SalesModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat sales");
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as UpdateSalesInput;
    const updated = await SalesModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate sales");
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await SalesModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus sales");
  }),
};
