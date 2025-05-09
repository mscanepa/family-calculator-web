import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: [
      'localhost',
      'familycalc.app',
      'www.familycalc.app',
      '18.189.205.126'
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        secure: false
      }
    },
    hmr: {
      protocol: 'ws',
      host: 'familycalc.app',
      port: 443,
      clientPort: 443
    }
  }
})