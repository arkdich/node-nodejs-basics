import fs from 'node:fs/promises'
import path from 'node:path'

const list = async () => {
  const dirName = path.resolve('src/fs/files')

  try {
    const dirContents = await fs.readdir(dirName)

    dirContents.forEach((file) => {
      console.log(file)
    })
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed')
    } else {
      throw err
    }
  }
}

await list()
