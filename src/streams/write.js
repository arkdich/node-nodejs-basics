import fs from "node:fs/promises";
import path from "node:path";

const write = async () => {
  const fileToWrite = path.resolve("src/streams/files/fileToWrite.txt");

  const file = await fs.open(fileToWrite, "r+");
  const fileStat = await file.stat();

  const writeStream = file.createWriteStream({
    start: fileStat.size,
    encoding: "utf-8",
  });

  process.stdin.pipe(writeStream);

  console.log(
    "Node process now listens to the input, use Ctrl+C to terminate it"
  );
};

await write();
