/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "purentId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_purentId_fkey" FOREIGN KEY ("purentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
