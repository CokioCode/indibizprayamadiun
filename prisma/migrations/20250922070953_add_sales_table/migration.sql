-- CreateEnum
CREATE TYPE "public"."StatusSales" AS ENUM ('ACTIVE', 'DELETED');

-- CreateTable
CREATE TABLE "public"."sales" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kode_sales" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "public"."StatusSales" NOT NULL,
    "agency_id" TEXT NOT NULL,
    "datel_id" TEXT NOT NULL,
    "kat_umur_sa" DATE NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sales_nama_key" ON "public"."sales"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "sales_email_key" ON "public"."sales"("email");

-- AddForeignKey
ALTER TABLE "public"."sales" ADD CONSTRAINT "sales_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "public"."agenc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sales" ADD CONSTRAINT "sales_datel_id_fkey" FOREIGN KEY ("datel_id") REFERENCES "public"."datel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
