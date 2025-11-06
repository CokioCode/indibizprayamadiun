import * as XLSX from "xlsx";
import {
  ResponseHelper,
  PaginationHelper,
} from "../../shared/utils/response.js";
import { Context } from "hono";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { WilayahModel } from "../models/wilayah.js";
import { WilayahInput } from "../../shared/types/wilayah.js";

export const wilayahController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await WilayahModel.index({
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
      "Berhasil mengambil daftar wilayah"
    );
  }),

  show: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const data = await WilayahModel.shows(id);
    return ResponseHelper.success(c, data, "Berhasil mengambil detail wilayah");
  }),

  list: asyncHandler(async (c: Context): Promise<Response> => {
    const data = await WilayahModel.list();
    return ResponseHelper.success(c, data, "Berhasil mengambil list wilayah");
  }),

  create: asyncHandler(async (c: Context): Promise<Response> => {
    const validatedBody = c.get("validatedBody") as WilayahInput;
    const created = await WilayahModel.create(validatedBody);
    return ResponseHelper.success(c, created, "Berhasil membuat wilayah");
  }),

  update: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const validatedBody = c.get("validatedBody") as WilayahInput;
    const updated = await WilayahModel.update(id, validatedBody);
    return ResponseHelper.success(c, updated, "Berhasil mengupdate wilayah");
  }),

  delete: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    await WilayahModel.destroy(id);
    return ResponseHelper.success(c, null, "Berhasil menghapus wilayah");
  }),

  import: asyncHandler(async (c: Context): Promise<Response> => {
    const body = await c.req.parseBody();
    const file = body["file"] as File;

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    await WilayahModel.importExcel(data);

    return ResponseHelper.success(c, null, "Berhasil import wilayah");
  }),

  addStos: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { sto_ids } = body;

    if (!Array.isArray(sto_ids) || sto_ids.length === 0) {
      return ResponseHelper.error(
        c,
        "STO IDs harus berupa array dan tidak boleh kosong",
        400
      );
    }

    const result = await WilayahModel.addStos(id, sto_ids);
    return ResponseHelper.success(
      c,
      result,
      "Berhasil menambahkan STO ke wilayah"
    );
  }),

  removeStos: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { sto_ids } = body;

    if (!Array.isArray(sto_ids) || sto_ids.length === 0) {
      return ResponseHelper.error(
        c,
        "STO IDs harus berupa array dan tidak boleh kosong",
        400
      );
    }

    const result = await WilayahModel.removeStos(id, sto_ids);
    return ResponseHelper.success(
      c,
      result,
      "Berhasil menghapus STO dari wilayah"
    );
  }),
};