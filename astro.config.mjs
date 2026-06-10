import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bio-portal.github.io',
  base: '/mybioportal_frontend',
  vite: {
    plugins: [tailwindcss()],
  },
  // Add the i18n configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      // false means English stays at '/', French goes to '/fr/'
      prefixDefaultLocale: false
    }
  }
});
