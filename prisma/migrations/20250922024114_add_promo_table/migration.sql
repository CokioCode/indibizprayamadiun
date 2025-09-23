-- CreateEnum
CREATE TYPE "public"."JenisPromo" AS ENUM ('DISKON', 'CASHBACK', 'BONUS', 'DLL');

-- CreateTable
CREATE TABLE "public"."promo" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "jenis" "public"."JenisPromo" NOT NULL,
    "diskon" DECIMAL(5,2) NOT NULL,
    "mulai" TIMESTAMP(3) NOT NULL,
    "akhir" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "promo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "promo_nama_key" ON "public"."promo"("nama");
