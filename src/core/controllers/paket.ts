import { asyncHandler, PaginationHelper, ResponseHelper } from "@/shared";
import { Context } from "hono";
import { PaketModel } from "../models";
import { PaketInputCreate, PaketInputUpdate } from "@/shared/types/paket";

export const paketController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await PaketModel.index({
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
      "Berhasil mengambil daftar paket"
    );
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await PaketModel.show(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail paket");
  }),
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await PaketModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list paket");
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as PaketInputCreate;
    const created = await PaketModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat paket");
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as PaketInputUpdate;
    const updated = await PaketModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate paket");
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await PaketModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus paket");
  }),
};
