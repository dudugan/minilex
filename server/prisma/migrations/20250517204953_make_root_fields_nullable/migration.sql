-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Root" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phono" TEXT NOT NULL,
    "ortho" TEXT NOT NULL,
    "definition" TEXT,
    "notes" TEXT,
    "etymology" TEXT
);
INSERT INTO "new_Root" ("definition", "etymology", "id", "notes", "ortho", "phono") SELECT "definition", "etymology", "id", "notes", "ortho", "phono" FROM "Root";
DROP TABLE "Root";
ALTER TABLE "new_Root" RENAME TO "Root";
CREATE TABLE "new_Sense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gloss" TEXT NOT NULL,
    "definition" TEXT,
    "notes" TEXT,
    "wordId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Sense_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sense" ("categoryId", "definition", "gloss", "id", "notes", "wordId") SELECT "categoryId", "definition", "gloss", "id", "notes", "wordId" FROM "Sense";
DROP TABLE "Sense";
ALTER TABLE "new_Sense" RENAME TO "Sense";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
