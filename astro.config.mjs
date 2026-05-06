// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Your GitHub Pages URL
  site: 'https://bio-portal.github.io',
  // The name of your repository
  base: '/mybioportal_frontend',
  vite: {
    plugins: [tailwindcss()],
  },
});