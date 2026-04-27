import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      // CSS Module class naming: <ComponentName>__<className>__<hash>
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
});
