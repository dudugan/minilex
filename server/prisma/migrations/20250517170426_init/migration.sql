-- CreateTable
CREATE TABLE "Root" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phono" TEXT NOT NULL,
    "ortho" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "etymology" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phono" TEXT NOT NULL,
    "ortho" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gloss" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "wordId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Sense_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "GrammarTable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "GrammarRow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grammarTableId" INTEGER NOT NULL,
    "featureId" INTEGER NOT NULL,
    CONSTRAINT "GrammarRow_grammarTableId_fkey" FOREIGN KEY ("grammarTableId") REFERENCES "GrammarTable" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GrammarRow_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GrammarCol" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grammarTableId" INTEGER NOT NULL,
    "featureId" INTEGER NOT NULL,
    CONSTRAINT "GrammarCol_grammarTableId_fkey" FOREIGN KEY ("grammarTableId") REFERENCES "GrammarTable" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GrammarCol_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GrammarCell" (
    "rowId" INTEGER NOT NULL,
    "colId" INTEGER NOT NULL,
    "cellText" TEXT,

    PRIMARY KEY ("rowId", "colId"),
    CONSTRAINT "GrammarCell_rowId_fkey" FOREIGN KEY ("rowId") REFERENCES "GrammarRow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GrammarCell_colId_fkey" FOREIGN KEY ("colId") REFERENCES "GrammarCol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RootToWord" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RootToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "Root" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RootToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "Word" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoryToFeature" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "Feature" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoryToGrammarTable" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToGrammarTable_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToGrammarTable_B_fkey" FOREIGN KEY ("B") REFERENCES "GrammarTable" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FeatureToSense" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FeatureToSense_A_fkey" FOREIGN KEY ("A") REFERENCES "Feature" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FeatureToSense_B_fkey" FOREIGN KEY ("B") REFERENCES "Sense" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_RootToWord_AB_unique" ON "_RootToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_RootToWord_B_index" ON "_RootToWord"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToFeature_AB_unique" ON "_CategoryToFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToFeature_B_index" ON "_CategoryToFeature"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToGrammarTable_AB_unique" ON "_CategoryToGrammarTable"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToGrammarTable_B_index" ON "_CategoryToGrammarTable"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FeatureToSense_AB_unique" ON "_FeatureToSense"("A", "B");

-- CreateIndex
CREATE INDEX "_FeatureToSense_B_index" ON "_FeatureToSense"("B");
