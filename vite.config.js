import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/rain-loop-website/',
  build: {
    rollupOptions: {
      input: Object.fromEntries(['index', 'nghien-cuu', 'nhat-ky', 'thiet-ke', 'vat-lieu', 'doi-ngu', '404', 'nhan-dien'].map(name => [name, resolve(import.meta.dirname, `${name}.html`)]))
    }
  }
});
