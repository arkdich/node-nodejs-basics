import path from 'node:path'
import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const transform = async () => {
  const streamTransformer = new Transform({
    transform: (chunk, encoding, callback) => {
      const data = chunk.toString()

      const reversed = data.split('').reverse().join('').concat('\n')

      callback(null, reversed)
    },
  })

  console.log(
    'Node process now listens to the input, use Ctrl+C to terminate it'
  )

  await pipeline(process.stdin, streamTransformer, process.stdout)
}

await transform()
