// import fs from "fs";
// import path from "path";
// import XLSX from "xlsx";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// // CLI flags
// const args = process.argv.slice(2);
// function getFlag(name: string, fallback?: string | number | boolean) {
//   const idx = args.findIndex((a) => a === `--${name}` || a.startsWith(`--${name}=`));
//   if (idx === -1) return fallback;
//   const a = args[idx];
//   if (a.includes("=")) {
//     const v = a.split("=")[1];
//     if (v === undefined || v === "") return true;
//     if (v === "true") return true;
//     if (v === "false") return false;
//     const n = Number(v);
//     return Number.isNaN(n) ? v : n;
//   }
//   const next = args[idx + 1];
//   if (!next || next.startsWith("--")) return true;
//   return next;
// }

// const SHEET_NAME = (getFlag("sheet", "RegistrasiIndibiz") as string) || "RegistrasiIndibiz";
// const BATCH_SIZE = Number(getFlag("batch", 500)) || 500;
// const DRY_RUN = Boolean(getFlag("dryRun", false));
// const AUTO_CREATE_REFS = Boolean(getFlag("autoCreateRefs", false));
// const AUTO_CREATE_PAKET = Boolean(getFlag("autoCreatePaket", false));
// const INSPECT = Boolean(getFlag("inspect", false));

// const EXCEL_PATH = path.join(process.cwd(), "prisma", "Rekap_Inputan_IndiBiz.xlsx");

// function safeString(v: any) {
//   if (v === null || v === undefined) return null;
//   const s = String(v).trim();
//   return s === "" ? null : s;
// }

// function toDecimalSafeString(v: any): string | null {
//   if (v === null || v === undefined || v === "") return null;
//   const s = String(v).replace(/\./g, "").replace(/,/g, ".").replace(/\s/g, "");
//   return s;
// }

// function clampDecimalString(intString: string, max = 99999999.99): string {
//   // Accept integer-like strings and return a string suitable for Decimal(10,2) without overflow
//   let n = Number(intString);
//   if (!Number.isFinite(n) || n < 0) n = 0;
//   if (n > max) n = max;
//   // format with 2 decimals
//   return n.toFixed(2);
// }

// function lowerKey(k?: string | null) {
//   return (k || "").trim().toLowerCase();
// }

// type Row = Record<string, any>;

// function readSheetRows(filePath: string, sheetName?: string): Row[] {
//   if (!fs.existsSync(filePath)) {
//     throw new Error(`Excel file not found at ${filePath}`);
//   }
//   const wb = XLSX.readFile(filePath, { cellDates: true });
//   if (sheetName) {
//     const sheet = wb.Sheets[sheetName];
//     if (!sheet) {
//       console.warn(`Sheet '${sheetName}' not found. Falling back to all sheets.`);
//       console.log("Sheets tersedia:", wb.SheetNames.join(", "));
//     } else {
//       return XLSX.utils.sheet_to_json<Row>(sheet, { defval: null });
//     }
//   }
//   const rows: Row[] = [];
//   for (const n of wb.SheetNames) {
//     const sh = wb.Sheets[n];
//     const r = XLSX.utils.sheet_to_json<Row>(sh, { defval: null });
//     rows.push(...r);
//   }
//   return rows;
// }

// const COLS = {
//   // Broadened aliases for business name column to match various sheets/forms
//   nama: [
//     "NAMA USAHA (Diikuti Nama Datel) (input nama spesifik ex : Toko Barokah Ponorogo)",
//     "NAMA USAHA (Diikuti Nama Datel)",
//     "NAMA USAHA",
//     "Nama Usaha",
//     "NAMA USAHA CP",
//     "Nama",
//     "NAMA",
//   ],
//   wilayah: ["DATEL PEMASANGAN", "Datel", "DATEL"],
//   paket: ["PAKET INDIBIZ", "Paket", "Nama Paket", "paket"],
//   sales: ["NAMA SALES (WAJIB NAMA LENGKAP)", "sales", "Sales", "Nama Sales", "Nama"],
//   no_hp_1: ["NO HP CP 1", "No HP", "NO_HP", "handphone", "nohp"],
//   no_hp_2: ["NO HP CP 2", "no_hp_2"],
//   koordinat: ["KOORDINAT ALAMAT", "kordinat", "koordinat"],
//   alamat: ["ALAMAT PEMASANGAN", "alamat"],
//   nama_pic: ["NAMA PIC", "nama_pic"],
//   ttl_pic: ["TEMPAT TANGGAL LAHIR PIC", "ttl_pic"],
//   no_ktp: ["NOMOR KTP/NIK  PIC", "no_ktp"],
//   email: ["EMAIL", "email"],
//   foto_ktp: ["FOTO KTP", "foto_ktp"],
//   foto_selfie: ["SELFIE DENGAN KTP", "foto_selfie"],
//   bukti_usaha: ["BUKTI USAHA (Foto Lokasi Usaha/Kantor/Sekolah yang Telihat Nama atau Plang atau Banner Usaha/Kantor/Sekolah)", "bukti_usaha"],
//   bukti_niwp: ["BUKTI NIB DAN NPWP USAHA", "bukti_niwp"],
//   foto_lokasi: ["FOTO LOKASI INSTALASI (Mohon difotokan Full Bangunannya)", "foto_lokasi"],
//   nomer_ao: ["NOMOR AO", "nomer_ao"],
//   status: ["STATUS SC AO", "status"],
// };

// function normalizeKeyName(s: string) {
//   return s
//     .toLowerCase()
//     .replace(/\s+/g, " ") // collapse whitespace
//     .replace(/[^a-z0-9 ]+/g, "") // remove punctuation
//     .trim();
// }

// function getFirst(row: Row, keys: string[]) {
//   // Build a lookup of normalized header -> original key
//   const normalizedEntries = Object.keys(row).map((orig) => ({
//     orig,
//     norm: normalizeKeyName(orig),
//   }));

//   for (const alias of keys) {
//     const aliasNorm = normalizeKeyName(alias);
//     // Try exact normalized match first
//     const exact = normalizedEntries.find((e) => e.norm === aliasNorm);
//     if (exact) {
//       const v = row[exact.orig];
//       if (v !== undefined && v !== null && String(v).trim() !== "") return v;
//     }
//     // Fallback: partial includes match (either direction)
//     const partial = normalizedEntries.find(
//       (e) => e.norm.includes(aliasNorm) || aliasNorm.includes(e.norm)
//     );
//     if (partial) {
//       const v = row[partial.orig];
//       if (v !== undefined && v !== null && String(v).trim() !== "") return v;
//     }
//   }
//   return null;
// }

// async function ensureDefaultAgency(): Promise<string> {
//   const name = "Default Agency";
//   if (DRY_RUN) {
//     // simulate default agency id in dry-run
//     return `dryrun:agency:${lowerKey(name)}`;
//   }
//   const ag = await prisma.agenc.upsert({
//     where: { nama: name },
//     update: {},
//     create: { nama: name },
//   });
//   return ag.id;
// }

// async function ensureAgencyByName(name: string): Promise<string> {
//   if (!name) return await ensureDefaultAgency();
//   if (DRY_RUN) return `dryrun:agency:${lowerKey(name)}`;
//   const existing = await prisma.agenc.findFirst({ where: { nama: name }, select: { id: true } });
//   if (existing) return existing.id;
//   if (!AUTO_CREATE_REFS) return await ensureDefaultAgency();
//   const created = await prisma.agenc.create({ data: { nama: name } });
//   return created.id;
// }

// async function maybeCreateSto(name: string | null): Promise<string | null> {
//   if (!name) return null;
//   if (DRY_RUN) return `dryrun:sto:${lowerKey(name)}`;
//   const existing = await prisma.sto.findFirst({ where: { name }, select: { id: true } });
//   if (existing) return existing.id;
//   if (!AUTO_CREATE_REFS) return null;
//   // abbreviation is required in schema; use name as fallback
//   const created = await prisma.sto.create({ data: { name, abbreviation: name } });
//   return created.id;
// }

// async function buildReferenceCaches() {
//   const [wilayahs, pakets, sales] = await Promise.all([
//     prisma.wilayah.findMany({ select: { id: true, nama: true } }),
//     prisma.paket.findMany({ select: { id: true, nama: true } }),
//     prisma.sales.findMany({ select: { id: true, nama: true } }),
//   ]);
//   const wilayahByName = new Map<string, string>();
//   const paketByName = new Map<string, string>();
//   const salesByName = new Map<string, string>();
//   for (const w of wilayahs) wilayahByName.set(lowerKey(w.nama), w.id);
//   for (const p of pakets) paketByName.set(lowerKey(p.nama), p.id);
//   for (const s of sales) salesByName.set(lowerKey(s.nama), s.id);
//   return { wilayahByName, paketByName, salesByName };
// }

// function readSalesDetails(): Map<string, any> {
//   const merge = (curr: any, next: any) => ({
//     ...curr,
//     // prefer existing truthy, else take from next
//     kode_sales: curr?.kode_sales || next?.kode_sales || null,
//     email: curr?.email || next?.email || null,
//     status: (curr?.status || next?.status || "ACTIVE").toUpperCase(),
//     agency_name: curr?.agency_name || next?.agency_name || null,
//     datel_name: curr?.datel_name || next?.datel_name || null,
//     sto_name: curr?.sto_name || next?.sto_name || null,
//     tgl_reg: curr?.tgl_reg || next?.tgl_reg || null,
//   });

//   try {
//     const wb = XLSX.readFile(EXCEL_PATH, { cellDates: true });

//     // Build candidates dynamically from all sheet names to catch variations
//     const allNames = wb.SheetNames;
//     const candidateSheetNames = allNames.filter((n) => {
//       const s = n.toUpperCase();
//       return (
//         s.includes("NEW KODE SALES AGENCY") ||
//         s.includes("KODE SALES AGENCY") ||
//         s.includes("DATA SALES LAMA") ||
//         s === "SALES"
//       );
//     });

//     const map = new Map<string, any>();

//     const ALIAS = {
//       nama: ["nama", "Nama", "sales", "Sales", "Nama Sales"],
//       kode: ["Kode New", "kode_sales", "Kode Sales", "kode", "Kode"],
//       email: ["Email", "email"],
//       status: ["Status", "status"],
//       agency: ["Agency", "agency", "Nama Agency", "Agency Name", "Supreme / Direct"],
//       datel: ["Datel", "DATEL PEMASANGAN", "DATEL"],
//       sto: ["STO", "sto"],
//       tgl_reg: ["Tanggal Registrasi", "Tgl Registrasi", "Tanggal Daftar"],
//     } as const;

//     for (const name of candidateSheetNames) {
//       const sheet = wb.Sheets[name];
//       if (!sheet) continue;
//       const data = XLSX.utils.sheet_to_json<Row>(sheet, { defval: null });
//       for (const r of data) {
//         const namaRaw = getFirst(r, ALIAS.nama);
//         const nama = safeString(namaRaw);
//         if (!nama) continue;
//         const key = lowerKey(nama.replace(/\s+/g, " "));

//         const kode_sales = safeString(getFirst(r, ALIAS.kode));
//         const email = safeString(getFirst(r, ALIAS.email));
//         const status = ((raw: any) => { const v = (raw || "").toString().trim().toUpperCase(); return v === "DELETED" ? "DELETED" : "ACTIVE"; })(safeString(getFirst(r, ALIAS.status))) as any;

//         // Map Agency with priority to 'Supreme / Direct' column
//         const supDirRaw = safeString((r as any)["Supreme / Direct"]) || null;
//         const mappedSupDir = supDirRaw
//           ? (/SUPREME/i.test(supDirRaw) ? "Supreme" : /DIRECT/i.test(supDirRaw) ? "Direct" : null)
//           : null;
//         const agencyExplicit = safeString(getFirst(r, ["Agency", "agency", "Nama Agency", "Agency Name"])) || null;
//         let agency_name = mappedSupDir || agencyExplicit;
//         if (agency_name && agency_name.trim().toLowerCase() === nama.trim().toLowerCase()) {
//           // Guard: if agency equals the sales name, treat as unknown to avoid creating per-sales agencies
//           agency_name = null;
//         }

//         const datel_name = safeString(getFirst(r, ALIAS.datel));
//         const sto_name = safeString(getFirst(r, ALIAS.sto));
//         const tgl_reg_raw = getFirst(r, ALIAS.tgl_reg);
//         const tgl_reg = tgl_reg_raw ? new Date(tgl_reg_raw as any) : null;

//         const next = { nama, kode_sales, email, status, agency_name, datel_name, sto_name, tgl_reg };
//         map.set(key, map.has(key) ? merge(map.get(key), next) : next);
//       }
//     }

//     return map;
//   } catch {
//     return new Map();
//   }
// }

// async function maybeCreateWilayah(name: string, wilayahByName: Map<string, string>) {
//   const key = lowerKey(name);
//   const cached = wilayahByName.get(key);
//   if (cached) return cached;
//   if (!AUTO_CREATE_REFS) throw new Error(`Wilayah '${name}' tidak ditemukan`);
//   if (DRY_RUN) {
//     const fakeId = `dryrun:wilayah:${key}`;
//     wilayahByName.set(key, fakeId);
//     return fakeId;
//   }
//   // Use upsert to avoid unique violations if it already exists
//   const rec = await prisma.wilayah.upsert({
//     where: { nama: name },
//     update: {},
//     create: { nama: name },
//   });
//   wilayahByName.set(key, rec.id);
//   return rec.id;
// }

// async function maybeCreateSales(name: string, salesByName: Map<string, string>, opts?: {
//   wilayahByName?: Map<string, string>;
//   agencyByName?: Map<string, string>;
//   stoByName?: Map<string, string>;
//   salesDetails?: Map<string, any>;
// }) {
//   const key = lowerKey(name);
//   const existingId = salesByName.get(key);

//   const mapStatusSales = (raw: string | null | undefined): any => {
//     const s = (raw || "").toString().trim().toUpperCase();
//     return s === "DELETED" ? "DELETED" : "ACTIVE";
//   };

//   const details = opts?.salesDetails?.get(key);
//   const agencyName = details?.agency_name || null;
//   const datelName = details?.datel_name || null;
//   const stoName = details?.sto_name || null;

//   // Resolve related refs (optionally autocreate if enabled)
//   const resolvedAgencyId = await ensureAgencyByName(agencyName || "");
//   const resolvedWilayahId = datelName && opts?.agencyByName
//     ? await maybeCreateWilayah(datelName, new Map())
//     : (datelName ? (await prisma.wilayah.findFirst({ where: { nama: datelName }, select: { id: true } }))?.id || null : null);
//   const resolvedStoId = await maybeCreateSto(stoName);

//   // If sales already exists, enrich missing fields
//   if (existingId) {
//     if (DRY_RUN) return existingId;
//     const current = await prisma.sales.findUnique({ where: { id: existingId }, select: {
//       id: true, kode_sales: true, email: true, agency_id: true, wilayah_id: true, sto_id: true, tgl_reg: true, status: true,
//     }});
//     if (current) {
//       const patch: any = {};
//       if (!current.kode_sales && details?.kode_sales) patch.kode_sales = details.kode_sales;
//       if (!current.email && details?.email) patch.email = details.email;
//       if (!current.agency_id && resolvedAgencyId) patch.agency_id = resolvedAgencyId;
//       if (!current.wilayah_id && resolvedWilayahId) patch.wilayah_id = resolvedWilayahId;
//       if (!current.sto_id && resolvedStoId) patch.sto_id = resolvedStoId;
//       if (!current.tgl_reg && details?.tgl_reg) patch.tgl_reg = new Date(details.tgl_reg);
//       const normalizedStatus = mapStatusSales(details?.status);
//       if (current.status !== normalizedStatus) patch.status = normalizedStatus;
//       if (Object.keys(patch).length > 0) {
//         await prisma.sales.update({ where: { id: existingId }, data: patch });
//       }
//     }
//     return existingId;
//   }

//   if (!AUTO_CREATE_REFS) throw new Error(`Sales '${name}' tidak ditemukan`);

//   if (DRY_RUN) {
//     const fakeId = `dryrun:sales:${key}`;
//     salesByName.set(key, fakeId);
//     return fakeId;
//   }

//   const now = new Date();
//   const created = await prisma.sales.create({
//     data: {
//       nama: name,
//       kode_sales: details?.kode_sales || null,
//       email: details?.email || null,
//       status: mapStatusSales(details?.status),
//       agency_id: resolvedAgencyId,
//       wilayah_id: resolvedWilayahId,
//       sto_id: resolvedStoId,
//       kat_umur_sa: now,
//       tgl_reg: details?.tgl_reg && !Number.isNaN(new Date(details.tgl_reg).getTime()) ? new Date(details.tgl_reg) : now,
//     },
//   });
//   salesByName.set(key, created.id);
//   return created.id;
// }

// function parseHargaFromK(s: string): string | null {
//   // expects formats like '589K', '1.499K', '1,499K'
//   const m = s.match(/([0-9][0-9\.,]*)\s*K/i);
//   if (!m) return null;
//   const numPart = m[1].replace(/\./g, "").replace(/,/g, ""); // remove thousand separators
//   const n = Number(numPart);
//   if (!Number.isFinite(n)) return null;
//   const val = n * 1000; // in rupiah
//   return String(val);
// }

// function parseBandwidthMb(name: string): number | null {
//   const m = name.match(/(\d+)\s*mb/i);
//   if (!m) return null;
//   const n = Number(m[1]);
//   return Number.isFinite(n) ? n : null;
// }

// async function getOrCreatePaket(name: string, paketByName: Map<string, string>): Promise<string> {
//   const key = lowerKey(name);
//   const id = paketByName.get(key);
//   if (id) return id;
//   if (!AUTO_CREATE_PAKET) throw new Error(`Paket '${name}' tidak ditemukan (tidak di-autocreate).`);

//   // Try to parse bandwidth and harga from display name
//   const bandwidth = parseBandwidthMb(name) ?? 0;
//   const parsedHarga = parseHargaFromK(name) ?? "0"; // in rupiah (integer-like string)
//   const hargaClamped = clampDecimalString(parsedHarga);
//   const totalClamped = hargaClamped; // assume total == harga (tanpa addon)

//   if (DRY_RUN) {
//     const fakeId = `dryrun:paket:${key}`;
//     paketByName.set(key, fakeId);
//     return fakeId;
//   }

//   const created = await prisma.paket.create({
//     data: {
//       nama: name,
//       jenis_paket: "INET_ONLY",
//       bandwidth: bandwidth,
//       harga: hargaClamped,
//       harga_psb: "0.00",
//       total: totalClamped,
//       aktif: true,
//     },
//   } as any);
//   paketByName.set(key, created.id);
//   return created.id;
// }

// async function getPaketIdOrThrow(name: string, paketByName: Map<string, string>): Promise<string> {
//   const key = lowerKey(name);
//   const id = paketByName.get(key);
//   if (id) return id;
//   return await getOrCreatePaket(name, paketByName);
// }

// function chunk<T>(arr: T[], size: number): T[][] {
//   const out: T[][] = [];
//   for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//   return out;
// }

// async function main() {
//   console.log(`📖 Membaca Excel: ${EXCEL_PATH}`);

//   if (INSPECT) {
//     const wb = XLSX.readFile(EXCEL_PATH, { cellDates: true });
//     console.log("Sheets:", wb.SheetNames);
//     for (const s of wb.SheetNames) {
//       const sh = wb.Sheets[s];
//       const json = XLSX.utils.sheet_to_json<Row>(sh, { defval: null });
//       const count = json.length;
//       const headers = count > 0 ? Object.keys(json[0] as Record<string, any>) : [];
//       console.log(`- ${s}: rows=${count}, headers(sample)=${headers.join(", ")}`);
//     }
//     console.log("Gunakan --sheet <nama_sheet> yang sesuai dan/atau sesuaikan mapping COLS.");
//     return;
//   }

//   const rows = readSheetRows(EXCEL_PATH, SHEET_NAME);
//   console.log(`✅ Total baris dibaca: ${rows.length} (sheet='${SHEET_NAME}')`);

//   const { wilayahByName, paketByName, salesByName } = await buildReferenceCaches();
//   const salesDetails = readSalesDetails();

//   const toInsert: any[] = [];
//   const skipped: { reason: string; rowIdx: number }[] = [];

//   for (let i = 0; i < rows.length; i++) {
//     const r = rows[i];

//     const nama = safeString(getFirst(r, COLS.nama));
//     const wilayah = safeString(getFirst(r, COLS.wilayah));
//     const paket = safeString(getFirst(r, COLS.paket));
//     const sales = safeString(getFirst(r, COLS.sales));
//     const no_hp_1 = safeString(getFirst(r, COLS.no_hp_1));
//     const alamat = safeString(getFirst(r, COLS.alamat));
//     const nama_pic = safeString(getFirst(r, COLS.nama_pic));
//     const ttl_pic = safeString(getFirst(r, COLS.ttl_pic));
//     const no_ktp = safeString(getFirst(r, COLS.no_ktp));
//     const email = safeString(getFirst(r, COLS.email));

//     if (!nama || !wilayah || !paket || !sales || !no_hp_1 || !alamat || !nama_pic || !ttl_pic || !no_ktp || !email) {
//       const missing: string[] = [];
//       if (!nama) missing.push("nama");
//       if (!wilayah) missing.push("wilayah");
//       if (!paket) missing.push("paket");
//       if (!sales) missing.push("sales");
//       if (!no_hp_1) missing.push("no_hp_1");
//       if (!alamat) missing.push("alamat");
//       if (!nama_pic) missing.push("nama_pic");
//       if (!ttl_pic) missing.push("ttl_pic");
//       if (!no_ktp) missing.push("no_ktp");
//       if (!email) missing.push("email");
//       skipped.push({ reason: `kolom wajib kosong: ${missing.join(", ")}` , rowIdx: i + 1 });
//       continue;
//     }


//     let wilayah_id: string;
//     let paket_id: string;
//     let sales_id: string;

//     try {
//       wilayah_id = await maybeCreateWilayah(wilayah, wilayahByName);
//       sales_id = await maybeCreateSales(sales, salesByName, { salesDetails });
//       paket_id = await getPaketIdOrThrow(paket, paketByName);
//     } catch (e: any) {
//       skipped.push({ reason: e?.message || String(e), rowIdx: i + 1 });
//       continue;
//     }

//     const STATUS_AO_VALUES = new Set([
//       "PS",
//       "CANCEL",
//       "KENDALA",
//       "REVOKE",
//       "QC1",
//       "PI",
//       "FALLOUT",
//       "WFM_UNSC",
//       "QC2_FCC",
//       "PAPERLESS",
//       "SURVER",
//       "DECLINE_FCC",
//       "PT3_WAITING_AKTIVASI",
//       "FOLLOWUP_TO_COMPLETE",
//     ]);

//     const mapStatusAo = (raw: string | null): any => {
//       if (!raw) return null;
//       const normalized = raw
//         .toUpperCase()
//         .replace(/[^A-Z0-9]+/g, "_")
//         .replace(/^_+|_+$/g, "");

//       const aliases: Record<string, string> = {
//         // Common variants -> canonical enum values
//         "QC2": "QC2_FCC",
//         "QC2FCC": "QC2_FCC",
//         "QC2_FCC": "QC2_FCC",
//         "FOLLOW_UP_TO_COMPLETE": "FOLLOWUP_TO_COMPLETE",
//         "FOLLOWUP_TO_COMPLETE": "FOLLOWUP_TO_COMPLETE",
//         "PT3_WAITING": "PT3_WAITING_AKTIVASI",
//         "PT3_WAITING_AKTIVASI": "PT3_WAITING_AKTIVASI",
//         "SURVEY": "SURVER",
//       };

//       const candidate = aliases[normalized] || normalized;
//       return STATUS_AO_VALUES.has(candidate) ? (candidate as any) : null;
//     };

//     const rec = {
//       nama,
//       wilayah_id,
//       paket_id,
//       sales_id,
//       no_hp_1,
//       no_hp_2: safeString(getFirst(r, COLS.no_hp_2)),
//       kordinat: safeString(getFirst(r, COLS.koordinat)) || null,
//       alamat,
//       nama_pic,
//       ttl_pic,
//       no_ktp,
//       email,
//       nomer_ao: safeString(getFirst(r, COLS.nomer_ao)) || null,
//       status: mapStatusAo(safeString(getFirst(r, COLS.status))),
//       foto_ktp: safeString(getFirst(r, COLS.foto_ktp)) || "",
//       foto_selfie: safeString(getFirst(r, COLS.foto_selfie)) || "",
//       bukti_usaha: safeString(getFirst(r, COLS.bukti_usaha)) || "",
//       bukti_niwp: safeString(getFirst(r, COLS.bukti_niwp)) || "",
//       foto_lokasi: safeString(getFirst(r, COLS.foto_lokasi)) || null,
//     };

//     toInsert.push(rec);
//   }

//   console.log(`➡️  Siap insert: ${toInsert.length}, dilewati: ${skipped.length}`);

//   if (toInsert.length > 0) {
//     if (DRY_RUN) {
//       console.log("🔎 Dry-run aktif, tidak melakukan insert ke DB.");
//     } else {
//       const batches = chunk(toInsert, BATCH_SIZE);
//       let inserted = 0;
//       for (let b = 0; b < batches.length; b++) {
//         const batch = batches[b];
//         if (batch.length === 0) continue;
//         const res = await prisma.registrasiIndibiz.createMany({ data: batch });
//         inserted += res.count;
//         console.log(`Batch ${b + 1}/${batches.length} inserted: ${res.count}`);
//       }
//       console.log(`✅ Selesai. Inserted: ${inserted}. Skipped: ${skipped.length}.`);
//     }
//   } else {
//     console.log("Tidak ada data untuk di-insert.");
//   }

//   if (skipped.length > 0) {
//     const preview = skipped.slice(0, 20).map((s) => `row ${s.rowIdx}: ${s.reason}`).join("\n");
//     console.log(`Ringkasan skip (${skipped.length}):\n${preview}${skipped.length > 20 ? "\n..." : ""}`);
//   }
// }

// main()
//   .catch(async (e) => {
//     console.error("❌ Error:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
