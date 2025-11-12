import { Context } from "hono";
import * as XLSX from "xlsx";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import {
  PaginationHelper,
  ResponseHelper,
} from "../../shared/utils/response.js";
import { RegistrasiIndibizModel } from "../models/registrasi_indibiz.js";

export const registrasiIndibizController = {
  index: asyncHandler(async (c: Context): Promise<Response> => {
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "5");
    const q = c.req.query("q") || undefined;

    const { page: validPage, limit: validLimit } =
      PaginationHelper.validatePaginationParams(page, limit);

    const result = await RegistrasiIndibizModel.index({
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
  setKodeSc: asyncHandler(async (c: Context): Promise<Response> => {
    const id = c.req.param("id");
    const body = c.get("validatedBody");
    const updated = await RegistrasiIndibizModel.setKodeSc(id, body);
    return ResponseHelper.success(
      c,
      updated,
      "Berhasil mengupdate status registrasi indibiz"
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
  import: asyncHandler(async (c: Context): Promise<Response> => {
    const body = await c.req.parseBody();
    const file = body["file"] as File;

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    await RegistrasiIndibizModel.importExcelCustomers(data);

    return ResponseHelper.success(c, null, "Berhasil import customers");
  }),
};