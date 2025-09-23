import { asyncHandler, PaginationHelper, ResponseHelper } from "../../shared";
import { Context } from "hono";
import { RegistrasiIndibizModel } from "../../core/models/registrasi_indibiz";

export const registrasiIndibizController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await RegistrasiIndibizModel.index({
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
      "Berhasil mengambil daftar registrasi indibiz"
    );
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await RegistrasiIndibizModel.shows(id);
    return ResponseHelper.success(
      c,
      data,
      "Berhasil mengambil detail registrasi indibiz"
    );
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const formData = await c.req.parseBody();
    const created = await RegistrasiIndibizModel.create(formData as any);
    return ResponseHelper.success(
      c,
      created,
      "Berhasil membuat registrasi indibiz"
    );
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const formData = await c.req.parseBody();
    const updated = await RegistrasiIndibizModel.update(id, formData as any);
    return ResponseHelper.success(
      c,
      updated,
      "Berhasil mengupdate registrasi indibiz"
    );
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await RegistrasiIndibizModel.destroy(id);
    return ResponseHelper.success(
      c,
      null,
      "Berhasil menghapus registrasi indibiz"
    );
  }),
};
