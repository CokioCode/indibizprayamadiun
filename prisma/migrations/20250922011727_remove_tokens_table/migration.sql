/*
  Warnings:

  - You are about to drop the column `tokenId` on the `auth` table. All the data in the column will be lost.
  - You are about to drop the `token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."auth" DROP CONSTRAINT "auth_tokenId_fkey";

-- DropIndex
DROP INDEX "public"."auth_tokenId_key";

-- AlterTable
ALTER TABLE "public"."auth" DROP COLUMN "tokenId";

-- DropTable
DROP TABLE "public"."token";
