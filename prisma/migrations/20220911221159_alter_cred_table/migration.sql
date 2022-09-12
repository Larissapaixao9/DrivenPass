/*
  Warnings:

  - You are about to drop the column `created_at` on the `credentials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "created_at",
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
