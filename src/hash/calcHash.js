import { createHash } from 'crypto'
import { createReadStream } from 'fs'
import path from 'path'

const calculateHash = async () => {
  const fileName = path.resolve('src/hash/files/fileToCalculateHashFor.txt')

  const hash = createHash('sha256')

  const readStream = createReadStream(fileName, { encoding: 'utf-8' })

  readStream.on('data', (data) => {
    hash.update(data)
  })

  readStream.on('end', () => {
    process.stdout.write(hash.digest('hex'))
  })
}

await calculateHash()
