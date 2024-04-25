import { resolve } from 'node:path'
import { rename, writeFile } from 'node:fs/promises'
import { defineConfig } from 'vite'
import { generateDtsBundle } from 'dts-bundle-generator'
import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, pkg.source),
      name: pkg.libName,
      formats: ['es', 'iife'],
      fileName: format => `${pkg.name}.${format === 'es' ? 'esm.js' : 'js'}`,
    },
  },
  plugins: [
    solid(),
    dts({
      include: pkg.source,
      insertTypesEntry: true,
      afterBuild: async () => {
        await rename(`dist/${pkg.name}.d.ts`, pkg.types)
        const types = generateDtsBundle([{
          filePath: pkg.types,
          libraries: {
            inlinedLibraries: ['bootstrap'],
          },
        }])
        await writeFile(pkg.types, types)
      },
    }),
  ],
})
