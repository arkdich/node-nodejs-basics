import fs from 'node:fs/promises'
import path from 'node:path'

const rename = async () => {
  const sourceFile = path.resolve('src/fs/files/wrongFilename.txt')
  const targetFile = path.resolve('src/fs/files/properFilename.md')

  try {
    await fs.access(targetFile, fs.constants.F_OK)

    throw new Error('FS operation failed')
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err
    }

    try {
      await fs.rename(sourceFile, targetFile)
    } catch (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed')
      } else {
        throw err
      }
    }
  }
}

await rename()
