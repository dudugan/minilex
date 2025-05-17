/*
  Warnings:

  - Made the column `cellText` on table `GrammarCell` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GrammarCell" (
    "rowId" INTEGER NOT NULL,
    "colId" INTEGER NOT NULL,
    "cellText" TEXT NOT NULL,

    PRIMARY KEY ("rowId", "colId"),
    CONSTRAINT "GrammarCell_rowId_fkey" FOREIGN KEY ("rowId") REFERENCES "GrammarRow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GrammarCell_colId_fkey" FOREIGN KEY ("colId") REFERENCES "GrammarCol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_GrammarCell" ("cellText", "colId", "rowId") SELECT "cellText", "colId", "rowId" FROM "GrammarCell";
DROP TABLE "GrammarCell";
ALTER TABLE "new_GrammarCell" RENAME TO "GrammarCell";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
