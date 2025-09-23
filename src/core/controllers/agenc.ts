import { asyncHandler, ResponseHelper, PaginationHelper } from "@/shared";
import { Context } from "hono";
import { AgencModel } from "../models";
import { AgencInput } from "@/shared/types/agenc";

export const agencController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await AgencModel.index({
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
      "Berhasil mengambil daftar agenc"
    );
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await AgencModel.shows(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail agenc");
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as AgencInput;
    const created = await AgencModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat agenc");
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as AgencInput;
    const updated = await AgencModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate agenc");
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await AgencModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus agenc");
  }),
};
