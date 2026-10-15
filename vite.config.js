import { defineConfig } from 'vite';

export default defineConfig({
  base: '/browser-extensions-manager-ui/',
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
