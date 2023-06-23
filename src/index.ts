export let env = (varname: string, fallback?: string): string => {
  let value = process.env[varname] ?? fallback
  if (value === undefined)
    throw {
      name: 'VariableNotSet',
      message: `Environment variable ${varname} is not set`,
    }
  return value
}

export default env
