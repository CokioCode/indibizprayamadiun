/*
  Warnings:

  - Added the required column `is_global` to the `promo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."promo" ADD COLUMN     "is_global" BOOLEAN NOT NULL;
