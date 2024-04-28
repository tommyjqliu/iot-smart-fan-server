-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255),
    "username" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

