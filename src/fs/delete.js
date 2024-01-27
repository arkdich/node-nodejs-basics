import fs from "node:fs/promises";
import path from "node:path";

const remove = async () => {
  const fileName = path.resolve("src/fs/files/fileToRemove.txt");

  try {
    await fs.rm(fileName, { force: false });
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await remove();
