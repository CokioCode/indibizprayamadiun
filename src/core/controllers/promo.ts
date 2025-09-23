import { asyncHandler, PaginationHelper, ResponseHelper } from "@/shared";
import { Context } from "hono";
import { PromoModel } from "../models";
import { PromoInputCreate, PromoInputUpdate } from "@/shared/types/promo";

export const promoController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await PromoModel.index({
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
      "Berhasil mengambil daftar promo"
    );
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await PromoModel.shows(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail promo");
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as PromoInputCreate;
    const created = await PromoModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat promo");
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as PromoInputUpdate;
    const updated = await PromoModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate promo");
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await PromoModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus promo");
  }),
};
