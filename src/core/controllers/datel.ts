import { asyncHandler, PaginationHelper, ResponseHelper } from "@/shared";
import { Context } from "hono";
import { DatelModel } from "../models";
import { DatelInputCreate, DatelInputUpdate } from "@/shared/types/datel";

export const datelController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await DatelModel.index({
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
      "Berhasil mengambil daftar datel"
    );
  }),
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await DatelModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list datel");
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await DatelModel.shows(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail datel");
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as DatelInputCreate;
    const created = await DatelModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat datel");
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as DatelInputUpdate;
    const updated = await DatelModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate datel");
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await DatelModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus datel");
  }),
};
