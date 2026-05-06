import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Must be your exact GitHub pages domain
  site: 'https://bio-portal.github.io',
  
  // MUST have this exact line, starting with a slash
  base: '/mybioportal_frontend',
  
  vite: {
    plugins: [tailwindcss()],
  },
});