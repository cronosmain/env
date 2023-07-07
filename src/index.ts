import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

try {
  let envFile = readFileSync(resolve(process.cwd(), '.env'), 'utf8')
  for (let str of envFile.split('\n')) {
    let isComment = /^\s*#/.test(str)
    if (isComment) continue
    let match = /^\s*([^=]+?)\s*=\s*"(.*?)"/.exec(str)
    if (match === null) continue
    let [, key, value] = match
    process.env[key] = value
  }
} catch (error) {}

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
