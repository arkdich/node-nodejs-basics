const parseEnv = () => {
  const args = process.argv
  const ARG_PREFIX = 'RSS_'

  const filteredArgs = args.filter((arg) => arg.startsWith(ARG_PREFIX))

  console.log(filteredArgs.join('; '))
}

parseEnv()
