import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 1. Detect if we are building inside a GitHub Action
const isGitHub = process.env.GITHUB_ACTIONS === 'true';

// 2. Extract the repository name (e.g., from "username/my-repo" -> "my-repo")
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const repoOwner = process.env.GITHUB_REPOSITORY_OWNER;

export default defineConfig({
  // Dynamically set the domain and base path if on GitHub, otherwise use your custom defaults
  site: isGitHub ? `https://${repoOwner}.github.io` : 'https://mybioportal.ca',
  base: isGitHub ? `/${repoName}` : '/',

  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
