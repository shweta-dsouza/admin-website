import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithms: ['brotliCompress']
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Split vendor libraries
          }
          if (id.includes('src/components/')) {
            return 'components'; // Split components into their own chunk
          }
          if (id.includes('src/charts/')) {
            return 'charts'; // Split components into their own chunk
          }
          if (id.includes('src/pages/')) {
            return 'pages'; // Split components into their own chunk
          }
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-utils.jsx',
    include: ['tests/*.{test,spec}.{js,jsx,ts,tsx}']
  }
})
