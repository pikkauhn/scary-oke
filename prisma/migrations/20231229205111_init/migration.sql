-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Songs" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT NOT NULL,
    "Artist" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Duo" INTEGER NOT NULL,
    "Explicit" INTEGER NOT NULL,
    "Date" TEXT NOT NULL,
    "Styles" TEXT NOT NULL,
    "Languages" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Karafun" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "kuser" TEXT NOT NULL,
    "kpass" TEXT NOT NULL,
    CONSTRAINT "Karafun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorites" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "songId" INTEGER,
    CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Favorites_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Songs" ("Id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Songs_Id_key" ON "Songs"("Id");
