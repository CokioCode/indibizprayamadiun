import * as XLSX from "xlsx";
import {
  asyncHandler,
  PaginationHelper,
  ResponseHelper,
} from "../../shared/utils/index.js";
import { Context } from "hono";
import { PaketModel } from "../models/index.js";
import { PaketInputCreate, PaketInputUpdate } from "../../shared/types/paket.js";

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
  import: asyncHandler(async (c: Context): Promise<Response> => {
    const contentType = c.req.header("content-type") || "";

    // Support Excel (multipart/form-data)
    if (contentType.includes("multipart/form-data")) {
      const body = await c.req.parseBody();
      const file = body["file"] as File;
      if (!file) {
        return ResponseHelper.error(c, "File tidak ditemukan", 400);
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);
      await PaketModel.importExcel(data);
      return ResponseHelper.success(c, null, "Berhasil import paket");
    }

    // Fallback JSON
    let items: any[] = [];
    try {
      if (contentType.includes("application/json")) {
        const body = await c.req.json();
        items = Array.isArray(body) ? body : body?.items || [];
      } else {
        const text = await c.req.text();
        items = JSON.parse(text);
      }
    } catch (e) {
      return ResponseHelper.error(c, "Format import tidak valid", 400);
    }

    if (!Array.isArray(items) || items.length === 0) {
      return ResponseHelper.error(c, "Data import kosong", 400);
    }

    await PaketModel.importExcel(items);
    return ResponseHelper.success(c, { count: items.length }, "Import paket sukses");
  }),
};