/*
  Warnings:

  - You are about to drop the column `categori_id` on the `paket` table. All the data in the column will be lost.
  - You are about to drop the column `promo_id` on the `paket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."paket" DROP CONSTRAINT "paket_categori_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."paket" DROP CONSTRAINT "paket_promo_id_fkey";

-- AlterTable
ALTER TABLE "public"."paket" DROP COLUMN "categori_id",
DROP COLUMN "promo_id";

-- CreateTable
CREATE TABLE "public"."paket_kategori" (
    "id" TEXT NOT NULL,
    "paket_id" TEXT NOT NULL,
    "kategori_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paket_kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."paket_promo" (
    "id" TEXT NOT NULL,
    "paket_id" TEXT NOT NULL,
    "promo_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paket_promo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paket_kategori_paket_id_kategori_id_key" ON "public"."paket_kategori"("paket_id", "kategori_id");

-- CreateIndex
CREATE UNIQUE INDEX "paket_promo_paket_id_promo_id_key" ON "public"."paket_promo"("paket_id", "promo_id");

-- AddForeignKey
ALTER TABLE "public"."paket_kategori" ADD CONSTRAINT "paket_kategori_paket_id_fkey" FOREIGN KEY ("paket_id") REFERENCES "public"."paket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."paket_kategori" ADD CONSTRAINT "paket_kategori_kategori_id_fkey" FOREIGN KEY ("kategori_id") REFERENCES "public"."kategori"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."paket_promo" ADD CONSTRAINT "paket_promo_paket_id_fkey" FOREIGN KEY ("paket_id") REFERENCES "public"."paket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."paket_promo" ADD CONSTRAINT "paket_promo_promo_id_fkey" FOREIGN KEY ("promo_id") REFERENCES "public"."promo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
