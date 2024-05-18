-- CreateTable
CREATE TABLE "fans" (
    "id" SERIAL NOT NULL,
    "online" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "speed" INTEGER NOT NULL,

    CONSTRAINT "fans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "data" VARCHAR(4096) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);
