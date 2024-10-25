import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 配置`@`指向src目录
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        // 目前版本sass已抛弃@import命令，改用@use
        additionalData: '@use "@/assets/styles/variable.scss" as *;'
      }
    }
  }
})
