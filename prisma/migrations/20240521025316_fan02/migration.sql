/*
  Warnings:

  - You are about to drop the `logs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "logs";

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(4096) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);
