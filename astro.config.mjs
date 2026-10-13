import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 1. Detect environment variables
const repo = process.env.GITHUB_REPOSITORY || '';
const owner = process.env.GITHUB_REPOSITORY_OWNER || '';
const isGitHubAction = process.env.GITHUB_ACTIONS === 'true';

// 2. ONLY apply the dynamic fork URLs if it is NOT the official bio-portal repo
const isMainRepo = repo === 'bio-portal/mybioportal_frontend';

const siteUrl = (isGitHubAction && !isMainRepo)
  ? `https://${owner}.github.io`
  : 'https://mybioportal.ca';

const baseFolder = (isGitHubAction && !isMainRepo)
  ? `/${repo.split('/')[1]}`
  : '/';

export default defineConfig({
  site: siteUrl,
  base: baseFolder,
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
