/*
  Warnings:

  - You are about to drop the `Auth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Auth" DROP CONSTRAINT "Auth_tokenId_fkey";

-- DropTable
DROP TABLE "public"."Auth";

-- DropTable
DROP TABLE "public"."Token";

-- CreateTable
CREATE TABLE "public"."auth" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tokenId" TEXT,

    CONSTRAINT "auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "revoke" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_username_key" ON "public"."auth"("username");

-- CreateIndex
CREATE UNIQUE INDEX "auth_tokenId_key" ON "public"."auth"("tokenId");

-- CreateIndex
CREATE UNIQUE INDEX "token_token_key" ON "public"."token"("token");

-- AddForeignKey
ALTER TABLE "public"."auth" ADD CONSTRAINT "auth_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "public"."token"("id") ON DELETE SET NULL ON UPDATE CASCADE;
