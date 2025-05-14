import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
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
          target: env.VITE_API_URL || 'http://127.0.0.1:8000',
          changeOrigin: true,
          secure: false
        }
      },
      hmr: {
        protocol: env.VITE_HMR_PROTOCOL || 'ws',
        host: env.VITE_HMR_HOST || 'localhost',
        port: Number(env.VITE_HMR_PORT) || 3000,
        clientPort: Number(env.VITE_HMR_CLIENT_PORT) || 3000
      }
    }
  }
})