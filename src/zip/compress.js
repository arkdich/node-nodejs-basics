import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import fs from 'fs/promises'
import { pipeline } from 'stream/promises'
import { createGzip } from 'zlib'

const compress = async () => {
  const fileToCompress = path.resolve('src/zip/files/fileToCompress.txt')
  const destination = path.resolve('src/zip/files/archive.gz')

  await fs.access(fileToCompress, fs.constants.R_OK)

  const readStream = createReadStream(fileToCompress, {
    encoding: 'utf-8',
  })
  const writeStream = createWriteStream(destination, { encoding: 'utf-8' })
  const gzipStream = createGzip()

  await pipeline(readStream, gzipStream, writeStream)
}

await compress()
