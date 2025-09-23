/*
  Warnings:

  - You are about to drop the column `noh_hp_1` on the `registrasi_indibiz` table. All the data in the column will be lost.
  - You are about to drop the column `noh_hp_2` on the `registrasi_indibiz` table. All the data in the column will be lost.
  - Added the required column `no_hp_1` to the `registrasi_indibiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_hp_2` to the `registrasi_indibiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."registrasi_indibiz" DROP COLUMN "noh_hp_1",
DROP COLUMN "noh_hp_2",
ADD COLUMN     "no_hp_1" TEXT NOT NULL,
ADD COLUMN     "no_hp_2" TEXT NOT NULL,
ALTER COLUMN "no_ktp" SET DATA TYPE TEXT;
