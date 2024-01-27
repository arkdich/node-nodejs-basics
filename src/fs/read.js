import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  const fileName = path.resolve("src/fs/files/fileToRead.txt");

  try {
    const fileContents = await fs.readFile(fileName, { encoding: "utf-8" });

    console.log(fileContents);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await read();
