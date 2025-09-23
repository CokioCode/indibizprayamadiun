import {
  asyncHandler,
  PaginationHelper,
  ResponseHelper,
} from "../../shared/utils";
import { Context } from "hono";
import { CategoriModel } from "../models";
import { KategoriInput } from "../../shared/types/kategori";

export const kategoriController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await CategoriModel.index({
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
      "Berhasil mengambil daftar categori"
    );
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await CategoriModel.shows(id);
    return ResponseHelper.success(
      c,
      data,
      "Berhasil mengambil detail kategori"
    );
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as KategoriInput;
    const created = await CategoriModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat kategori");
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as KategoriInput;
    const updated = await CategoriModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate kategori");
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await CategoriModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus kategori");
  }),
};
