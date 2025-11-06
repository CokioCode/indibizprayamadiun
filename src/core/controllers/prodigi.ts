import { Context } from "hono";
import * as XLSX from "xlsx";
import { asyncHandler, PaginationHelper, ResponseHelper } from "../../shared/utils/index.js";
import { ProdigiModel } from "../models/index.js";
import { prodigiSchemaCreate, prodigiSchemaUpdate, ProdigiInputCreate, ProdigiInputUpdate } from "../../shared/types/prodigi.js";
import { validateBody } from "../middlewares/validation.js";

export const prodigiController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "10");
    const { page: p, limit: l } = PaginationHelper.validatePaginationParams(page, limit);
    const result = await ProdigiModel.index({ page: p, limit: l });
    const meta = PaginationHelper.createMeta(p, l, result.total);
    return ResponseHelper.paginated(c, result.data, meta, "Berhasil mengambil daftar prodigi");
  }),
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await ProdigiModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list prodigi");
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await ProdigiModel.show(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail prodigi");
  }),
  create: [
    validateBody(prodigiSchemaCreate),
    asyncHandler(async (c: Context): Promise<Response> => {
      const body = c.get("validatedBody") as ProdigiInputCreate;
      const created = await ProdigiModel.create(body);
      return ResponseHelper.success(c, created, "Berhasil membuat prodigi");
    }),
  ],
  update: [
    validateBody(prodigiSchemaUpdate),
    asyncHandler(async (c: Context): Promise<Response> => {
      const id = c.req.param("id");
      const body = c.get("validatedBody") as ProdigiInputUpdate;
      const updated = await ProdigiModel.update(id, body);
      return ResponseHelper.success(c, updated, "Berhasil mengupdate prodigi");
    }),
  ],
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await ProdigiModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus prodigi");
  }),
    import: asyncHandler(async (c: Context): Promise<Response> => {
      const body = await c.req.parseBody();
      const file = body["file"] as File;
  
      const buffer = Buffer.from(await file.arrayBuffer());
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);
  
      await ProdigiModel.importExcel(data);
  
      return ResponseHelper.success(c, null, "Berhasil import Prodigi");
    }),
};

export default prodigiController;







