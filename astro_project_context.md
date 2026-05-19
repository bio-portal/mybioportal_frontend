# BioPortal Astro Architectural Context
Generated on: Tue 19 May 2026 03:45:53 PM EDT

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
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── TrustBar.astro
│   ├── [01;34mcontent[00m
│   │   ├── [01;34mnews[00m
│   │   │   └── kidney-project.md
│   │   ├── [01;34mpages[00m
│   │   │   ├── home.yaml
│   │   │   ├── news.yaml
│   │   │   ├── participants.yaml
│   │   │   ├── privacy.yaml
│   │   │   └── researchers.yaml
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
│   │   ├── index.astro
│   │   ├── [01;34mnews[00m
│   │   │   ├── [id].astro
│   │   │   └── index.astro
│   │   ├── participants.astro
│   │   ├── privacy.astro
│   │   └── researchers.astro
│   └── [01;34mstyles[00m
│       └── global.css
└── tsconfig.json

10 directories, 49 files
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
  <div class="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-brand-orange-mid/5 to-transparent -z-10"></div>

  <main class="max-w-3xl mx-auto px-6 pt-12 pb-24">
    <header class="mb-10 border-b border-gray-100 pb-10">
      <div class="flex items-center gap-4 mb-6">
        <span class="text-xs font-bold px-3 py-1 rounded-md bg-brand-orange-mid/10 text-brand-orange-deep uppercase tracking-widest">
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
  .article-content :global(blockquote) { @apply border-l-4 border-brand-orange-mid pl-6 py-2 my-8 text-xl italic text-gray-500 bg-brand-orange-mid/5 rounded-r-2xl; }
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
      <span class="text-brand-orange-mid font-bold tracking-widest uppercase text-xs mb-4 block">{tagline}</span>
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
              <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-orange-mid/10 text-brand-orange-deep">{post.data.tag}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-orange-deep transition-colors">{post.data.title}</h3>
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
  <main>
    <Hero content={homeData.data.hero} />
    <TrustBar content={homeData.data.trustBar} />

    <section id="insights" class="py-16 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div class="mb-12 flex justify-between items-end">
        <div>
          <span class="text-brand-orange-mid font-bold tracking-widest uppercase text-xs mb-4 block">Latest Insights</span>
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
                <span class="text-[10px] font-bold text-gray-400 uppercase">
                  {post.data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-orange-mid/10 text-brand-orange-deep">{post.data.tag}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-orange-deep transition-colors">{post.data.title}</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">{post.data.excerpt}</p>
              <a href={`${baseUrl}/news/${post.id}/`} class="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                Read Insight <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div class="mt-12 text-center">
        <a href={`${baseUrl}/news`} class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface border-2 border-gray-100 text-brand-dark font-bold hover:border-brand-blue-deep hover:text-brand-blue-deep transition-colors shadow-sm">
          View All Insights
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </section>

    <section id="team" class="py-16 px-6 max-w-7xl mx-auto border-t border-gray-100 bg-surface/30 scroll-mt-20">
      <div class="mb-16">
        <span class="text-brand-blue-mid font-bold tracking-widest uppercase text-xs mb-4 block">Leadership & Operations</span>
        <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Our Team</h2>
        <p class="text-lg text-gray-500 max-w-2xl">The minds behind BioPortal. Our dedicated professionals work tirelessly to connect with participants and advance groundbreaking scientific research.</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 relative items-start">
        <div class="lg:w-7/12 w-full space-y-16">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200" data-group="governing">Governing Committee</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {sortedTeam.filter(m => m.data.group === 'governing').map(member => (
      <div class="team-card group cursor-pointer relative" tabindex="0">

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
      </div>
    ))}

                  <div class="lg:hidden mobile-bio-container overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out mt-0">
                    <p class="text-xs text-gray-600 leading-relaxed p-4 bg-white rounded-2xl border border-gray-100 shadow-sm mt-3">{member.data.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200" data-group="recruitment">Recruitment & Operations</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {sortedTeam.filter(m => m.data.group === 'recruitment').map(member => (
                <div class="team-card group cursor-pointer relative" tabindex="0">
                  <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface mx-auto mb-4 overflow-hidden border-4 border-white shadow-md group-hover:shadow-xl group-hover:scale-105 group-hover:border-brand-orange-mid/30 transition-all duration-500 relative">
                     {member.data.image ? <img src={`${baseUrl}${member.data.image}`} alt={member.data.name} class="w-full h-full object-cover member-img" onerror="this.style.display='none'" /> : <div class="w-full h-full bg-brand-orange-mid/5 flex items-center justify-center member-img-fallback"><svg width="32" height="32" class="text-brand-orange-mid/30" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>}
                  </div>
                  <div class="text-center">
                    <h4 class="text-sm font-bold text-gray-900 leading-tight mb-1 member-name">{member.data.name}</h4>
                    <p class="text-[10px] font-bold text-brand-orange-mid uppercase tracking-wider member-role">{member.data.role}</p>
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
          <div class="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-brand-dark/5 border border-gray-100 min-h-[420px] relative overflow-hidden group">
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-brand-orange-mid/20 via-brand-green-bright/10 to-brand-blue-deep/20 rounded-full blur-3xl pointer-events-none"></div>

            <div id="spotlight-content" class="transition-opacity duration-300 opacity-100 relative z-10 flex flex-col h-full justify-center">
              <div class="w-16 h-16 bg-surface rounded-full mb-6 flex items-center justify-center text-brand-blue-deep/30 border-2 border-gray-50 shadow-inner">
                <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Interactive Roster</h3>
              <p class="text-gray-500 leading-relaxed">Hover over any team member's portrait on the left to read their full biography and role within the BioPortal initiative.</p>
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

      let activeHoverTarget = null;
      let currentDisplayedCard = null;

      teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          if (window.innerWidth < 1024) return;
          if (currentDisplayedCard === card) return;

          activeHoverTarget = card;
          const name = card.querySelector('.member-name').textContent;
          const role = card.querySelector('.member-role').textContent;
          const bio = card.querySelector('.member-bio').textContent;
          const imgEl = card.querySelector('.member-img');
          const imgSrc = imgEl ? imgEl.getAttribute('src') : null;

          const groupTitleEl = card.closest('div').parentElement.querySelector('h3');
          const isGov = groupTitleEl && groupTitleEl.getAttribute('data-group') === 'governing';
          const themeColorClass = isGov ? 'text-brand-blue-deep' : 'text-brand-orange-mid';

          spotlightContent.style.opacity = '0';

          setTimeout(() => {
            if (activeHoverTarget !== card) return;
            currentDisplayedCard = card;

            spotlightContent.innerHTML = `
              <div class="flex justify-between items-start mb-6 gap-4">
                <div class="pt-2">
                  <h3 class="text-2xl font-bold text-gray-900 mb-1 tracking-tight leading-tight">${name}</h3>
                  <p class="text-xs font-bold ${themeColorClass} uppercase tracking-widest">${role}</p>
                </div>
                ${imgSrc
                  ? `<img src="${imgSrc}" class="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl bg-surface shrink-0" />`
                  : `<div class="w-28 h-28 bg-surface rounded-full border-4 border-white shadow-xl shrink-0"></div>`
                }
              </div>
              <div class="text-gray-600 leading-relaxed text-sm space-y-4 pr-2">${bio}</div>
            `;

            spotlightContent.style.opacity = '1';
          }, 150);
        });

        card.addEventListener('click', () => {
          if (window.innerWidth >= 1024) return;

          const mobileContainer = card.querySelector('.mobile-bio-container');
          const isOpen = mobileContainer.style.maxHeight && mobileContainer.style.maxHeight !== '0px';

          document.querySelectorAll('.mobile-bio-container').forEach(c => {
            c.style.maxHeight = '0px';
            c.style.opacity = '0';
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

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
const pageData = await getEntry('pages', 'participants');
const { hero, steps, benefit } = pageData.data;
---
<Layout title="Join BioPortal | Advancing Diabetes Research" navType="minimal">
  <div class="fixed top-0 inset-x-0 h-[600px] bg-gradient-to-br from-brand-orange-mid/5 via-brand-yellow/5 to-transparent -z-10"></div>

  <main class="max-w-6xl mx-auto px-6 py-12 lg:py-16">
    <div class="flex flex-col lg:flex-row gap-16 items-start">
      <div class="lg:w-7/12">
        <span class="text-brand-orange-deep font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
        <h1 class="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
          {hero.headline}<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-mid to-brand-orange-deep">{hero.gradientText}</span>
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-12">{hero.description}</p>

        <div class="mb-12">
          <h3 class="text-xl font-bold text-gray-900 mb-6">How participation works:</h3>
          <div class="space-y-6">
            {steps.map((step: any, index: number) => (
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-brand-orange-mid/10 text-brand-orange-deep flex items-center justify-center font-black shrink-0">{index + 1}</div>
                <div>
                  <h4 class="font-bold text-gray-900">{step.title}</h4>
                  <p class="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="bg-white border-2 border-brand-orange-mid/20 rounded-[2rem] p-8 shadow-xl shadow-brand-orange-mid/5 relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-2 h-full bg-brand-orange-mid group-hover:w-3 transition-all"></div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
          <p class="text-gray-600 leading-relaxed">{benefit.desc}</p>
        </div>
      </div>

      <div class="lg:w-5/12 w-full lg:sticky lg:top-32">
        <div class="bg-white rounded-[2.5rem] shadow-2xl shadow-brand-orange-mid/10 border border-gray-100 p-8 lg:p-10 relative overflow-hidden">
          <div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Eligibility Check</h3>
            <p class="text-gray-500 mb-8 text-sm">Answer 3 quick questions to see if you can join our current Montreal study.</p>

            <form class="space-y-5">
              <label class="group flex items-center justify-between p-4 rounded-2xl border-2 border-gray-50 bg-surface hover:border-brand-orange-mid/30 hover:bg-white transition-all cursor-pointer">
                <span class="text-sm font-semibold text-gray-700">Are you 18 years or older?</span>
                <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-orange-mid focus:ring-brand-orange-mid" />
              </label>
              <label class="group flex items-center justify-between p-4 rounded-2xl border-2 border-gray-50 bg-surface hover:border-brand-orange-mid/30 hover:bg-white transition-all cursor-pointer">
                <span class="text-sm font-semibold text-gray-700">Do you live in the Greater Montreal area?</span>
                <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-orange-mid focus:ring-brand-orange-mid" />
              </label>
              <label class="group flex items-center justify-between p-4 rounded-2xl border-2 border-gray-50 bg-surface hover:border-brand-orange-mid/30 hover:bg-white transition-all cursor-pointer">
                <span class="text-sm font-semibold text-gray-700">Have you been diagnosed with Type 1 or Type 2 Diabetes?</span>
                <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-orange-mid focus:ring-brand-orange-mid" />
              </label>

              <div class="pt-4">
                <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Your Email Address</label>
                <input type="email" placeholder="name@email.com" class="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-gray-50 focus:border-brand-orange-mid focus:bg-white focus:ring-0 transition-all outline-none text-sm" />
              </div>
              <button type="button" class="w-full py-5 rounded-2xl bg-brand-orange-mid text-white font-bold text-lg shadow-lg shadow-brand-orange-mid/30 hover:bg-brand-orange-deep hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 mt-4">
                Check My Eligibility
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </button>
            </form>

            <p class="mt-6 text-[11px] text-gray-400 text-center leading-relaxed">
              By clicking "Check My Eligibility", you agree to be contacted by our clinical team regarding research opportunities. Review our dedicated <a href={`${baseUrl}/privacy`} class="text-brand-orange-deep underline hover:text-brand-dark transition-colors">Privacy and Data Protection Policy</a>.
            </p>
          </div>
        </div>

        <div class="mt-8 flex justify-center items-center gap-6 opacity-30 grayscale pointer-events-none">
          <img src={`${baseUrl}/logos/jgh-logo.png`} alt="JGH" class="h-8" onerror="this.style.display='none'" />
          <img src={`${baseUrl}/logos/cqdm-logo.png`} alt="CQDM" class="h-6" onerror="this.style.display='none'" />
        </div>
      </div>
    </div>
  </main>
</Layout>

<div class="fixed top-0 inset-x-0 h-[600px] bg-gradient-to-br from-brand-green-bright/5 via-brand-teal/5 to-transparent -z-10"></div>

<label class="group flex items-center justify-between p-4 rounded-2xl border-2 border-gray-50 bg-surface hover:border-brand-green-bright/30 hover:bg-white transition-all cursor-pointer">
  <span class="text-sm font-semibold text-gray-700">Are you 18 years or older?</span>
  <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-green-bright focus:ring-brand-green-bright" />
</label>
<button type="button" class="w-full py-5 rounded-2xl bg-brand-green-bright text-white font-bold text-lg shadow-lg shadow-brand-green-bright/30 hover:bg-brand-green-mid hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 mt-4">
  Check My Eligibility
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
</button>

<style>
  @reference "../styles/global.css";
  label:focus-within {
    border-color: color-mix(in srgb, var(--color-brand-green-bright) 50%, transparent);
    @apply bg-white shadow-sm;
  }
</style>

```

### 🧩 File: `src/pages/researchers.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../layouts/Layout.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
const pageData = await getEntry('pages', 'researchers');
const { hero, stats } = pageData.data;
---
<Layout title="Data Access | BioPortal" navType="minimal" backText="Back to Home">
  <div class="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-br from-brand-blue-deep/10 via-brand-teal/5 to-transparent -z-10"></div>

  <main class="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">
    <header class="max-w-3xl mb-16 text-center mx-auto">
      <span class="text-brand-blue-deep font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
      <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">{hero.headline}</h1>
      <p class="text-xl text-gray-600 leading-relaxed">{hero.description}</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat: any) => (
        <div class="bg-white rounded-3xl p-8 border-t-4 border-brand-blue-deep shadow-xl shadow-gray-100/50">
            <h3 class="text-5xl font-black text-gray-900 mb-2 tracking-tighter">{stat.value}</h3>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>

    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-7">
        <div class="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-brand-blue-deep/5 border border-gray-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Request Data Access</h2>
          <p class="text-gray-500 mb-8">Inquire about specific cohorts or request access to the Bento exploration portal.</p>

          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Full Name</label>
                <input type="text" placeholder="Dr. Jane Smith" class="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-gray-50 focus:border-brand-blue-deep focus:bg-white outline-none transition-all text-sm" />
              </div>
              <div>
                <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Institutional Email</label>
                <input type="email" placeholder="jane.smith@mcgill.ca" class="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-gray-50 focus:border-brand-blue-deep focus:bg-white outline-none transition-all text-sm" />
              </div>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Research Interest</label>
              <select class="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-gray-50 focus:border-brand-blue-deep focus:bg-white outline-none transition-all text-sm appearance-none cursor-pointer">
                <option>Diabetes & Endocrinology</option>
                <option>Proteomics & Biomarkers</option>
                <option>Genomics & Rare Variants</option>
                <option>Other / Multi-Omics</option>
              </select>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Brief Project Overview</label>
              <textarea rows="3" placeholder="Describe your intended use of BioPortal data..." class="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-gray-50 focus:border-brand-blue-deep focus:bg-white outline-none transition-all text-sm resize-none"></textarea>
            </div>

            <button type="button" class="w-full py-5 rounded-2xl bg-brand-blue-deep text-white font-bold text-lg shadow-lg shadow-brand-blue-deep/20 hover:bg-brand-dark hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3">
              Submit Access Inquiry
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-6">
        <div class="bg-brand-dark rounded-[2rem] p-8 text-white shadow-xl">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Access Requirements
          </h3>
          <ul class="space-y-4 text-sm text-gray-300">
            <li class="flex items-start gap-3"><span class="text-brand-teal font-bold">01</span><span>Institutionally-approved REB/IRB documentation for your specific project.</span></li>
            <li class="flex items-start gap-3"><span class="text-brand-teal font-bold">02</span><span>Signed Data Transfer Agreement (DTA) or Material Transfer Agreement (MTA).</span></li>
            <li class="flex items-start gap-3"><span class="text-brand-teal font-bold">03</span><span>Adherence to our Open Science and attribution framework.</span></li>
          </ul>
        </div>

        <div class="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-soft">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">Our platform utilizes <strong>Bento v2</strong> for cohort discovery and <strong>C3G</strong> for secure high-performance genomic compute.</p>
          <div class="flex gap-2">
            <span class="px-3 py-1 rounded-full bg-brand-teal/10 text-brand-dark font-bold text-[10px] uppercase tracking-wider">Bento v2</span>
            <span class="px-3 py-1 rounded-full bg-brand-blue-mid/10 text-brand-dark font-bold text-[10px] uppercase tracking-wider">C3G Powered</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</Layout>

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
  <body class="flex flex-col min-h-screen">
    <Navbar type={navType} ctaMode={ctaMode} backLink={backLink} backText={backText} />
    
    <div class="flex-grow pt-20"> 
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
    <span class="bg-gradient-to-r from-brand-orange-deep via-brand-green-bright to-brand-blue-deep bg-clip-text text-transparent pb-2">{content.gradientText}</span>
  </h1>

  <p class="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
    {content.description}
  </p>

  <div class="flex flex-col sm:flex-row justify-center items-center gap-6 z-20">

    <div class="relative group/btn w-full sm:w-auto">
      <a href={`${baseUrl}/participants`} class="w-full sm:w-auto px-10 py-5 rounded-full bg-brand-green-bright hover:bg-brand-green-mid text-white font-bold text-lg shadow-xl shadow-brand-green-bright/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
        Join Study
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-4 bg-white border border-gray-100 text-gray-600 text-xs text-left leading-relaxed rounded-2xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
        Register your interest to safely contribute biospecimens and clinical data to our Montreal-based research cohorts.
      </div>
    </div>

    <div class="relative group/btn w-full sm:w-auto">
      <a href={`${baseUrl}/researchers`} class="w-full sm:w-auto px-10 py-5 rounded-full bg-white border-2 border-brand-blue-deep text-brand-blue-deep hover:bg-brand-blue-deep hover:text-white font-bold text-lg shadow-xl shadow-brand-blue-deep/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
        Request Data
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
      <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-4 bg-white border border-gray-100 text-gray-600 text-xs text-left leading-relaxed rounded-2xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
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

<nav
  class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300"
  data-cta-mode={ctaMode}
>
  <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">

    <a href={`${baseUrl}/`} class="flex items-center shrink-0">
      <img
        src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`}
        alt="BioPortal Logo"
        class="w-40 h-auto shrink-0 hover:-translate-y-0.5 transition-transform"
        onerror="this.style.display='none'"
      />
    </a>

    {type === 'main' ? (
      <>
        <div id="nav-cta-group" class={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 transition-all duration-500 ease-out ${ctaMode === 'scroll' ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>

          <div class="relative group/btn">
            <a href={`${baseUrl}/researchers`} class="text-xs font-bold text-brand-blue-deep hover:text-brand-dark transition-colors px-2 py-2">
              Request Data
            </a>
            <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-56 p-3 bg-white border border-gray-100 text-gray-500 text-[11px] leading-relaxed rounded-xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none">
              Explore de-identified datasets and request cohort materials for approved research.
            </div>
          </div>

          <div class="relative group/btn">
            <a href={`${baseUrl}/participants`} class="px-5 py-2.5 rounded-full bg-brand-green-bright text-white text-xs font-bold shadow-md shadow-brand-green-bright/20 hover:bg-brand-green-mid hover:-translate-y-0.5 transition-all">
              Join Study
            </a>
            <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-56 p-3 bg-white border border-gray-100 text-gray-500 text-[11px] leading-relaxed rounded-xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none">
              Contribute clinical data to advance Montreal-based genomic research.
            </div>
          </div>
        </div>

        <div class="hidden lg:flex items-center space-x-8 font-medium text-sm ml-auto">
          <a href={`${baseUrl}/#insights`} class="text-gray-500 hover:text-brand-dark transition-colors">Insights</a>
          <a href={`${baseUrl}/#team`} class="text-gray-500 hover:text-brand-dark transition-colors">Our Team</a>
          <a href={`${baseUrl}/privacy`} class="text-gray-500 hover:text-brand-dark transition-colors">Data Security</a>
        </div>
      </>
    ) : (
      <a href={`${baseUrl}${backLink}`} class="text-sm font-bold text-gray-400 hover:text-brand-dark transition-colors flex items-center gap-2 ml-auto">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        {backText}
      </a>
    )}
  </div>
</nav>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('nav[data-cta-mode="scroll"]');
    if (!nav) return;

    const navCtaGroup = nav.querySelector('#nav-cta-group');
    const handleScroll = () => {
      if (window.scrollY > 400) {
        navCtaGroup.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
        navCtaGroup.classList.add('opacity-100', 'translate-y-0');
      } else {
        navCtaGroup.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
        navCtaGroup.classList.remove('opacity-100', 'translate-y-0');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });
</script>

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

