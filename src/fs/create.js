import { log } from 'node:console'
import fs from 'node:fs/promises'
import path from 'node:path'

const create = async () => {
  const dirName = 'src/fs/files'
  const fileName = 'fresh.txt'
  const fileContent = 'I am fresh and young'

  const filePath = path.join(dirName, fileName)

  try {
    await fs.access(filePath, fs.constants.F_OK)

    throw new Error('FS operaion failed')
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, fileContent, { encoding: 'utf-8' })
    } else {
      throw err
    }
  }
}

await create()
