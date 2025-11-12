import * as XLSX from "xlsx";
import {
  asyncHandler,
  ResponseHelper,
  PaginationHelper,
} from "../../shared/utils/index.js";
import { Context } from "hono";
import { AgencModel } from "../models/index.js";
import { AgencInput } from "../../shared/types/agenc.js";

export const agencController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");
    const q = c.req.query("q") || undefined;

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await AgencModel.index({
      page: validPage,
      limit: validLimit,
      q,
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
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await AgencModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list agenc");
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
    import: asyncHandler(async (c: Context): Promise<Response> => {
    const body = await c.req.parseBody();
    const file = body["file"] as File;

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    await AgencModel.importExcel(data);

    return ResponseHelper.success(c, null, "Berhasil import agenc");
  }),
};
