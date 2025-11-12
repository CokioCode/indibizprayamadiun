import { Context } from "hono";
import * as XLSX from "xlsx";
import {
  CreateSalesInput,
  UpdateSalesInput,
} from "../../shared/types/sales.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import {
  PaginationHelper,
  ResponseHelper,
} from "../../shared/utils/response.js";
import { SalesModel } from "../models/sales.js";

export const salesController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");
    const q = c.req.query("q") || undefined;

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await SalesModel.index({
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
      "Berhasil mengambil daftar sales"
    );
  }),
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await SalesModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list sales");
  }),
  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await SalesModel.show(id);
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
  import: asyncHandler(async (c: Context): Promise<Response> => {
    const body = await c.req.parseBody();
    const file = body["file"] as File;

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    await SalesModel.importExcel(data);

    return ResponseHelper.success(c, null, "Berhasil import sales");
  }),
};