import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      dirs: ['./src/composables', './src/utils', './src/stores'],
      imports: ['vue', '@vueuse/core', 'vitest', 'vue-router'],
    }),
    Components(),
    Icons({ compiler: 'vue3' }),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
