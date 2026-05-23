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
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.ts'),
      },

      // Função garante que react, react-dom e qualquer sub-path sejam externos
      external: (id) => /^react(-dom)?(\/|$)/.test(id),

      output: {
        format: 'es',
        dir: 'dist',

        preserveModules: true,
        preserveModulesRoot: resolve(__dirname, 'src'),  // caminho absoluto

        entryFileNames: '[name].js',

        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css'
          return '[name][extname]'
        }
      }
    }
  }
})