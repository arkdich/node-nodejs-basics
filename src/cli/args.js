const parseArgs = () => {
  const args = process.argv
  const ARG_PREFIX = '--'

  const parsedArgs = []

  args.forEach((arg, index) => {
    if (!arg.startsWith(ARG_PREFIX)) return

    parsedArgs.push({
      key: arg.substring(2),
      value: args[index + 1],
    })
  })

  parsedArgs.forEach(({ key, value }) => {
    console.log(`${key} is ${value}`)
  })
}

parseArgs()
