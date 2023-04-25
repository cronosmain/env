import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.mjs', format: 'esm' },
    { file: 'dist/index.cjs', format: 'cjs' },
  ],
  plugins: [typescript(), terser()],
})
