const path = require('path');
import {defineConfig} from 'vite';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  port: 8080,
  open: true,
  optimizeDeps: {
    include: ['axios'],
  },
  resolve: {
    alias: {
      '/@/': resolve(__dirname, './src'),
    },
  },

  proxy: {
    '/api': {
      target: 'https://paragraphannotation-dev.jiaoyanyun.com/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
});
