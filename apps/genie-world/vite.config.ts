import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@frontier-ui/shared-tokens': path.resolve(__dirname, '../../packages/shared-tokens/src'),
    },
  },
  server: {
    port: 3001,
    open: false,
  },
});
