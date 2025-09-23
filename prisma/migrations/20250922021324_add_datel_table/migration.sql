-- CreateEnum
CREATE TYPE "public"."KategoriDatel" AS ENUM ('HERO', 'NON_HERO');

-- CreateEnum
CREATE TYPE "public"."SubArea" AS ENUM ('INNER', 'OUTER');

-- CreateTable
CREATE TABLE "public"."datel" (
    "id" TEXT NOT NULL,
    "kode_sto" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "categori" "public"."KategoriDatel" NOT NULL,
    "wilayah" TEXT NOT NULL,
    "sub_area" "public"."SubArea" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "datel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "datel_kode_sto_key" ON "public"."datel"("kode_sto");
