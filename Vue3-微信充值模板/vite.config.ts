import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",//打包路径
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  server: {
    port: 4200,//启动端口
    open: false,
    proxy: {
      // 选项写法
      //   '/api': 'http://123.56.85.24:5000'//代理网址
    },
    cors: true
  },

})
