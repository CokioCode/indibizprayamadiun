-- CreateTable
CREATE TABLE "public"."paket" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "bandwith" INTEGER NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "price_psb" DECIMAL(12,2) NOT NULL,
    "categori_id" TEXT NOT NULL,
    "promo_id" TEXT,
    "ppn" INTEGER NOT NULL,
    "final_price" DECIMAL(12,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "paket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paket_nama_key" ON "public"."paket"("nama");

-- AddForeignKey
ALTER TABLE "public"."paket" ADD CONSTRAINT "paket_categori_id_fkey" FOREIGN KEY ("categori_id") REFERENCES "public"."kategori"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."paket" ADD CONSTRAINT "paket_promo_id_fkey" FOREIGN KEY ("promo_id") REFERENCES "public"."promo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
