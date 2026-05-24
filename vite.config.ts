import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { prefixClasses } from './plugins/prefix-css'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
    react(),
    prefixClasses()
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },

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
          if (assetInfo.name === 'index.css') return 'styles.css'
          return '[name][extname]'
        }
      }
    }
  }
})