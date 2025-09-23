-- CreateTable
CREATE TABLE "public"."registrasi_indibiz" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "datel_id" TEXT NOT NULL,
    "paket_id" TEXT NOT NULL,
    "sales_id" TEXT NOT NULL,
    "noh_hp_1" BIGINT NOT NULL,
    "noh_hp_2" BIGINT NOT NULL,
    "kordinat" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "nama_pic" TEXT NOT NULL,
    "ttl_pic" TEXT NOT NULL,
    "no_ktp" BIGINT NOT NULL,
    "email" TEXT NOT NULL,
    "foto_ktp" TEXT NOT NULL,
    "foto_selfie" TEXT NOT NULL,
    "bukti_usaha" TEXT NOT NULL,
    "bukti_niwp" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registrasi_indibiz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."registrasi_indibiz" ADD CONSTRAINT "registrasi_indibiz_datel_id_fkey" FOREIGN KEY ("datel_id") REFERENCES "public"."datel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."registrasi_indibiz" ADD CONSTRAINT "registrasi_indibiz_paket_id_fkey" FOREIGN KEY ("paket_id") REFERENCES "public"."paket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."registrasi_indibiz" ADD CONSTRAINT "registrasi_indibiz_sales_id_fkey" FOREIGN KEY ("sales_id") REFERENCES "public"."sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
