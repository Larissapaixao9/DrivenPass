/*
  Warnings:

  - You are about to drop the column `user` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the `user_data` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id,title]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "user",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "user_data";

-- CreateTable
CREATE TABLE "userdata" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_on" BOOLEAN NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userdata_email_key" ON "userdata"("email");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_user_id_title_key" ON "credentials"("user_id", "title");

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "userdata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "userdata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
