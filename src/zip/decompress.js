import { createReadStream, createWriteStream } from 'fs'
import fs from 'fs/promises'
import path from 'path'
import { pipeline } from 'stream/promises'
import { createGunzip } from 'zlib'

const decompress = async () => {
  const fileToDecompress = path.resolve('src/zip/files/archive.gz')
  const destination = path.resolve('src/zip/files/fileToCompress.txt')

  await fs.access(fileToDecompress, fs.constants.R_OK)

  const readStream = createReadStream(fileToDecompress)
  const writeStream = createWriteStream(destination, { encoding: 'utf-8' })
  const gunzipStream = createGunzip()

  await pipeline(readStream, gunzipStream, writeStream)
}

await decompress()
