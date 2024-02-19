import fs from 'node:fs'
import path from 'node:path'

const read = async () => {
  const fileToRead = path.resolve('src/streams/files/fileToRead.txt')

  const readStream = fs.createReadStream(fileToRead)

  readStream.pipe(process.stdout)
}

await read()
