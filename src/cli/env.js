const parseEnv = () => {
  const args = Object.entries(process.env)
  const ARG_PREFIX = 'RSS_'

  const filteredArgs = args.filter(([key]) => key.startsWith(ARG_PREFIX))

  console.log(filteredArgs.join('; '))
}

parseEnv()
