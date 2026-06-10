// notification_app_fe/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    fs: {
      allow: ['..'] // Allows Vite to import your logging middleware from the parent folder cleanly
    }
  },
});
