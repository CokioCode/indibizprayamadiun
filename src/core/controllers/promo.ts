import * as XLSX from "xlsx";
import {
  asyncHandler,
  PaginationHelper,
  ResponseHelper,
} from "../../shared/utils/index.js";
import { Context } from "hono";
import { PromoModel } from "../models/index.js";
import { PromoInputCreate, PromoInputUpdate } from "../../shared/types/promo.js";

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
  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await PromoModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list promo");
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
  import: asyncHandler(async (c: Context): Promise<Response> => {
    const contentType = c.req.header("content-type") || "";
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
      await PromoModel.importExcel(data);
      return ResponseHelper.success(c, null, "Berhasil import promo");
    }


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

    await PromoModel.importExcel(items);
    return ResponseHelper.success(c, { count: items.length }, "Import promo sukses");
  }),
};
