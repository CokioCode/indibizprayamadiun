import * as XLSX from "xlsx";
import {
  ResponseHelper,
  PaginationHelper,
} from "../../shared/utils/response.js";
import { Context } from "hono";
import { StoAgencInput } from "../../shared/types/sto.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { StoModel } from "../models/sto.js";

export const stoController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await StoModel.index({
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
      "Berhasil mengambil daftar sto"
    );
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await StoModel.shows(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail sto");
  }),
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await StoModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list sto");
  }),
  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as StoAgencInput;
    const created = await StoModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat sto");
  }),
  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as StoAgencInput;
    const updated = await StoModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate sto");
  }),
  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await StoModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus sto");
  }),
  import: asyncHandler(async (c: Context): Promise<Response> => {
    const body = await c.req.parseBody();
    const file = body["file"] as File;

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    await StoModel.importExcel(data);

    return ResponseHelper.success(c, null, "Berhasil import sto");
  }),
};