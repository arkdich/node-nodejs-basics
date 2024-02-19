import { parentPort, isMainThread } from 'worker_threads'

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread

  if (isMainThread || !parentPort) {
    throw new Error(
      'This funtions designed to be called only in Worker context'
    )
  }

  parentPort.on('message', ({ index, data }) => {
    const response = {
      status: null,
      data: null,
    }

    try {
      response.data = nthFibonacci(data)
      response.status = 'resolved'
    } catch (err) {
      response.data = null
      response.status = 'error'
    }

    parentPort?.postMessage({ index, response })
  })
}

sendResult()
