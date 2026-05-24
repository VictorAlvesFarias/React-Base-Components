import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { prefixClasses } from './plugins/prefix-css'

export default defineConfig({
  plugins: [
    prefixClasses(),
    react(),
    dts({ insertTypesEntry: true, include: ['src'] }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    cssMinify: false,
    minify: false,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: (id) => /^react(-dom)?(\/|$)/.test(id),
      treeshake: false,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') {
            return 'styles.css'
          }

          return '[name][extname]'
        }
      }
    }
  }
})

function dts(arg0: { insertTypesEntry: boolean; include: string[] }): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}
