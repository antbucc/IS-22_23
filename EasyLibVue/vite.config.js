import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.BASE_PATH || '/'
  // base: process.env.NODE_ENV === 'production'
  //         ? '/EasyLibApp/' // prod
  //         : '/', // dev
})
