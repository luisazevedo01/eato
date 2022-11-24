import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigsPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigsPaths(),
    checker({
      typescript: true,
      enableBuild: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}'
      },
      overlay: { initialIsOpen: false }
    }),
    VitePWA({
      registerType: 'autoUpdate'
    })
  ],
  server: {
    hmr: {
      overlay: false,
    },
    host: '0.0.0.0',
    port: 3000,
  }
});
