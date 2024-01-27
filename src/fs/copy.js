import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const sourceDir = path.resolve("src/fs/files");
  const targetDir = path.resolve("src/fs/files_copy");

  try {
    await fs.cp(sourceDir, targetDir, {
      force: false,
      recursive: true,
      errorOnExist: true,
    });
  } catch (err) {
    if (err.code === "ENOENT" || err.code === "ERR_FS_CP_EEXIST") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await copy();
