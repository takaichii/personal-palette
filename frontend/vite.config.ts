import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Personal Palette – Vite configuration tailored for a calm, introspective UI journey.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts'
  }
});
