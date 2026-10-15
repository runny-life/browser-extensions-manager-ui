import { defineConfig } from 'vite';

export default defineConfig({
  base: '/browser-extensions-manager-ui/',
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
