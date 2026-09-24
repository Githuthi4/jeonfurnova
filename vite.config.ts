import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Everything is combined into a single configuration block
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Points exactly to your furniture store repository folder on GitHub
  base: '/',
});
