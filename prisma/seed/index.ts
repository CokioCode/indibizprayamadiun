// /**
//  * generate-seed.ts
//  * Node/ Bun script that reads an Excel file and generates prisma/seed.ts
//  *
//  * USAGE (with bun):
//  *   bunx tsx generate-seed.ts
//  *
//  * Requirements (install once):
//  *   bun add xlsx uuid
//  *
//  * Notes:
//  * - Adjust the EXCEL_PATH if your excel file is elsewhere.
//  * - This script writes prisma/seed.ts (overwrite). After running, run:
//  *     bunx prisma db seed
//  *
//  */

// import fs from "fs";
// import path from "path";
// import XLSX from "xlsx";
// import { v4 as uuidv4 } from "uuid";

// const EXCEL_PATH = path.join(__dirname, "Rekap_Inputan_IndiBiz.xlsx");
// const OUT_SEED_PATH = path.join(process.cwd(), "prisma", "seed.ts");

// function readSheet(name: string) {
//   const wb = XLSX.readFile(EXCEL_PATH, { cellDates: true });
//   const sheet = wb.Sheets[name];
//   if (!sheet) return [];
//   const data = XLSX.utils.sheet_to_json(sheet, { defval: null });
//   return data as Record<string, any>[];
// }

// function safeString(v: any) {
//   if (v === null || v === undefined) return null;
//   return String(v).trim();
// }

// function toDecimalString(v: any) {
//   if (v === null || v === undefined || v === "") return null;
//   // remove thousand separators and replace comma decimal if present
//   return String(v).replace(/\\./g, "").replace(/,/g, ".").replace(/\\s/g, "");
// }

// function ensureDirExists(filePath: string) {
//   const dir = path.dirname(filePath);
//   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
// }

// function buildMaps(rows: Record<string, any>[], keyCols: string[]) {
//   const map = new Map<string, string>();
//   rows.forEach((r) => {
//     for (const kc of keyCols) {
//       if (r[kc]) {
//         const name = safeString(r[kc]);
//         if (name && !map.has(name)) map.set(name, uuidv4());
//       }
//     }
//   });
//   return map;
// }

// function arrayFromMap(m: Map<string, string>, modelName: string, fieldName = "nama") {
//   const arr: any[] = [];
//   for (const [name, id] of m.entries()) {
//     const obj: any = { id };
//     obj[fieldName] = name;
//     if (modelName === "sto") {
//       // STO expects `name` and optionally `abbreviation`
//       obj["name"] = name;
//     }
//     arr.push(obj);
//   }
//   return arr;
// }

// async function main() {
//   console.log("Reading Excel:", EXCEL_PATH);

//   // read sheets (adjust sheet names if your workbook uses other names)
//   const salesSheet = readSheet("Sales");
//   const paketSheet = readSheet("Paket");
//   const wilayahSheet = readSheet("Wilayah");
//   const stoSheet = readSheet("STO");
//   const agencySheet = readSheet("Agency");
//   const registrasiSheet = readSheet("RegistrasiIndibiz");
//   const promoSheet = readSheet("Promo");

//   // build name->id maps
//   const wilayahMap = buildMaps([...salesSheet, ...registrasiSheet, ...wilayahSheet], ["DATEL PEMASANGAN", "Datel", "wilayah", "DATEL"]);
//   const stoMap = buildMaps([...salesSheet, ...registrasiSheet, ...stoSheet], ["STO", "sto", "Sto"]);
//   const agencyMap = buildMaps([...salesSheet, ...agencySheet], ["Agency", "agency", "agency_name", "agency"]);
//   const salesMap = buildMaps(salesSheet, ["nama", "sales", "Sales", "Nama"]);
//   const paketMap = buildMaps(paketSheet, ["nama", "paket", "Paket", "Nama Paket"]);
//   const promoMap = buildMaps(promoSheet, ["kode", "nama", "Promo", "promo"]);

//   // prepare arrays
//   const wilayahArr = arrayFromMap(wilayahMap, "wilayah", "nama");
//   const stoArr = arrayFromMap(stoMap, "sto", "name");
//   const agencyArr = arrayFromMap(agencyMap, "agenc", "nama");

//   // Sales rows mapped
//   const salesData = salesSheet.map((r) => {
//     const nama = safeString(r["nama"] || r["Nama"] || r["sales"] || r["Sales"]);
//     if (!nama) return null;
//     const agencyName = safeString(r["Agency"] || r["agency"]);
//     const datelName = safeString(r["Datel"] || r["DATEL PEMASANGAN"] || r["DATEL"]);
//     const stoName = safeString(r["STO"] || r["sto"]);
//     return {
//       id: uuidv4(),
//       nama,
//       kode_sales: safeString(r["kode_sales"] || r["Kode Sales"] || r["kode"]),
//       email: safeString(r["email"]),
//       status: (safeString(r["status"]) || "ACTIVE").toUpperCase(),
//       agency_id: agencyName ? agencyMap.get(agencyName) : null,
//       wilayah_id: datelName ? wilayahMap.get(datelName) : null,
//       sto_id: stoName ? stoMap.get(stoName) : null,
//       kat_umur_sa: null,
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     };
//   }).filter(Boolean);

//   const paketData = paketSheet.map((r) => {
//     const nama = safeString(r["nama"] || r["Nama Paket"] || r["Paket"]);
//     if (!nama) return null;
//     return {
//       id: uuidv4(),
//       kode: safeString(r["kode"] || r["Kode"]),
//       nama,
//       kategori: safeString(r["kategori"]) || null,
//       ratio: safeString(r["ratio"]) || null,
//       jenis_paket: safeString(r["jenis_paket"]) || safeString(r["jenis"]) || "INET_ONLY",
//       bandwidth: Number(r["bandwidth"] || r["Bandwidth"] || 0),
//       ont_type: safeString(r["ont_type"]) || null,
//       harga: toDecimalString(r["harga"] || r["Harga"]) || "0.00",
//       total: toDecimalString(r["total"] || r["Total"]) || "0.00",
//       aktif: true,
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     };
//   }).filter(Boolean);

//   const promoData = promoSheet.map((r) => {
//     const kode = safeString(r["kode"] || r["Kode"] || r["Kode Promo"]);
//     if (!kode) return null;
//     return {
//       id: uuidv4(),
//       kode,
//       nama: safeString(r["nama"] || r["Nama"] || r["Deskripsi"]),
//       deskripsi: safeString(r["deskripsi"]) || null,
//       tipe_promo: safeString(r["tipe_promo"]) || "HARGA_KHUSUS",
//       diskon_persen: toDecimalString(r["diskon_persen"]) || null,
//       diskon_nominal: toDecimalString(r["diskon_nominal"]) || null,
//       tanggal_mulai: r["tanggal_mulai"] ? new Date(r["tanggal_mulai"]).toISOString() : new Date().toISOString(),
//       tanggal_selesai: r["tanggal_selesai"] ? new Date(r["tanggal_selesai"]).toISOString() : new Date(Date.now() + 1000*60*60*24*30).toISOString(),
//       aktif: true,
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     };
//   }).filter(Boolean);

//   const registrasiData = registrasiSheet.map((r) => {
//     const nama = safeString(r["nama"] || r["Nama"]);
//     if (!nama) return null;
//     const datelName = safeString(r["DATEL PEMASANGAN"] || r["Datel"] || r["DATEL"]);
//     const stoName = safeString(r["STO"] || r["sto"]);
//     const paketName = safeString(r["paket"] || r["Paket"] || r["Nama Paket"]);
//     const salesName = safeString(r["sales"] || r["Sales"] || r["Nama Sales"]);
//     return {
//       id: uuidv4(),
//       nama,
//       wilayah_id: datelName ? wilayahMap.get(datelName) : null,
//       paket_id: paketName ? paketMap.get(paketName) : null,
//       sales_id: salesName ? salesMap.get(salesName) : null,
//       no_hp_1: safeString(r["no_hp_1"] || r["No HP"] || r["NO_HP"] || r["handphone"] || r["nohp"]) || "",
//       no_hp_2: safeString(r["no_hp_2"]) || null,
//       kordinat: safeString(r["kordinat"]) || null,
//       alamat: safeString(r["alamat"]) || "",
//       nama_pic: safeString(r["nama_pic"]) || "",
//       ttl_pic: safeString(r["ttl_pic"]) || "",
//       no_ktp: safeString(r["no_ktp"]) || "",
//       email: safeString(r["email"]) || "",
//       nomer_ao: safeString(r["nomer_ao"]) || null,
//       status: safeString(r["status"]) || null,
//       keterangan: safeString(r["keterangan"]) || null,
//       foto_ktp: safeString(r["foto_ktp"]) || "",
//       foto_selfie: safeString(r["foto_selfie"]) || "",
//       bukti_usaha: safeString(r["bukti_usaha"]) || "",
//       bukti_niwp: safeString(r["bukti_niwp"]) || "",
//       foto_lokasi: safeString(r["foto_lokasi"]) || null,
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     };
//   }).filter(Boolean);

//   // write seed.ts
//   ensureDirExists(OUT_SEED_PATH);

//   const seedTs = `// AUTO-GENERATED BY generate-seed.ts
// import { PrismaClient, Prisma } from "@prisma/client";
// const prisma = new PrismaClient();

// async function main() {
//   console.log("🌱 Starting seed...");

//   // 1) Wilayah
//   await prisma.wilayah.createMany({
//     data: ${JSON.stringify(wilayahArr, null, 2)},
//     skipDuplicates: true,
//   });

//   // 2) STO
//   await prisma.sto.createMany({
//     data: ${JSON.stringify(stoArr, null, 2)},
//     skipDuplicates: true,
//   });

//   // 3) Agency
//   await prisma.agenc.createMany({
//     data: ${JSON.stringify(agencyArr, null, 2)},
//     skipDuplicates: true,
//   });

//   // 4) Sales
//   await prisma.sales.createMany({
//     data: ${JSON.stringify(salesData, null, 2)},
//     skipDuplicates: true,
//   });

//   // 5) Paket
//   await prisma.paket.createMany({
//     data: ${JSON.stringify(paketData.map(p => ({ ...p, harga: String(p.harga), total: String(p.total) })), null, 2)},
//     skipDuplicates: true,
//   });

//   // 6) Promo
//   await prisma.promo.createMany({
//     data: ${JSON.stringify(promoData, null, 2)},
//     skipDuplicates: true,
//   });

//   // 7) RegistrasiIndibiz
//   await prisma.registrasiIndibiz.createMany({
//     data: ${JSON.stringify(registrasiData, null, 2)},
//     skipDuplicates: true,
//   });

//   console.log("✅ Seed finished");
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
// `;

//   fs.writeFileSync(OUT_SEED_PATH, seedTs, "utf8");
//   console.log("Wrote seed file:", OUT_SEED_PATH);
//   console.log("Run: bunx prisma db seed");
// }

// main().catch((e) => {
//   console.error("Error:", e);
//   process.exit(1);
// });