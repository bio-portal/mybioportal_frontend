# BioPortal Astro Architectural Context
Generated on: Thu 21 May 2026 11:05:55 AM EDT

---

## 📂 Project Directory Structure
```text
[01;34m.[00m
├── astro.config.mjs
├── astro_project_context.md
├── fixcolors.sh
├── gather_context.sh
├── generate_team.sh
├── organize_assets.sh
├── package.json
├── package-lock.json
├── [00;32mproject_context.txt[00m
├── README.md
├── [01;34msrc[00m
│   ├── [01;34mcomponents[00m
│   │   ├── [01;34mexplorer[00m
│   │   │   ├── ExplorerGrid.astro
│   │   │   ├── ExplorerHeader.astro
│   │   │   └── ExplorerSidebar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── TrustBar.astro
│   ├── [01;34mcontent[00m
│   │   ├── [01;34mnews[00m
│   │   │   └── kidney-project.md
│   │   ├── [01;34mpages[00m
│   │   │   ├── data.yaml
│   │   │   ├── home.yaml
│   │   │   ├── news.yaml
│   │   │   ├── participants.yaml
│   │   │   └── privacy.yaml
│   │   └── [01;34mteam[00m
│   │       ├── 01-brent-richards.yaml
│   │       ├── 02-vincent-mooser.yaml
│   │       ├── 03-jonathan-afilalo.yaml
│   │       ├── 04-tricia-peters.yaml
│   │       ├── 05-guillaume-butler.yaml
│   │       ├── 06-satoshi-yoshiji.yaml
│   │       ├── 07-tobias-erlanger.yaml
│   │       ├── 08-david-morrison.yaml
│   │       ├── 09-mariana-pico.yaml
│   │       ├── 10-issam-elkbaiche.yaml
│   │       ├── 11-darin-adra.yaml
│   │       ├── 12-mariana-jaime.yaml
│   │       ├── 13-corinne-pirici.yaml
│   │       ├── 14-mina-nikkhah.yaml
│   │       ├── 15-zaman-afrasiabi.yaml
│   │       ├── 16-cesar-peralta.yaml
│   │       ├── 17-byanca-liboni.yaml
│   │       ├── 18-jonafe-daguplo.yaml
│   │       └── 19-nadia-blostein.yaml
│   ├── content.config.ts
│   ├── [01;34mlayouts[00m
│   │   └── Layout.astro
│   ├── [01;34mpages[00m
│   │   ├── [01;34mdata[00m
│   │   │   └── explorer.astro
│   │   ├── data.astro
│   │   ├── index.astro
│   │   ├── [01;34mnews[00m
│   │   │   ├── [id].astro
│   │   │   └── index.astro
│   │   ├── participants.astro
│   │   └── privacy.astro
│   ├── [01;34mscripts[00m
│   │   └── explorerEngine.ts
│   └── [01;34mstyles[00m
│       └── global.css
└── tsconfig.json

13 directories, 54 files
```

---

## ⚙️ Core Configurations & Schemas
### 📄 File: `package.json`
```json
{
  "name": "website",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.2.4",
    "astro": "^6.2.2",
    "chart.js": "^4.4.2",
    "tailwindcss": "^4.2.4"
  }
}

```

### 📄 File: `astro.config.mjs`
```typescript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bio-portal.github.io',
  base: '/mybioportal_frontend',
  vite: {
    plugins: [tailwindcss()],
  },
});

```

### 📄 File: `tsconfig.json`
```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}

```

### 📄 File: `src/content.config.ts`
```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/pages" }),
  schema: z.object({
    id: z.string(),
    // Existing page fields
    hero: z.any().optional(),
    trustBar: z.any().optional(),
    steps: z.any().optional(),
    benefit: z.any().optional(),
    stats: z.any().optional(),

    // NEW: Added fields to support the Privacy page schema
    tagline: z.string().optional(),
    headline: z.string().optional(),
    description: z.string().optional(),
    safeguardsTitle: z.string().optional(),
    safeguards: z.array(
      z.object({
        title: z.string(),
        desc: z.string()
      })
    ).optional(),
    footerBox: z.object({
      title: z.string(),
      desc: z.string()
    }).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "*.{yaml,yml}", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    order: z.number(),
    group: z.string(), // 'governing' or 'recruitment'
    bio: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { pages, team, news };

```

---

## 🏗️ Structural Layouts, Pages, Components & Styles
### 🧩 File: `src/pages/news/[id].astro`
```astro
---
import { getCollection, render } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function getStaticPaths() {
  const newsEntries = await getCollection('news');
  return newsEntries.map(post => ({
    params: { id: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
<Layout
  title={`${post.data.title} | BioPortal Insights`}
  navType="minimal"
  backLink="/news"
  backText="Back to Insights"
>
  <div class="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-brand-blue-deep/5 to-transparent -z-10"></div>

  <main class="max-w-3xl mx-auto px-6 pt-12 pb-24">
    <header class="mb-10 border-b border-gray-100 pb-10">
      <div class="flex items-center gap-4 mb-6">
        <span class="text-xs font-bold px-3 py-1 rounded-md bg-brand-blue-deep/10 text-brand-blue-deep uppercase tracking-widest">
          {post.data.tag}
        </span>
        <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">
          {post.data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
      </div>

      <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-10">
        {post.data.title}
      </h1>

      <div class="w-full h-[300px] md:h-[400px] rounded-3xl relative overflow-hidden bg-surface shadow-xl shadow-gray-200/50">
        {post.data.image ? (
          <img src={`${baseUrl}${post.data.image}`} alt={post.data.title} class="w-full h-full object-cover" />
        ) : (
          <div class="absolute inset-0 bg-gradient-to-br from-brand-orange-mid/10 via-brand-green-bright/5 to-brand-blue-deep/10 flex items-center justify-center">
            <img src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`} alt="BioPortal Mark" class="w-48 md:w-64 h-auto opacity-30 grayscale" onerror="this.style.display='none'" />
          </div>
        )}
      </div>
    </header>

    <article class="text-lg text-gray-600 leading-relaxed space-y-6 article-content">
      <Content />
    </article>
  </main>
</Layout>

<style>
  @reference "../../styles/global.css";
  .article-content :global(h2) { @apply text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight; }
  .article-content :global(h3) { @apply text-2xl font-bold text-gray-900 mt-8 mb-4 tracking-tight; }
  .article-content :global(p) { @apply mb-6; }
  .article-content :global(a) { @apply text-brand-blue-deep font-semibold hover:text-brand-dark transition-colors underline underline-offset-2; }
  .article-content :global(ul) { @apply list-disc list-outside ml-6 mb-6 space-y-2; }
  .article-content :global(blockquote) { @apply border-l-4 border-brand-blue-deep pl-6 py-2 my-8 text-xl italic text-gray-500 bg-brand-blue-deep/5 rounded-r-2xl; }
  .article-content :global(strong) { @apply font-bold text-gray-900; }
</style>

```

### 🧩 File: `src/pages/news/index.astro`
```astro
---
import { getCollection, getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
const pageData = await getEntry('pages', 'news');
const { seoTitle, tagline, headline, description } = pageData.data;

const allNews = await getCollection('news');
const sortedNews = allNews.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
---
<Layout title={`${seoTitle} | BioPortal`}>
  <main class="max-w-7xl mx-auto px-6 py-12 lg:py-16">
    <header class="mb-16">
      <span class="text-brand-blue-deep font-bold tracking-widest uppercase text-xs mb-4 block">{tagline}</span>
      <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">{headline}</h1>
      <p class="text-lg text-gray-500 max-w-2xl">{description}</p>
    </header>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedNews.map(post => (
        <article class="bg-white rounded-[2.5rem] border border-gray-100 shadow-soft hover:shadow-2xl transition-all group flex flex-col overflow-hidden">
          <div class="h-48 w-full relative overflow-hidden bg-surface flex-shrink-0">
            {post.data.image ? (
              <img src={`${baseUrl}${post.data.image}`} alt={post.data.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
              <div class="absolute inset-0 bg-gradient-to-br from-brand-orange-mid/10 via-brand-green-bright/5 to-brand-blue-deep/10 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <img src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`} alt="BioPortal Mark" class="w-32 h-auto opacity-30 grayscale" onerror="this.style.display='none'" />
              </div>
            )}
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-6">
              <span class="text-[10px] font-bold text-gray-400 uppercase">
                {post.data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
              <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep">{post.data.tag}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-blue-deep transition-colors">{post.data.title}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">{post.data.excerpt}</p>
            <a href={`${baseUrl}/news/${post.id}/`} class="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
              Read Insight <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  </main>
</Layout>

```

### 🧩 File: `src/pages/index.astro`
```astro
---
import { getCollection, getEntry } from 'astro:content';
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import TrustBar from '../components/TrustBar.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
const homeData = await getEntry('pages', 'home');
const allTeam = await getCollection('team');
const sortedTeam = allTeam.sort((a, b) => a.data.order - b.data.order);
const allNews = await getCollection('news');
const latestNews = allNews.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, 3);
---
<Layout title="BioPortal | Advancing Genomic Research" ctaMode="scroll">
  <main class="relative">

    <Hero content={homeData.data.hero} />

    <TrustBar content={homeData.data.trustBar} />

    <section id="insights" class="pt-2 pb-12 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div class="mb-6 flex justify-between items-end">
        <div>
          <span class="text-brand-blue-mid font-bold tracking-widest uppercase text-xs mb-2 block">Latest Insights</span>
          <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight">News & Discoveries</h2>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {latestNews.map(post => (
          <article class="bg-white rounded-[2.5rem] border border-gray-100 shadow-soft hover:shadow-2xl transition-all group flex flex-col overflow-hidden">
            <div class="h-48 w-full relative overflow-hidden bg-surface flex-shrink-0">
              {post.data.image ? (
                <img src={`${baseUrl}${post.data.image}`} alt={post.data.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div class="absolute inset-0 bg-gradient-to-br from-brand-orange-mid/10 via-brand-green-bright/5 to-brand-blue-deep/10 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <img src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`} alt="BioPortal Mark" class="w-32 h-auto opacity-30 grayscale" onerror="this.style.display='none'" />
                </div>
              )}
            </div>

            <div class="p-8 flex flex-col flex-grow">
              <div class="flex justify-between items-start mb-6">
                <span class="text-[10px] font-bold text-gray-400 uppercase">{post.data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep">{post.data.tag}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-blue-deep transition-colors">{post.data.title}</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">{post.data.excerpt}</p>
              <a href={`${baseUrl}/news/${post.id}/`} class="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                Read Insight <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div class="mt-10 text-center">
        <a href={`${baseUrl}/news`} class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface border-2 border-gray-100 text-brand-dark font-bold hover:border-brand-blue-deep hover:text-brand-blue-deep transition-colors shadow-sm cursor-pointer">
          View All Insights
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </section>

    <section id="team" class="py-12 px-6 max-w-7xl mx-auto border-t border-gray-100 bg-surface/30 scroll-mt-20">
      <div class="mb-12">
        <span class="text-brand-blue-mid font-bold tracking-widest uppercase text-xs mb-3 block">Leadership & Operations</span>
        <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Our Team</h2>
        <p class="text-lg text-gray-500 max-w-2xl">The minds behind BioPortal. Our dedicated professionals work tirelessly to connect with participants and advance groundbreaking scientific research.</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 relative items-start">
        <div class="lg:w-7/12 w-full space-y-12">

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200" data-group="governing">Governing Committee</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {sortedTeam.filter(m => m.data.group === 'governing').map(member => (
                <div class="team-card group cursor-pointer relative outline-none" tabindex="0">
                  <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 p-[3px] bg-white group-hover:logo-gradient transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-105 relative">
                    <div class="w-full h-full rounded-full overflow-hidden border-2 border-white bg-surface relative">
                      {member.data.image ? <img src={`${baseUrl}${member.data.image}`} alt={member.data.name} class="w-full h-full object-cover member-img" onerror="this.style.display='none'" /> : <div class="w-full h-full flex items-center justify-center member-img-fallback"><svg width="32" height="32" class="text-brand-blue-deep/30" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>}
                    </div>
                  </div>
                  <div class="text-center">
                    <h4 class="text-sm font-bold text-gray-900 leading-tight mb-1 member-name">{member.data.name}</h4>
                    <p class="text-[10px] font-bold text-brand-blue-deep uppercase tracking-wider member-role">{member.data.role}</p>
                  </div>
                  <div class="hidden member-bio">{member.data.bio}</div>
                  <div class="lg:hidden mobile-bio-container overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out mt-0">
                    <p class="text-xs text-gray-600 leading-relaxed p-4 bg-white rounded-2xl border border-gray-100 shadow-sm mt-3">{member.data.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200" data-group="recruitment">Recruitment & Operations</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {sortedTeam.filter(m => m.data.group === 'recruitment').map(member => (
                <div class="team-card group cursor-pointer relative outline-none" tabindex="0">
                  <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 p-[3px] bg-white group-hover:logo-gradient transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-105 relative">
                    <div class="w-full h-full rounded-full overflow-hidden border-2 border-white bg-surface relative">
                      {member.data.image ? <img src={`${baseUrl}${member.data.image}`} alt={member.data.name} class="w-full h-full object-cover member-img" onerror="this.style.display='none'" /> : <div class="w-full h-full flex items-center justify-center member-img-fallback"><svg width="32" height="32" class="text-brand-blue-deep/30" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>}
                    </div>
                  </div>
                  <div class="text-center">
                    <h4 class="text-sm font-bold text-gray-900 leading-tight mb-1 member-name">{member.data.name}</h4>
                    <p class="text-[10px] font-bold text-brand-blue-deep uppercase tracking-wider member-role">{member.data.role}</p>
                  </div>
                  <div class="hidden member-bio">{member.data.bio}</div>
                  <div class="lg:hidden mobile-bio-container overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out mt-0">
                    <p class="text-xs text-gray-600 leading-relaxed p-4 bg-white rounded-2xl border border-gray-100 shadow-sm mt-3">{member.data.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div class="hidden lg:block lg:w-5/12 sticky top-32">
          <div class="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-brand-dark/5 border border-gray-100 min-h-[420px] relative overflow-hidden group flex flex-col justify-center">
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-brand-orange-mid/10 via-brand-green-bright/5 to-brand-blue-deep/10 rounded-full blur-3xl pointer-events-none"></div>

            <div id="spotlight-content" class="transition-opacity duration-300 opacity-100 relative z-10 flex flex-col h-full justify-center">
              <div class="w-14 h-14 bg-brand-blue-deep/10 rounded-full mb-6 flex items-center justify-center text-brand-blue-deep border border-brand-blue-deep/20 shadow-sm">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 class="text-2xl font-black text-brand-dark mb-3 tracking-tight">Institutional Stewardship</h3>
              <p class="text-gray-500 text-sm leading-relaxed font-medium">
                Our initiative is steered by leading clinical data privacy experts and medical investigators. Hover over any portfolio profile on the left to review their scientific background and governance mandate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const teamCards = document.querySelectorAll('.team-card');
      const spotlightContent = document.getElementById('spotlight-content');

      let activeHoverTarget: any = null;
      let currentDisplayedCard: any = null;

      teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          if (window.innerWidth < 1024) return;
          if (currentDisplayedCard === card) return;

          activeHoverTarget = card;
          const name = card.querySelector('.member-name')!.textContent;
          const role = card.querySelector('.member-role')!.textContent;
          const bio = card.querySelector('.member-bio')!.textContent;
          const imgEl = card.querySelector('.member-img');
          const imgSrc = imgEl ? imgEl.getAttribute('src') : null;

          const themeColorClass = 'text-brand-blue-deep';

          if (spotlightContent) spotlightContent.style.opacity = '0';

          setTimeout(() => {
            if (activeHoverTarget !== card || !spotlightContent) return;
            currentDisplayedCard = card;

            spotlightContent.innerHTML = `
              <div class="flex justify-between items-start mb-6 gap-4">
                <div class="pt-2">
                  <h3 class="text-2xl font-bold text-gray-900 mb-1 tracking-tight leading-tight">${name}</h3>
                  <p class="text-xs font-bold ${themeColorClass} uppercase tracking-widest">${role}</p>
                </div>
                ${imgSrc
                  ? `<img src="${imgSrc}" class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl bg-surface shrink-0" />`
                  : `<div class="w-24 h-24 bg-surface rounded-full border-4 border-white shadow-xl shrink-0 flex items-center justify-center text-brand-blue-deep/30"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>`
                }
              </div>
              <div class="text-gray-600 leading-relaxed text-sm space-y-4 pr-2 font-medium">${bio}</div>
            `;

            spotlightContent.style.opacity = '1';
          }, 150);
        });

        card.addEventListener('click', () => {
          if (window.innerWidth >= 1024) return;
          const mobileContainer = card.querySelector('.mobile-bio-container') as HTMLElement;
          const isOpen = mobileContainer.style.maxHeight && mobileContainer.style.maxHeight !== '0px';

          document.querySelectorAll('.mobile-bio-container').forEach(c => {
            (c as HTMLElement).style.maxHeight = '0px';
            (c as HTMLElement).style.opacity = '0';
          });

          if (!isOpen) {
            mobileContainer.style.maxHeight = mobileContainer.scrollHeight + 'px';
            mobileContainer.style.opacity = '1';
          }
        });
      });
    });
  </script>
</Layout>

```

### 🧩 File: `src/pages/participants.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../layouts/Layout.astro';
import TrustBar from '../components/TrustBar.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

// Fetch content
const pageData = await getEntry('pages', 'participants');
const homeData = await getEntry('pages', 'home'); // Fetching home data to reuse the global TrustBar data

// Robust fallbacks
const hero = pageData?.data?.hero || {
  tagline: "Participant Portal",
  headline: "Advance Medicine Through",
  gradientText: "Genetic Insight",
  description: "Safely contribute to groundbreaking healthcare insights right here in Montreal."
};
const steps = pageData?.data?.steps || [];
---
<Layout title="Join BioPortal | Advancing Diabetes Research" navType="minimal">
  <div class="fixed top-0 inset-x-0 h-[600px] bg-gradient-to-br from-brand-green-bright/5 via-brand-teal/5 to-transparent -z-10"></div>

  <main class="relative z-10 -mt-16 pt-0">
    <header class="pt-28 pb-12 px-6 max-w-5xl mx-auto text-center">
      <span class="text-brand-green-bright font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
      <h1 class="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
        {hero.headline} <br/>
        <span class="bg-gradient-to-r from-brand-green-bright to-brand-teal bg-clip-text text-transparent pb-2">{hero.gradientText}</span>
      </h1>
      <p class="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
        {hero.description}
      </p>
    </header>

    {homeData?.data?.trustBar && <TrustBar content={homeData.data.trustBar} />}

    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

        <div class="lg:w-7/12 space-y-16">

          <div>
            <h3 class="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-8">Why Join BioPortal</h3>
            <div class="space-y-10">

              <div class="flex gap-6 items-start group">
                <div class="w-14 h-14 bg-brand-green-bright/10 text-brand-green-bright rounded-2xl flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-green-bright group-hover:text-white shadow-sm">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2 tracking-tight">Your Data Returned to You</h4>
                  <p class="text-gray-600 leading-relaxed">Gain exclusive, secure portal access to view your complete processed clinical datasets and multi-omics metabolic mapping insights. Your biology, back in your hands.</p>
                </div>
              </div>

              <div class="flex gap-6 items-start group">
                <div class="w-14 h-14 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white shadow-sm">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2 tracking-tight">Direct Localized Health Impact</h4>
                  <p class="text-gray-600 leading-relaxed">Your voluntary contributions directly empower localized scientific researchers across Montreal clinical pipelines to crack complex tracking signals in diabetes care models.</p>
                </div>
              </div>

              <div class="flex gap-6 items-start group">
                <div class="w-14 h-14 bg-brand-dark/5 text-brand-dark rounded-2xl flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-dark group-hover:text-white shadow-sm">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2 tracking-tight">Rigorous Security Safeguards</h4>
                  <p class="text-gray-600 leading-relaxed">Data custody operates under premium double-anonymization protocols. Your dynamic identity is split from biological materials, giving you complete safety and peace of mind.</p>
                </div>
              </div>

            </div>
          </div>

          <div class="pt-8 border-t border-gray-100">
            <h3 class="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-8">How Participation Works</h3>
            <div class="space-y-8 relative pl-4 border-l-2 border-brand-green-bright/20 ml-5">
              {steps.map((step: any, index: number) => (
                <div class="relative group">
                  <div class="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-surface border-2 border-brand-green-bright text-brand-green-bright font-extrabold text-xs flex items-center justify-center transition-all group-hover:bg-brand-green-bright group-hover:text-white group-hover:scale-110 shadow-sm">
                    {index + 1}
                  </div>
                  <div class="pl-4 pb-2">
                    <h4 class="font-bold text-gray-900 text-lg mb-1 tracking-tight">{step.title}</h4>
                    <p class="text-base text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div class="lg:w-5/12 w-full lg:sticky lg:top-28">
          <div class="bg-white rounded-[2.5rem] shadow-2xl shadow-brand-green-bright/10 border border-gray-100 p-8 lg:p-10 relative overflow-hidden">
            <div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl"></div>

            <div class="relative z-10">
              <h3 class="text-2xl font-black text-brand-dark mb-2 tracking-tight">Request to Join</h3>
              <p class="text-gray-500 mb-8 text-sm font-medium">Answer 3 quick questions to see if you qualify for our current Montreal study.</p>

              <form class="space-y-4">
                <label class="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-surface/50 hover:border-brand-green-bright/50 hover:bg-white transition-all cursor-pointer shadow-sm">
                  <span class="text-sm font-bold text-gray-700 pr-2">Are you 18 years or older?</span>
                  <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-green-bright focus:ring-brand-green-bright cursor-pointer shrink-0" />
                </label>
                <label class="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-surface/50 hover:border-brand-green-bright/50 hover:bg-white transition-all cursor-pointer shadow-sm">
                  <span class="text-sm font-bold text-gray-700 pr-2">Do you live in the Greater Montreal area?</span>
                  <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-green-bright focus:ring-brand-green-bright cursor-pointer shrink-0" />
                </label>
                <label class="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-surface/50 hover:border-brand-green-bright/50 hover:bg-white transition-all cursor-pointer shadow-sm">
                  <span class="text-sm font-bold text-gray-700 pr-2">Diagnosed with Type 1 or Type 2 Diabetes?</span>
                  <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-green-bright focus:ring-brand-green-bright cursor-pointer shrink-0" />
                </label>

                <div class="pt-4">
                  <label class="block text-[10px] uppercase tracking-widest font-black text-gray-400 mb-2 ml-1">Your Email Address</label>
                  <input type="email" placeholder="name@email.com" class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-green-bright focus:bg-white focus:ring-2 focus:ring-brand-green-bright/20 transition-all outline-none text-sm font-medium shadow-inner" />
                </div>

                <button type="button" class="w-full py-4 rounded-xl bg-brand-dark text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-brand-dark/20 hover:bg-gray-900 hover:shadow-2xl hover:shadow-brand-dark/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 mt-6 cursor-pointer group/btn">
                  Check My Eligibility
                  <svg class="w-4 h-4 text-brand-green-bright group-hover/btn:text-white transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </form>

              <p class="mt-6 text-[11px] text-gray-400 text-center leading-relaxed font-medium">
                By validating, you authorize secure operations contact loops. Read our global open science <a href={`${baseUrl}/privacy`} class="text-brand-green-bright underline hover:text-brand-dark transition-colors font-bold">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</Layout>

<style>
  label:focus-within {
    border-color: var(--color-brand-green-bright) !important;
    background-color: #ffffff !important;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05) !important;
  }
</style>

```

### 🧩 File: `src/pages/privacy.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../layouts/Layout.astro';

const pageData = await getEntry('pages', 'privacy');
const { tagline, headline, description, safeguardsTitle, safeguards, footerBox } = pageData.data;
---
<Layout title={`${headline} | BioPortal`} navType="minimal">
  <div class="fixed top-0 inset-x-0 h-[500px] bg-gradient-to-br from-brand-blue-deep/5 via-brand-teal/5 to-transparent -z-10"></div>

  <main class="max-w-3xl mx-auto px-6 py-12 lg:py-16">
    <span class="text-brand-blue-deep font-bold tracking-widest uppercase text-xs mb-4 block">{tagline}</span>
    <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">{headline}</h1>

    <div class="text-gray-600 space-y-6 leading-relaxed">
      <p class="text-lg text-gray-900 font-medium">{description}</p>
      <hr class="border-gray-100 my-8" />
      <h2 class="text-xl font-bold text-gray-900 mt-8 mb-6">{safeguardsTitle}</h2>

      <ul class="space-y-6 list-none pl-0">
        {safeguards.map((item: any) => (
          <li class="flex items-start gap-4 group">
            <span class="text-brand-green-bright font-bold text-xl leading-none select-none pt-0.5">✓</span>
            <div>
              <strong class="text-gray-900 font-bold block mb-0.5">{item.title}</strong>
              <span class="text-sm text-gray-600">{item.desc}</span>
            </div>
          </li>
        ))}
      </ul>

      {footerBox && (
        <div class="mt-12 p-8 bg-surface rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/20">
          <h3 class="font-bold text-gray-900 mb-2 text-base">{footerBox.title}</h3>
          <p class="text-sm text-gray-500 leading-relaxed">{footerBox.desc}</p>
        </div>
      )}
    </div>
  </main>
</Layout>

```

### 🧩 File: `src/pages/data.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../layouts/Layout.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
const pageData = await getEntry('pages', 'data');

// Safety fallbacks ensuring structure protection if content models fail verification
const hero = pageData?.data?.hero || { tagline: 'Data', headline: 'BioPortal Datasets', description: 'Loading data...' };
const stats = pageData?.data?.stats || [];
---
<Layout title="Data Access & Cohorts | BioPortal" navType="minimal" backText="Back to Home">
  <div class="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-br from-brand-blue-deep/10 via-brand-teal/5 to-transparent -z-10"></div>

  <main class="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">
    <header class="max-w-3xl mb-16 text-center mx-auto">
      <span class="text-brand-blue-deep font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
      <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">{hero.headline}</h1>
      <p class="text-xl text-gray-600 leading-relaxed">{hero.description}</p>
    </header>

    <div class="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-16 items-stretch">

      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat: any) => (
          <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-blue-deep shadow-xl shadow-gray-100/50 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
              <h3
                id={`metric-value-${stat.label.toLowerCase().replace(/ /g, '-')}`}
                class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter transition-colors group-hover:text-brand-blue-deep"
              >
                {stat.value}
              </h3>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div class="lg:col-span-5 bp-frosted-gradient rounded-[2rem] p-10 border border-white/60 shadow-2xl shadow-brand-blue-deep/5 flex flex-col justify-between relative overflow-hidden group">

        <div class="relative z-10 mb-10">
          <span class="px-3 py-1.5 rounded-lg bg-brand-blue-deep/10 text-brand-blue-deep font-bold text-[10px] uppercase tracking-[0.15em] mb-6 inline-block">Interactive Platform</span>
          <h2 class="text-4xl font-black tracking-tight text-gray-900 mb-4">Live Data Explorer</h2>
          <p class="text-gray-600 text-sm leading-relaxed font-medium opacity-90">
            Visualize real-time clinical cohorts, demographic distributions, and sample metrics immediately through our zero-latency gateway. Filter and export aggregates on the fly.
          </p>
        </div>

        <a
          href={`${baseUrl}/data/explorer/`}
          class="relative z-10 w-full py-4 rounded-xl bg-brand-dark text-white text-sm font-bold shadow-lg shadow-brand-dark/20 hover:shadow-2xl hover:shadow-brand-dark/40 hover:scale-[1.02] hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group/btn border border-brand-dark/50"
        >
          Launch Explorer
          <svg class="w-5 h-5 text-brand-teal group-hover/btn:text-white transform transition-all duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </a>
      </div>

    </div>

    <div class="grid lg:grid-cols-12 gap-8 items-start">

      <div class="lg:col-span-5 space-y-6">
        <div class="bg-brand-dark rounded-[2.5rem] p-8 text-white shadow-xl">
          <h3 class="text-xl font-bold mb-5 flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </span>
            Access Requirements
          </h3>
          <ul class="space-y-4 text-sm text-gray-300 font-medium">
            <li class="flex items-start gap-3"><span class="text-brand-teal font-black mt-0.5">01</span><span class="leading-relaxed">Institutionally-approved REB/IRB documentation matching the target request.</span></li>
            <li class="flex items-start gap-3"><span class="text-brand-teal font-black mt-0.5">02</span><span class="leading-relaxed">Executed Data Transfer Agreement (DTA) or institutional alignment contracts.</span></li>
            <li class="flex items-start gap-3"><span class="text-brand-teal font-black mt-0.5">03</span><span class="leading-relaxed">Compliance with the BioPortal open science attribution framework.</span></li>
          </ul>
        </div>

        <div class="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-soft">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Infrastructure Vetting</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">
            The infrastructure utilizes our custom-built interactive discovery platform and leverages high-performance computing networks provided by the <strong>Digital Research Alliance of Canada (AllianceCan)</strong> alongside a secure, private compute cluster at the <strong>Lady Davis Institute (LDI)</strong> for downstream processing operations.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-lg bg-brand-blue-mid/10 text-brand-dark font-bold text-[10px] uppercase tracking-widest">LDI Private Cluster</span>
            <span class="px-3 py-1.5 rounded-lg bg-brand-teal/10 text-brand-dark font-bold text-[10px] uppercase tracking-widest">AllianceCan</span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7">
        <div class="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-brand-blue-deep/5 border border-gray-100 h-full">
          <h2 class="text-3xl font-black text-brand-dark mb-2">Request Data Access</h2>
          <p class="text-gray-500 mb-8 text-sm leading-relaxed font-medium">Inquire about specific cohorts or request structural credentials to access full genomic and clinical datasets.</p>

          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Full Name</label>
                <input type="text" placeholder="Dr. Jane Smith" class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium shadow-inner" />
              </div>
              <div>
                <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Institutional Email</label>
                <input type="email" placeholder="jane.smith@mcgill.ca" class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium shadow-inner" />
              </div>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Research Interest</label>
              <select class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium appearance-none cursor-pointer shadow-inner">
                <option>Diabetes & Endocrinology</option>
                <option>Proteomics & Biomarkers</option>
                <option>Genomics & Rare Variants</option>
                <option>Other / Multi-Omics</option>
              </select>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Brief Project Overview</label>
              <textarea rows="4" placeholder="Describe your intended scientific use of BioPortal datasets..." class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium resize-none shadow-inner"></textarea>
            </div>

            <button type="button" class="w-full py-4 rounded-xl bg-brand-blue-deep text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-brand-blue-deep/20 hover:bg-brand-dark hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 cursor-pointer mt-4">
              Submit Access Inquiry
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>

    </div>
  </main>
</Layout>

<style>
  .bp-frosted-gradient {
    backdrop-filter: blur(24px) saturate(140%);
    -webkit-backdrop-filter: blur(24px) saturate(140%);
    background: linear-gradient(
      135deg,
      rgba(14, 165, 233, 0.05) 0%,
      rgba(0, 164, 144, 0.05) 25%,
      rgba(161, 208, 68, 0.04) 50%,
      rgba(246, 194, 68, 0.04) 75%,
      rgba(255, 124, 67, 0.05) 100%
    ), rgba(255, 255, 255, 0.55);
  }
</style>

<script>
  const API_GATEWAY = "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats";

  async function syncLandingMetrics() {
    try {
      const response = await fetch(`${API_GATEWAY}?filter=baseline&_cb=${new Date().getTime()}`);
      if (!response.ok) return;

      const statsArray = await response.json();

      const sexStat = statsArray.find((s: any) => s.chart_id === 'sex');
      if (sexStat && sexStat.data) {
        const liveTotalCount = sexStat.data.reduce((acc: number, curr: any) => acc + (parseInt(curr.count) || 0), 0);

        const patientContainer = document.getElementById('metric-value-total-phenopackets');
        if (patientContainer) {
          patientContainer.innerText = liveTotalCount.toLocaleString();
        }
      }
    } catch (err) {
      console.warn("API metrics synchronization skipped, defaulting to static manifests:", err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncLandingMetrics);
  } else {
    syncLandingMetrics();
  }
</script>

```

### 🧩 File: `src/pages/data/explorer.astro`
```astro
---
import Layout from '../../layouts/Layout.astro';
import ExplorerSidebar from '../../components/explorer/ExplorerSidebar.astro';
import ExplorerHeader from '../../components/explorer/ExplorerHeader.astro';
import ExplorerGrid from '../../components/explorer/ExplorerGrid.astro';
---
<Layout title="Interactive Data Explorer | BioPortal" navType="minimal" backLink="/data" backText="Back to Data Request">
  <div id="mobile-sidebar-overlay" class="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300 lg:hidden"></div>

  <div class="flex min-h-[calc(100vh-80px)] bg-surface font-sans relative">
    <ExplorerSidebar />

    <main id="main-content-area" class="flex-1 p-6 lg:p-12 relative z-10 w-full overflow-x-hidden transition-all duration-500 origin-top">

      <div id="universal-loading-overlay" class="absolute inset-0 z-50 flex flex-col items-center justify-center bg-surface/40 backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none rounded-[2.5rem] hidden">
        <p class="text-[11px] font-black text-brand-dark uppercase tracking-[0.2em] animate-pulse">Syncing Cohort Data</p>
      </div>

      <ExplorerHeader />
      <ExplorerGrid />
    </main>
  </div>

  </Layout>

<script src="../../scripts/explorerEngine.ts"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('explorer-sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    const openBtn = document.getElementById('mobile-filter-btn');
    const closeBtn = document.getElementById('mobile-close-sidebar');

    const toggleSidebar = (force?: boolean) => {
      if (!sidebar || !overlay) return;
      const isOpen = sidebar.classList.contains('translate-x-0');
      const shouldOpen = force !== undefined ? force : !isOpen;

      if (shouldOpen) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
      } else {
        overlay.classList.add('opacity-0');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        setTimeout(() => overlay.classList.add('hidden'), 300);
      }
    };

    if (openBtn) openBtn.addEventListener('click', () => toggleSidebar(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleSidebar(false));
    if (overlay) overlay.addEventListener('click', () => toggleSidebar(false));
  });
</script>

```

### 🧩 File: `src/layouts/Layout.astro`
```astro
---
import '../styles/global.css';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';

const {
  title,
  navType = 'main',
  ctaMode = 'visible',
  backLink = '/',
  backText = 'Back',
  hideFooter = false
} = Astro.props;
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body class="flex flex-col min-h-screen bg-surface">
    <Navbar type={navType} ctaMode={ctaMode} backLink={backLink} backText={backText} />

    <div class="flex-grow pt-10">
      <slot />
    </div>

    {!hideFooter && <Footer />}
  </body>
</html>

```

### 🧩 File: `src/components/Hero.astro`
```astro
---
const { content } = Astro.props;
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
---
<header class="pt-28 pb-8 px-6 max-w-5xl mx-auto text-center relative z-10">
  <h1 class="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
    {content.headline} <br/>
    <span class="bg-gradient-to-r from-brand-blue-deep to-brand-teal bg-clip-text text-transparent pb-2">{content.gradientText}</span>
  </h1>

  <p class="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
    {content.description}
  </p>

  <div id="hero-button-group" class="flex flex-col sm:flex-row justify-center items-center gap-6 z-20">

    <div class="relative group/tooltip w-full sm:w-auto">
      <a
        href={`${baseUrl}/participants`}
        class="w-full sm:w-64 h-16 rounded-full bg-brand-green-bright text-white font-extrabold text-lg shadow-xl shadow-brand-green-bright/30 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-2xl hover:shadow-brand-green-bright/40 flex items-center justify-center gap-3 cursor-pointer select-none group"
      >
        Join Study
        <svg class="w-5 h-5 shrink-0 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-4 bg-white border border-gray-100 text-gray-600 text-xs text-left leading-relaxed rounded-2xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
        Register your interest to safely contribute biospecimens and clinical data to our Montreal-based research cohorts.
      </div>
    </div>

    <div class="relative group/tooltip w-full sm:w-auto">
      <a
        href={`${baseUrl}/data`}
        class="w-full sm:w-64 h-16 rounded-full bg-brand-blue-deep text-white font-extrabold text-lg shadow-xl shadow-brand-blue-deep/30 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-2xl hover:shadow-brand-blue-deep/40 flex items-center justify-center gap-3 cursor-pointer select-none group"
      >
        Request Data
        <svg class="w-5 h-5 shrink-0 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-4 bg-white border border-gray-100 text-gray-600 text-xs text-left leading-relaxed rounded-2xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
        Access our secure portal to explore de-identified datasets and request biological materials for your research.
      </div>
    </div>

  </div>
</header>

```

### 🧩 File: `src/components/TrustBar.astro`
```astro
---
const { content } = Astro.props;
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
---

<section class="border-y border-gray-100 bg-white/50 py-10 mb-12">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">{content.label}</p>

    <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 transition-all duration-500 mb-12">
      {content.partners.map((partner: any) => (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          class="hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center drop-shadow-sm hover:drop-shadow-md"
          title={partner.name}
        >
          {partner.logo ? (
            <img
              src={`${baseUrl}${partner.logo}`}
              alt={partner.name}
              class="h-10 md:h-12 w-auto object-contain"
              style={partner.scale ? `transform: scale(${partner.scale});` : ''}
              onerror="this.style.display='none'"
            />
          ) : (
            <span class="text-lg font-black text-gray-800 tracking-tighter">{partner.name}</span>
          )}
        </a>
      ))}
    </div>

    {content.acknowledgments && (
      <div class="max-w-3xl mx-auto pt-8 border-t border-gray-100/60">
        <p class="text-sm text-gray-500 leading-relaxed italic">
          {content.acknowledgments}
        </p>
      </div>
    )}
  </div>
</section>

```

### 🧩 File: `src/components/Footer.astro`
```astro
---
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
---
<footer class="bg-brand-dark text-white py-20 px-6 text-center mt-auto">
  <div class="text-2xl font-bold mb-2 tracking-tight">BioPortal<span class="text-brand-blue-deep">.</span></div>
  <p class="text-gray-400 text-sm mb-6">Jewish General Hospital & McGill University</p>
  <div class="mb-12">
    <a href={`${baseUrl}/privacy`} class="text-xs text-gray-400 hover:text-white underline transition-colors">Privacy Policy & Data Safeguards</a>
  </div>
  <div class="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">© 2026 BioPortal Research Group</div>
</footer>

```

### 🧩 File: `src/components/Navbar.astro`
```astro
---
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

const {
  type = 'main',
  ctaMode = 'visible',
  backLink = '/',
  backText = 'Back'
} = Astro.props;
---
<nav class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300" data-cta-mode={ctaMode}>
  <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">

    <a href={`${baseUrl}/`} class="flex items-center shrink-0 z-50">
      <img src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`} alt="BioPortal Logo" class="w-36 md:w-40 h-auto shrink-0 hover:-translate-y-0.5 transition-transform" onerror="this.style.display='none'" />
    </a>

    {type === 'main' ? (
      <>
        <div id="nav-cta-group" class={`absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-4 transition-all duration-500 ease-out ${ctaMode === 'scroll' ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <a href={`${baseUrl}/participants`} class="px-5 py-2 rounded-full border-2 border-brand-green-bright text-brand-green-bright text-xs font-bold hover:bg-brand-green-bright hover:text-white transition-all bg-white">
            Join Study
          </a>
          <a href={`${baseUrl}/data`} class="px-5 py-2 rounded-full border-2 border-brand-blue-deep text-brand-blue-deep text-xs font-bold hover:bg-brand-blue-deep hover:text-white transition-all bg-white">
            Request Data
          </a>
        </div>

        <div class="hidden lg:flex items-center space-x-8 font-medium text-sm ml-auto">
          <a href={`${baseUrl}/#insights`} class="text-gray-500 hover:text-brand-dark transition-colors">Insights</a>
          <a href={`${baseUrl}/#team`} class="text-gray-500 hover:text-brand-dark transition-colors">Our Team</a>
          <a href={`${baseUrl}/privacy`} class="text-gray-500 hover:text-brand-dark transition-colors">Data Security</a>
        </div>

        <button id="mobile-menu-toggle" class="lg:hidden text-brand-dark p-2 -mr-2 focus:outline-none z-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

        <div id="mobile-menu-panel" class="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl hidden flex-col px-6 py-8 space-y-6 lg:hidden">
          <a href={`${baseUrl}/#insights`} class="mobile-link text-brand-dark font-extrabold text-xl">Insights</a>
          <a href={`${baseUrl}/#team`} class="mobile-link text-brand-dark font-extrabold text-xl">Our Team</a>
          <a href={`${baseUrl}/privacy`} class="mobile-link text-brand-dark font-extrabold text-xl">Data Security</a>
          <hr class="border-gray-100" />
          <div class="flex flex-col gap-3">
            <a href={`${baseUrl}/participants`} class="w-full text-center py-4 rounded-xl bg-brand-green-bright text-white font-bold shadow-md shadow-brand-green-bright/20">Join Study</a>
            <a href={`${baseUrl}/data`} class="w-full text-center py-4 rounded-xl bg-brand-blue-deep text-white font-bold shadow-md shadow-brand-blue-deep/20">Request Data</a>
          </div>
        </div>
      </>
    ) : (
      <a href={`${baseUrl}${backLink}`} class="text-sm font-bold text-gray-400 hover:text-brand-dark transition-colors flex items-center gap-2 ml-auto z-50">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        {backText}
      </a>
    )}
  </div>
</nav>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Scroll logic for Desktop CTA
    const nav = document.querySelector('nav[data-cta-mode="scroll"]');
    if (nav) {
      const navCtaGroup = nav.querySelector('#nav-cta-group');
      const heroButtons = document.getElementById('hero-button-group');

      const handleScroll = () => {
        let shouldShow = false;
        if (heroButtons) {
          const rect = heroButtons.getBoundingClientRect();
          if (rect.bottom < 80) shouldShow = true;
        } else {
          if (window.scrollY > 400) shouldShow = true;
        }

        if (shouldShow) {
          navCtaGroup?.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
          navCtaGroup?.classList.add('opacity-100', 'translate-y-0');
        } else {
          navCtaGroup?.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
          navCtaGroup?.classList.remove('opacity-100', 'translate-y-0');
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    // 🌟 NEW: Mobile Menu Toggle Logic
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobilePanel = document.getElementById('mobile-menu-panel');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileToggle && mobilePanel) {
      mobileToggle.addEventListener('click', () => {
        mobilePanel.classList.toggle('hidden');
        mobilePanel.classList.toggle('flex');
      });

      // Close menu when a link is clicked
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobilePanel.classList.add('hidden');
          mobilePanel.classList.remove('flex');
        });
      });
    }
  });
</script>

```

### 🧩 File: `src/components/explorer/ExplorerSidebar.astro`
```astro
---
---
<aside id="explorer-sidebar" class="w-[300px] sm:w-[360px] bg-white border-r border-gray-200 flex-shrink-0 fixed lg:sticky top-20 h-[calc(100vh-80px)] flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.05)] z-40 transition-transform duration-300 -translate-x-full lg:translate-x-0">

  <div class="p-6 border-b border-gray-100 bg-surface/30">
    <span class="font-bold text-brand-dark tracking-tight">Explorer Controls</span>
    <button id="mobile-close-sidebar" class="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-brand-dark transition-colors shadow-sm">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>

  <div class="p-5 lg:p-6 border-b border-gray-100 bg-surface/30">
    <div class="flex gap-3 mb-5">
      <button onclick="changeFilter('baseline')" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:border-brand-blue-deep hover:text-brand-blue-deep transition-all shadow-sm cursor-pointer group">
        <svg class="w-4 h-4 text-gray-400 group-hover:text-brand-blue-deep transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
        Reset Filters
      </button>
      <button onclick="exportCohortCSV()" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-brand-dark border border-brand-dark text-white rounded-xl text-xs font-bold hover:bg-brand-blue-deep hover:border-brand-blue-deep transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        Export CSV
      </button>
    </div>

    <div class="relative w-full">
      <input type="text" id="global-search" placeholder="Search cohorts or metrics..."
             class="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-brand-blue-deep focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium shadow-sm placeholder:text-gray-400" />
      <svg class="w-4 h-4 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
  </div>

  <div class="flex p-2 bg-surface/30 border-b border-gray-100 shrink-0">
    <div class="flex w-full bg-gray-100/80 p-1 rounded-xl">
      <button onclick="switchTab('filters')" id="tab-btn-filters" class="flex-1 py-2 text-xs font-bold tracking-widest text-brand-dark bg-white rounded-lg shadow-sm transition-all cursor-pointer flex justify-center items-center gap-2">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
        Filters
      </button>
      <button onclick="switchTab('charts')" id="tab-btn-charts" class="flex-1 py-2 text-xs font-bold tracking-widest text-gray-500 hover:text-brand-dark rounded-lg transition-all cursor-pointer flex justify-center items-center gap-2">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        Charts
      </button>
    </div>
  </div>

  <div class="flex-1 overflow-y-auto custom-scrollbar p-6">

    <div id="tab-content-filters" class="block">
      <button id="btn-baseline" onclick="changeFilter('baseline')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-brand-blue-deep/5 transition-colors text-[14px] flex justify-between items-center filter-active border border-transparent mb-2 cursor-pointer group">
        <div class="flex items-center gap-3">
          <div class="w-4 h-4 rounded-full border-2 border-brand-blue-deep flex items-center justify-center shrink-0 radio-ring">
            <div class="w-2 h-2 rounded-full bg-brand-blue-deep opacity-100 radio-dot transition-opacity"></div>
          </div>
          <span class="font-bold">Baseline (Total Cohort)</span>
        </div>
        <span id="size-baseline" class="text-[11px] bg-white px-2 py-0.5 rounded text-brand-blue-deep border border-gray-100 font-black shadow-sm">...</span>
      </button>

      <div id="filter-list" class="space-y-1 filter-search-target">
        </div>
    </div>

    <div id="tab-content-charts" class="hidden">
      <div class="flex gap-2 mb-4 pb-4 border-b border-gray-100 justify-between items-center px-1">
        <span class="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Visibility Map</span>
        <div class="space-x-3 bg-gray-50 px-2 py-1 rounded-lg">
          <button onclick="toggleAllCharts(true)" class="text-[10px] font-bold text-brand-blue-deep hover:text-brand-dark transition-colors cursor-pointer">All</button>
          <span class="text-gray-300">|</span>
          <button onclick="toggleAllCharts(false)" class="text-[10px] font-bold text-gray-400 hover:text-brand-dark transition-colors cursor-pointer">None</button>
        </div>
      </div>
      <div id="chart-toggles" class="space-y-2 filter-search-target">
        </div>
    </div>

  </div>

  <div class="p-5 border-t border-gray-100 bg-surface/50 shrink-0">
    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex justify-between items-center">
      <span>Data Gateway</span>
      <span id="cache-indicator" class="text-brand-green-bright flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-brand-green-bright animate-pulse shadow-[0_0_8px_rgba(127,195,66,0.8)]"></span> SYNCING
      </span>
    </div>
  </div>
</aside>

<style>
  /* 🌟 UPGRADED: High-end Radio Logic Styling */
  :global(.filter-active) {
    background-color: color-mix(in srgb, var(--color-brand-blue-deep) 6%, transparent) !important;
    border-color: color-mix(in srgb, var(--color-brand-blue-deep) 20%, transparent) !important;
  }

  :global(.filter-active .font-bold) {
    color: var(--color-brand-dark) !important;
  }

  /* Handle dynamic injected buttons to mimic the Baseline radio UI */
  :global(#filter-list button) {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;
    text-align: left !important;
    padding: 0.75rem 1rem !important;
    border-radius: 0.75rem !important;
    border: 1px solid transparent !important;
    font-size: 14px !important;
    color: #4b5563 !important;
    transition: all 0.2s ease !important;
    cursor: pointer !important;
  }
  :global(#filter-list button:hover) {
    background-color: #f8fafc !important;
  }

  /* Structural fixes for injected accordion elements */
  :global(details > summary) { list-style: none; }
  :global(details > summary::-webkit-details-marker) { display: none; }

  :global(.filter-group) {
    border-bottom: 1px solid #f1f5f9 !important;
  }

  :global(.filter-group summary) {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;
    font-size: 0.70rem !important;
    font-weight: 800 !important;
    color: #94a3b8 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.15em !important;
    cursor: pointer !important;
    padding: 1.25rem 0.5rem !important;
    margin: 0 -1.5rem !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    width: calc(100% + 3rem) !important;
    transition: all 0.2s ease !important;
    user-select: none !important;
  }

  :global(.filter-group summary:hover) {
    color: var(--color-brand-blue-deep) !important;
    background-color: color-mix(in srgb, var(--color-brand-blue-deep) 3%, transparent) !important;
  }

  :global(.filter-group[open] > div) {
    padding-bottom: 1rem !important;
    margin-top: 0.5rem !important;
  }

  .custom-scrollbar::-webkit-scrollbar { width: 5px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--color-brand-blue-deep); }

  :global(.apple-switch) {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
    flex-shrink: 0;
  }
  :global(.apple-switch input) {
    opacity: 0;
    width: 0;
    height: 0;
  }
  :global(.slider) {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #e2e8f0;
    transition: .3s ease;
    border-radius: 20px;
  }
  :global(.slider:before) {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .3s ease;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  }
  :global(input:checked + .slider) {
    background-color: var(--color-brand-green-bright);
  }
  :global(input:checked + .slider:before) {
    transform: translateX(16px);
  }
</style>

```

### 🧩 File: `src/components/explorer/ExplorerHeader.astro`
```astro
---
---
<header id="explorer-header" class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4 border-b border-gray-200 pb-8 transition-all duration-500 ease-out origin-top">

  <div class="w-full sm:w-auto flex justify-between items-start sm:items-center gap-4">
    <div>
      <h1 class="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-2 min-h-[40px]" id="view-title"></h1>
      <p class="text-sm text-gray-500 font-medium tracking-wide">Aggregated population statistics.</p>
    </div>

    <button onclick="toggleMobileSidebar()" class="lg:hidden shrink-0 bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm text-brand-blue-deep hover:bg-brand-blue-deep/10 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>

  <div class="text-right bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-end">
    <span class="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-1">Total Patients</span>
    <span id="top-cohort-size" class="text-2xl sm:text-3xl font-black text-brand-blue-deep leading-none min-h-[36px]"></span>
  </div>
</header>

```

### 🧩 File: `src/components/explorer/ExplorerGrid.astro`
```astro
---
---
<div class="relative w-full">

  <div id="loading-overlay" class="absolute inset-0 z-50 bg-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-500 rounded-[2.5rem]"></div>

  <div id="dashboard-grid" class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 transition-all duration-500 ease-out origin-top">
  </div>

</div>

<div id="search-fallback" class="hidden flex-col items-center justify-center py-32 text-gray-400 bg-white/50 border border-gray-100 rounded-[2.5rem] mt-6 shadow-sm">
  <svg class="w-14 h-14 mb-6 opacity-50 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  <p class="text-base font-bold text-gray-500 uppercase tracking-[0.15em]">No matching metrics</p>
</div>

<style>
  :global(.glass-card) {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 1.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  :global(.glass-card:hover) {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-color: var(--color-brand-blue-deep);
  }

  :global(.custom-scrollbar::-webkit-scrollbar) { width: 6px; }
  :global(.custom-scrollbar::-webkit-scrollbar-track) { background: transparent; }
  :global(.custom-scrollbar::-webkit-scrollbar-thumb) { background: #cbd5e1; border-radius: 10px; }
  :global(.custom-scrollbar::-webkit-scrollbar-thumb:hover) { background: var(--color-brand-blue-deep); }
</style>

```

### 🧩 File: `src/styles/global.css`
```css
@import "tailwindcss";

@theme {
  /* Warm Path */
  --color-brand-orange-deep: #f37a21;
  --color-brand-orange-mid: #f89a19;
  --color-brand-yellow: #fdbb10;

  /* Bridge Path */
  --color-brand-green-bright: #7fc342;
  --color-brand-green-mid: #99c43c;
  --color-brand-lime: #b3c735;

  /* Cool Path */
  --color-brand-blue-deep: #26abe2;
  --color-brand-blue-mid: #56bee7;
  --color-brand-blue-light: #9fdbee;
  --color-brand-teal: #96d6c2;

  /* UI Neutrals */
  --color-brand-dark: #003f5e;
  --color-surface: #fbfcfd;

  --font-sans: "Outfit", ui-sans-serif, system-ui, sans-serif;
}

@utility logo-gradient {
  background: linear-gradient(135deg, #f37a21, #fdbb10, #7fc342, #26abe2);
}

```

