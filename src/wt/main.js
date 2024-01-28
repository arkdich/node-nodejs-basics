import os from 'os'
import path from 'path'
import { Worker } from 'worker_threads'

const performCalculations = async () => {
  const workerScript = path.resolve('src/wt/worker.js')

  const availableCpus = os.cpus()
  const workerResults = Array(availableCpus.length)

  let dataToProcess = 10
  let completedCount = 0

  availableCpus.forEach((_, index) => {
    const worker = new Worker(workerScript)

    worker.on('message', ({ index, response }) => {
      workerResults[index] = response

      if (++completedCount === availableCpus.length) {
        console.log(workerResults)
      }
    })

    worker.postMessage({
      index,
      data: dataToProcess++,
    })
  })
}

await performCalculations()
