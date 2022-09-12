/*
  Warnings:

  - You are about to drop the `credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_user_id_fkey";

-- DropForeignKey
ALTER TABLE "session" DROP CONSTRAINT "session_user_id_fkey";

-- DropTable
DROP TABLE "credentials";

-- DropTable
DROP TABLE "session";

-- DropTable
DROP TABLE "userdata";

-- CreateTable
CREATE TABLE "user_data" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credential" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "credential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_on" BOOLEAN NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_data_email_key" ON "user_data"("email");

-- CreateIndex
CREATE UNIQUE INDEX "credential_user_id_title_key" ON "credential"("user_id", "title");

-- AddForeignKey
ALTER TABLE "credential" ADD CONSTRAINT "credential_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
