import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  build: {
    minify: false,  // Desactivar minificación
    sourcemap: false,  // Desactivar source maps
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: undefined  // Desactivar chunking
      }
    }
  }
})