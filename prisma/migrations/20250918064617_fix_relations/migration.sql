-- DropForeignKey
ALTER TABLE "public"."Auth" DROP CONSTRAINT "Auth_tokenId_fkey";

-- AlterTable
ALTER TABLE "public"."Auth" ALTER COLUMN "tokenId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Token" ALTER COLUMN "revoke" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "public"."Auth" ADD CONSTRAINT "Auth_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "public"."Token"("id") ON DELETE SET NULL ON UPDATE CASCADE;
