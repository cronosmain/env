export let env = (varname: string, fallback?: string): string => {
  let value = process.env[varname] ?? fallback

  if (value === undefined) {
    console.error(`Environment variable ${varname} is not set`)
    process.exit(1)
  }

  return value
}
