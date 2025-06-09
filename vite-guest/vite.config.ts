import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
// import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'guest',
      manifest: true,
      library: {type: 'module'},
      exposes: {
        './Button': './src/Button.tsx',
        './export-app': './src/Bridged-App.tsx',
        './newReact': import.meta.resolve('react')
      },
      shared: {
        react: {
          name: 'newReact',
          shareScope: 'react-new',
          singleton: true,
        },
        'react-dom': {
          name: 'react-dom'
        }
      }
    })
  ],
  base: './',
  build: {
    // target: 'esnext',
    target: 'chrome89',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  preview: {
    port: 4173,
    cors: true,
  },
  server: {
    port: 4173,
    cors: true
  }
})
