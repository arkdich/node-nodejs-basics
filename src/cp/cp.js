import { fork, spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'

const spawnChildProcess = async (args) => {
  const filePath = path.resolve('src/cp/files/script.js')

  try {
    await fs.access(filePath, fs.constants.X_OK)
  } catch (err) {
    if (err.code === 'EACCES') {
      await fs.chmod(filePath, 511)
    } else {
      throw err
    }
  }

  const cp = fork(filePath, args)
}

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2'])
