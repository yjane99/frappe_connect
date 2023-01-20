import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import proxyOptions from './proxyOptions';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
  server: {
    port: 8080,
    proxy: proxyOptions
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: '../my_asset_buddy/public/mab',
    emptyOutDir: true,
    target: 'es2015',
  }
})