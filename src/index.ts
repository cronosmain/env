export let env = (varname: string): string => {
  let value = process.env[varname]

  if (value === undefined) {
    console.error(`Environment variable ${varname} is not set`)
    process.exit(1)
  }

  return value
}
