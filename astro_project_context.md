# BioPortal Astro Architectural Context
Generated on: Wed 10 Jun 2026 10:49:48 AM EDT

---

## 📂 Project Directory Structure
```text
.
├── archive
│   ├── 17-byanca-liboni.yaml
│   └── 19-nadia-blostein.yaml
├── astro.config.mjs
├── astro_project_context.md
├── english_translation_dump.txt
├── fixcolors.sh
├── gather_context.sh
├── generate_team.sh
├── load_npm.sh
├── organize_assets.sh
├── package.json
├── package-lock.json
├── project_context.txt
├── README.html
├── README.md
├── src
│   ├── components
│   │   ├── explorer
│   │   │   ├── ExplorerGrid.astro
│   │   │   ├── ExplorerHeader.astro
│   │   │   └── ExplorerSidebar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── TrustBar.astro
│   ├── content
│   │   ├── f21-hind-lerhcha.yaml
│   │   ├── news
│   │   │   ├── en
│   │   │   │   └── roche-partnership.md
│   │   │   └── fr
│   │   │       └── roche-partnership.md
│   │   ├── pages
│   │   │   ├── en
│   │   │   │   ├── data.yaml
│   │   │   │   ├── global.yaml
│   │   │   │   ├── home.yaml
│   │   │   │   ├── news.yaml
│   │   │   │   ├── participants.yaml
│   │   │   │   └── privacy.yaml
│   │   │   └── fr
│   │   │       ├── data.yaml
│   │   │       ├── global.yaml
│   │   │       ├── home.yaml
│   │   │       ├── news.yaml
│   │   │       ├── participants.yaml
│   │   │       └── privacy.yaml
│   │   └── team
│   │       ├── en
│   │       │   ├── 01-brent-richards.yaml
│   │       │   ├── 02-vincent-mooser.yaml
│   │       │   ├── 03-jonathan-afilalo.yaml
│   │       │   ├── 04-tricia-peters.yaml
│   │       │   ├── 05-guillaume-butler.yaml
│   │       │   ├── 06-satoshi-yoshiji.yaml
│   │       │   ├── 07-tobias-erlanger.yaml
│   │       │   ├── 08-david-morrison.yaml
│   │       │   ├── 09-mariana-pico.yaml
│   │       │   ├── 10-issam-elkbaiche.yaml
│   │       │   ├── 11-darin-adra.yaml
│   │       │   ├── 12-mariana-jaime.yaml
│   │       │   ├── 13-corinne-pirici.yaml
│   │       │   ├── 14-mina-nikkhah.yaml
│   │       │   ├── 15-zaman-afrasiabi.yaml
│   │       │   ├── 16-cesar-peralta.yaml
│   │       │   ├── 18-jonafe-daguplo.yaml
│   │       │   ├── 20-jesse-islam.yaml
│   │       │   ├── 21-hind-lerhcha.yaml
│   │       │   └── 22-shirlyn-cabilin.yaml
│   │       └── fr
│   │           ├── 01-brent-richards.yaml
│   │           ├── 02-vincent-mooser.yaml
│   │           ├── 03-jonathan-afilalo.yaml
│   │           ├── 04-tricia-peters.yaml
│   │           ├── 05-guillaume-butler.yaml
│   │           ├── 06-satoshi-yoshiji.yaml
│   │           ├── 07-tobias-erlanger.yaml
│   │           ├── 08-david-morrison.yaml
│   │           ├── 09-mariana-pico.yaml
│   │           ├── 13-corinne-pirici.yaml
│   │           ├── 14-mina-nikkhah.yaml
│   │           ├── 15-zaman-afrasiabi.yaml
│   │           ├── 16-cesar-peralta.yaml
│   │           ├── 18-jonafe-daguplo.yaml
│   │           └── 20-jesse-islam.yaml
│   ├── content.config.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── one_off_scripts
│   │   └── convert_image_to_webp.R
│   ├── pages
│   │   └── [lang]
│   │       ├── data
│   │       │   └── explorer.astro
│   │       ├── data.astro
│   │       ├── index.astro
│   │       ├── news
│   │       │   ├── [id].astro
│   │       │   └── index.astro
│   │       ├── participants.astro
│   │       └── privacy.astro
│   ├── scripts
│   │   └── explorerEngine.ts
│   ├── styles
│   │   └── global.css
│   └── types.d.ts
├── tsconfig.json
├── write_french_translations.sh
└── yaml_gather_context.sh

23 directories, 88 files
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
    "chartjs-chart-treemap": "^3.1.0",
    "chartjs-chart-venn": "^4.3.7",
    "chartjs-plugin-datalabels": "^2.2.0",
    "embla-carousel": "^8.6.0",
    "embla-carousel-auto-scroll": "^8.6.0",
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
  // UPDATED: Looks inside nested language directories (e.g., pages/en/home.yaml)
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/pages" }),
  schema: z.object({
    id: z.string(),

    // --- SHARED / EXISTING PAGE FIELDS ---
    hero: z.any().optional(),
    trustBar: z.any().optional(),
    steps: z.any().optional(),
    benefit: z.any().optional(),

    landingMetrics: z.object({
      participantsLabel: z.string(),
      clinicalVariablesLabel: z.string(),
      proteomicsLabel: z.string(),
      biosamplesLabel: z.string(),
      fallbackValues: z.object({
        participants: z.string(),
        clinicalVariables: z.string(),
        proteomics: z.string(),
        biosamples: z.string()
      })
    }).optional(),

    // --- GLOBAL SITE CONFIG (Navbar & Footer at root level) ---
    navigation: z.object({
      logoAlt: z.string(),
      links: z.array(z.object({
        label: z.string(),
        href: z.string()
      })),
      ctaButtons: z.object({
        primary: z.object({ label: z.string(), href: z.string() }),
        secondary: z.object({ label: z.string(), href: z.string() }),
      })
    }).optional(),

    footer: z.object({
      title: z.string(),
      titlePunctuation: z.string(),
      subtitle: z.string(),
      privacyLinkText: z.string(),
      privacyLinkHref: z.string(),
      copyright: z.string(),
    }).optional(),

    // --- HOME PAGE SPECIFIC ---
    insights: z.object({
      eyebrow: z.string(),
      title: z.string(),
      readMoreText: z.string(),
      viewAllButtonText: z.string(),
      viewAllLink: z.string(),
      fallbackImageAlt: z.string(),
    }).optional(),

    teamSection: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      governingTitle: z.string(),
      recruitmentTitle: z.string(),
      spotlight: z.object({
        title: z.string(),
        description: z.string(),
      })
    }).optional(),

    // --- PRIVACY PAGE SPECIFIC ---
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

    // --- NEWS PAGES SPECIFIC ---
    seoTitle: z.string().optional(),
    readMoreText: z.string().optional(),
    backToNewsText: z.string().optional(),
    fallbackImageAlt: z.string().optional(),

    // --- DATA REQUEST & RECRUITMENT SPECIFIC ---
    dataRequest: z.object({
      pageTitle: z.string(),
      backText: z.string(),
      explorerCard: z.any(),
      accessRequirements: z.any(),
      infrastructure: z.any(),
      form: z.any()
    }).optional(),

    recruitmentData: z.object({
      pageTitle: z.string(),
      whyJoinTitle: z.string(),
      howItWorksTitle: z.string(),
      formCard: z.any()
    }).optional(),

    // --- DATA EXPLORER APP SPECIFIC ---
    explorer: z.object({
      pageTitle: z.string(),
      backLink: z.string(),
      backText: z.string(),
      header: z.object({
        totalPatientsLabel: z.string(),
      }),
      grid: z.object({
        noResultsText: z.string(),
      }),
      sidebar: z.object({
        title: z.string(),
        baseline: z.string(),
        searchPlaceholder: z.string(),
        tooltip: z.object({
          title: z.string(),
          description: z.string(),
          warning: z.string(),
        }),
        buttons: z.object({
          reset: z.string(),
          export: z.string(),
        }),
        tabs: z.object({
          filters: z.string(),
          charts: z.string(),
        }),
        visibility: z.object({
          title: z.string(),
          all: z.string(),
          none: z.string(),
        }),
        status: z.object({
          gateway: z.string(),
          syncing: z.string(),
        })
      })
    }).optional(),
  }),
});

const team = defineCollection({
  // UPDATED: Captures dynamic entries inside language folders (e.g., team/fr/01-brent.yaml)
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/team" }),
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
  // UPDATED: Tracks translated markdown posts (e.g., news/fr/roche-partnership.md)
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
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
### 🧩 File: `src/pages/[lang]/news/[id].astro`
```astro
---
import { getCollection, getEntry, render } from 'astro:content';
// UX FIX: Adjusted relative paths to 3 levels up since this file is now nested inside [...lang]/news/
import Layout from '../../../layouts/Layout.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function getStaticPaths() {
  const newsEntries = await getCollection('news');

  return newsEntries.map(post => {
    // Content file IDs look like 'en/roche-partnership' or 'fr/roche-partnership'
    const [langToken, ...slugParts] = post.id.split('/');
    const cleanId = slugParts.join('/');

    return {
      // With prefixDefaultLocale: false, default language paths pass undefined for the optional [...lang] parameter
      params: {
        lang: langToken === 'en' ? undefined : langToken,
        id: cleanId
      },
      props: {
        post,
        lang: langToken
      },
    };
  });
}

const { post, lang } = Astro.props;
const { Content } = await render(post);

const langPrefix = lang === 'en' ? '' : '/fr';

// Fetch the translated "Back to Insights" text from the pages/news configuration file dynamically
const newsPageData = await getEntry('pages', `${lang}/news`);
const backToNewsText = newsPageData?.data?.backToNewsText || (lang === 'fr' ? 'Retour aux actualités' : 'Back to Insights');
---
<Layout
  title={`${post.data.title} | BioPortal Insights`}
  navType="minimal"
  backLink={`${baseUrl}${langPrefix}/news`}
  backText={backToNewsText}
  lang={lang}
>
  <div class="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-brand-blue-deep/5 to-transparent -z-10"></div>

  <main class="max-w-3xl mx-auto px-6 pt-12 pb-24">
    <header class="mb-10 border-b border-gray-100 pb-10">
      <div class="flex items-center gap-4 mb-6">
        <span class="text-xs font-bold px-3 py-1 rounded-md bg-brand-blue-deep/10 text-brand-blue-deep uppercase tracking-widest">
          {post.data.tag}
        </span>
        <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">
          {post.data.date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
  /* UX FIX: Updated global references path routing to point cleanly 3 directories up */
  @reference "../../../styles/global.css";
  .article-content :global(h2) { @apply text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight; }
  .article-content :global(h3) { @apply text-2xl font-bold text-gray-900 mt-8 mb-4 tracking-tight; }
  .article-content :global(p) { @apply mb-6; }
  .article-content :global(a) { @apply text-brand-blue-deep font-semibold hover:text-brand-dark transition-colors underline underline-offset-2; }
  .article-content :global(ul) { @apply list-disc list-outside ml-6 mb-6 space-y-2; }
  .article-content :global(blockquote) { @apply border-l-4 border-brand-blue-deep pl-6 py-2 my-8 text-xl italic text-gray-500 bg-brand-blue-deep/5 rounded-r-2xl; }
  .article-content :global(strong) { @apply font-bold text-gray-900; }
</style>

```

### 🧩 File: `src/pages/[lang]/news/index.astro`
```astro
---
import { getCollection, getEntry } from 'astro:content';
// UX FIX: Adjusted relative path to 3 levels up since this file is now nested inside [...lang]/news/
import Layout from '../../../layouts/Layout.astro';

// 1. Map English to an undefined path token to keep it seamlessly serving at the root domain domain level
export function getStaticPaths() {
  return [
    { params: { lang: undefined } }, // English maps directly to /news
    { params: { lang: 'fr' } }        // French maps directly to /fr/news
  ];
}

// 2. Destructure parameters providing a safe fallback variable default
const { lang = 'en' } = Astro.params;
const langPrefix = lang === 'en' ? '' : '/fr';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

// 3. Fetch localized page schema settings dictionaries
const pageData = await getEntry('pages', `${lang}/news`);
const { seoTitle, tagline, headline, description, readMoreText } = pageData.data;

// 4. Load matching news articles filtering strictly by folder locale namespace prefixes
const allNews = await getCollection('news', ({ id }) => id.startsWith(`${lang}/`));
const sortedNews = allNews.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

// Clean filename slug parser utility
const getCleanSlug = (id: string) => id.split('/').pop()?.replace(/\.[^/.]+$/, "");
---
<Layout title={`${seoTitle} | BioPortal`} lang={lang}>
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
                {post.data.date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
              <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep">{post.data.tag}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-blue-deep transition-colors">{post.data.title}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">{post.data.excerpt}</p>

            <a href={`${baseUrl}${langPrefix}/news/${getCleanSlug(post.id)}/`} class="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
              {readMoreText || (lang === 'fr' ? "Lire l'article" : "Read Insight")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  </main>
</Layout>

```

### 🧩 File: `src/pages/[lang]/data/explorer.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../../../layouts/Layout.astro';
import ExplorerSidebar from '../../../components/explorer/ExplorerSidebar.astro';
import ExplorerHeader from '../../../components/explorer/ExplorerHeader.astro';
import ExplorerGrid from '../../../components/explorer/ExplorerGrid.astro';

// 1. Structural change: Pass undefined for English so it compiles without a URL prefix
export function getStaticPaths() {
  return [
    { params: { lang: undefined } }, // English maps to /data/explorer
    { params: { lang: 'fr' } }        // French maps to /fr/data/explorer
  ];
}

// 2. Destructure with a fallback assignment to 'en' when the path parameter is undefined
const { lang = 'en' } = Astro.params;
const langPrefix = lang === 'en' ? '' : '/fr';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

const dataPage = await getEntry('pages', `${lang}/data`);

const explorerContent = dataPage?.data?.explorer || {
  pageTitle: "Data Explorer",
  backLink: "/data",
  backText: "Back",
  header: { totalPatientsLabel: "Total Patients" },
  grid: { noResultsText: "No results found" },
  sidebar: {
    title: "Cohort Explorer",
    baseline: "Baseline Cohort",
    searchPlaceholder: "Search variables...",
    tooltip: { title: "Data Notice", description: "De-identified records.", warning: "Protected asset." },
    // UX FIX: Safely quoted the "export" keyword boundary to clear the parser compiler crash
    buttons: { reset: "Reset Filters", "export": "Export Cohort" },
    tabs: { filters: "Filters", charts: "Active Charts" },
    visibility: { title: "Chart Visibility", all: "Show All", none: "Hide All" },
    status: { gateway: "API Status", syncing: "Synchronizing" }
  }
};
---
<Layout
  title={explorerContent.pageTitle}
  navType="minimal"
  backLink={`${baseUrl}${langPrefix}${explorerContent.backLink}`}
  backText={explorerContent.backText}
  lang={lang}
>
  <div id="mobile-sidebar-overlay" class="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300 lg:hidden"></div>

  <div class="flex min-h-[calc(100vh-80px)] bg-surface font-sans relative">

    <ExplorerSidebar
      sidebarTitle={explorerContent.sidebar.title}
      tooltipTitle={explorerContent.sidebar.tooltip.title}
      tooltipDescription={explorerContent.sidebar.tooltip.description}
      tooltipWarning={explorerContent.sidebar.tooltip.warning}
      resetButtonText={explorerContent.sidebar.buttons.reset}
      exportButtonText={explorerContent.sidebar.buttons.export}
      searchPlaceholder={explorerContent.sidebar.searchPlaceholder}
      tabFiltersText={explorerContent.sidebar.tabs.filters}
      tabChartsText={explorerContent.sidebar.tabs.charts}
      baselineText={explorerContent.sidebar.baseline}
      visibilityTitle={explorerContent.sidebar.visibility.title}
      visibilityAllText={explorerContent.sidebar.visibility.all}
      visibilityNoneText={explorerContent.sidebar.visibility.none}
      statusGatewayText={explorerContent.sidebar.status.gateway}
      statusSyncingText={explorerContent.sidebar.status.syncing}
    />

    <main id="main-content-area" class="flex-1 p-6 lg:p-12 relative z-10 w-full overflow-x-hidden transition-all duration-500 origin-top">
      <div id="loading-overlay" class="absolute inset-0 z-50 bg-surface/80 backdrop-blur-md opacity-100 transition-all duration-700 ease-in-out"></div>
      <ExplorerHeader totalCountLabel={explorerContent.header.totalPatientsLabel} />
      <ExplorerGrid noResultsText={explorerContent.grid.noResultsText} />
    </main>
  </div>
</Layout>

<script src="../../../scripts/explorerEngine.ts"></script>

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

### 🧩 File: `src/pages/[lang]/data.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export function getStaticPaths() {
  return [
    { params: { lang: undefined } }, // English maps to root (/data)
    { params: { lang: 'fr' } }        // French maps to /fr/data
  ];
}

const { lang = 'en' } = Astro.params; // Default to 'en' when lang parameter is undefined
const langPrefix = lang === 'en' ? '' : '/fr';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');


const pageData = await getEntry('pages', `${lang}/data`);

const hero = pageData?.data?.hero || { tagline: 'Data', headline: 'BioPortal Datasets', description: 'Loading data...' };
const metrics = pageData?.data?.landingMetrics || {
  participantsLabel: "Total Participants",
  clinicalVariablesLabel: "Clinical Variables",
  proteomicsLabel: "Proteomic Profiles",
  biosamplesLabel: "Matched Biosamples",
  fallbackValues: {
    participants: "...",
    clinicalVariables: "...",
    proteomics: "...",
    biosamples: "..."
  }
};

// 🌟 FIX: Defensive boundaries to stop undefined property crashes if a YAML file is missing keys
const content = pageData?.data?.dataRequest || {
  pageTitle: "Datasets",
  backText: "Back",
  explorerCard: { tag: "App", title: "Explorer", description: "Explore datasets", buttonText: "Open Explorer" },
  accessRequirements: { title: "Requirements", items: [] },
  infrastructure: { title: "Infrastructure", description: "", tags: [] },
  form: { title: "Request Data", description: "", buttonText: "Submit", fields: { nameLabel: "Name", namePlaceholder: "", emailLabel: "Email", emailPlaceholder: "", interestLabel: "Interest", overviewLabel: "Overview", overviewPlaceholder: "" } }
};
---
<Layout title={content.pageTitle} navType="minimal" backText={content.backText} lang={lang}>
  <div class="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-br from-brand-blue-deep/10 via-brand-teal/5 to-transparent -z-10"></div>

  <main class="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">
    <header class="max-w-3xl mb-16 text-center mx-auto">
      <span class="text-brand-blue-deep font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
      <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">{hero.headline}</h1>
      <p class="text-xl text-gray-600 leading-relaxed">{hero.description}</p>
    </header>

    <div class="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-16 items-stretch">
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-blue-deep shadow-xl shadow-gray-100/50 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
            <h3 id="metric-participants" class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter transition-colors group-hover:text-brand-blue-deep h-12 lg:h-14 flex items-center">
              <div class="live-stat-loader flex items-center gap-1.5 pt-1">
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/40 rounded-full animate-bounce" style="animation-delay: -0.3s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/60 rounded-full animate-bounce" style="animation-delay: -0.15s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/90 rounded-full animate-bounce"></div>
              </div>
              <span class="live-stat-value hidden">{metrics.fallbackValues.participants}</span>
            </h3>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.participantsLabel}</p>
        </div>

        <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-blue-deep shadow-xl shadow-gray-100/50 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
            <h3 id="metric-variables" class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter transition-colors group-hover:text-brand-blue-deep h-12 lg:h-14 flex items-center">
              <div class="live-stat-loader flex items-center gap-1.5 pt-1">
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/40 rounded-full animate-bounce" style="animation-delay: -0.3s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/60 rounded-full animate-bounce" style="animation-delay: -0.15s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/90 rounded-full animate-bounce"></div>
              </div>
              <span class="live-stat-value hidden">{metrics.fallbackValues.clinicalVariables}</span>
            </h3>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.clinicalVariablesLabel}</p>
        </div>

        <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-blue-deep shadow-xl shadow-gray-100/50 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
            <h3 id="metric-proteomics" class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter transition-colors group-hover:text-brand-blue-deep h-12 lg:h-14 flex items-center">
              <div class="live-stat-loader flex items-center gap-1.5 pt-1">
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/40 rounded-full animate-bounce" style="animation-delay: -0.3s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/60 rounded-full animate-bounce" style="animation-delay: -0.15s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/90 rounded-full animate-bounce"></div>
              </div>
              <span class="live-stat-value hidden">{metrics.fallbackValues.proteomics}</span>
            </h3>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.proteomicsLabel}</p>
        </div>

        <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-blue-deep shadow-xl shadow-gray-100/50 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
            <h3 id="metric-biosamples" class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter transition-colors group-hover:text-brand-blue-deep h-12 lg:h-14 flex items-center">
              <div class="live-stat-loader flex items-center gap-1.5 pt-1">
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/40 rounded-full animate-bounce" style="animation-delay: -0.3s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/60 rounded-full animate-bounce" style="animation-delay: -0.15s"></div>
                <div class="w-2.5 h-2.5 bg-brand-blue-deep/90 rounded-full animate-bounce"></div>
              </div>
              <span class="live-stat-value hidden">{metrics.fallbackValues.biosamples}</span>
            </h3>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.biosamplesLabel}</p>
        </div>

      </div>

      <div class="lg:col-span-5 bp-frosted-gradient rounded-[2rem] p-10 border border-white/60 shadow-2xl shadow-brand-blue-deep/5 flex flex-col justify-between relative overflow-hidden group">
        <div class="relative z-10 mb-10">
          <span class="px-3 py-1.5 rounded-lg bg-brand-blue-deep/10 text-brand-blue-deep font-bold text-[10px] uppercase tracking-[0.15em] mb-6 inline-block">{content.explorerCard.tag}</span>
          <h2 class="text-4xl font-black tracking-tight text-gray-900 mb-4">{content.explorerCard.title}</h2>
          <p class="text-gray-600 text-sm leading-relaxed font-medium opacity-90">{content.explorerCard.description}</p>
        </div>

        <a href={`${baseUrl}${langPrefix}/data/explorer/`} class="relative z-10 w-full py-4 rounded-xl bg-brand-blue-deep text-white text-sm font-bold shadow-lg shadow-brand-blue-deep/20 hover:shadow-2xl hover:shadow-brand-blue-deep/40 hover:scale-[1.02] hover:bg-brand-dark transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group/btn border border-brand-blue-deep/50">
          {content.explorerCard.buttonText}
          <svg class="w-5 h-5 text-brand-teal group-hover/btn:text-white transform transition-all duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </a>
      </div>
    </div>

    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-5 space-y-6">

        <div class="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-soft">
          <h3 class="text-xl font-bold mb-5 flex items-center gap-3 text-gray-900">
            <span class="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </span>
            {content.accessRequirements.title}
          </h3>
          <ul class="space-y-4 text-sm text-gray-600 font-medium">
            {content.accessRequirements.items?.map((item: string, index: number) => (
              <li class="flex items-start gap-3"><span class="text-brand-teal font-black mt-0.5">0{index + 1}</span><span class="leading-relaxed">{item}</span></li>
            ))}
          </ul>
        </div>

        <div class="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-soft">
          <h3 class="text-xl font-bold text-gray-900 mb-4">{content.infrastructure.title}</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-6" set:html={content.infrastructure.description}></p>
          <div class="flex flex-wrap gap-2">
            {content.infrastructure.tags?.map((tag: string) => (
              <span class="px-3 py-1.5 rounded-lg bg-brand-blue-mid/10 text-brand-dark font-bold text-[10px] uppercase tracking-widest">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div class="lg:col-span-7">
        <div class="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-brand-blue-deep/5 border border-gray-100 h-full">
          <h2 class="text-3xl font-black text-brand-dark mb-2">{content.form.title}</h2>
          <p class="text-gray-500 mb-8 text-sm leading-relaxed font-medium">{content.form.description}</p>

          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">{content.form.fields?.nameLabel}</label>
                <input type="text" placeholder={content.form.fields?.namePlaceholder} class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium shadow-inner" />
              </div>
              <div>
                <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">{content.form.fields?.emailLabel}</label>
                <input type="email" placeholder={content.form.fields?.emailPlaceholder} class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium shadow-inner" />
              </div>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">{content.form.fields?.interestLabel}</label>
              <select class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium appearance-none cursor-pointer shadow-inner">
                <option>Diabetes & Endocrinology</option>
                <option>Proteomics & Biomarkers</option>
                <option>Genomics & Rare Variants</option>
                <option>Other / Multi-Omics</option>
              </select>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">{content.form.fields?.overviewLabel}</label>
              <textarea rows="4" placeholder={content.form.fields?.overviewPlaceholder} class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-blue-deep focus:bg-white focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium resize-none shadow-inner"></textarea>
            </div>

            <button type="button" class="w-full py-4 rounded-xl bg-brand-blue-deep text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-brand-blue-deep/20 hover:bg-brand-dark hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 cursor-pointer mt-4">
              {content.form.buttonText}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</Layout>

<script>
  const API_GATEWAY = "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats";
  const METADATA_GATEWAY = "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats?type=metadata";

  async function syncLandingMetrics() {
    try {
      const [statsRes, metaRes] = await Promise.all([
        fetch(`${API_GATEWAY}?filter=baseline&_cb=${new Date().getTime()}`),
        fetch(`${METADATA_GATEWAY}&_cb=${new Date().getTime()}`)
      ]);

      if (!statsRes.ok || !metaRes.ok) throw new Error("API failed");

      const statsArray = await statsRes.json();
      const metaArray = await metaRes.json();

      const sexStat = statsArray.find((s: any) => s.chart_id === 'sex');
      const liveParticipants = sexStat?.data.reduce((acc: number, curr: any) => acc + (parseInt(curr.count) || 0), 0) || 0;

      const liveVariables = metaArray.length || 0;

      const proteomicStat = statsArray.find((s: any) => s.chart_id === 'n_proteomics');
      const liveProteomics = proteomicStat?.data
        .filter((d: any) => d.category !== 'No')
        .reduce((acc: number, curr: any) => acc + (parseInt(curr.count) || 0), 0) || 0;

      const sampleStat = statsArray.find((s: any) => s.chart_id === 'sample_type');
      const liveBiosamples = sampleStat?.data
        .filter((d: any) => d.category !== 'None')
        .reduce((acc: number, curr: any) => acc + (parseInt(curr.count) || 0), 0) || 0;

      const docLang = document.documentElement.lang || 'en';
      const targetLocale = docLang === 'fr' ? 'fr-FR' : 'en-US';

      const updateDom = (id: string, value: number) => {
        const container = document.getElementById(`metric-${id}`);
        if (container && value > 0) {
          const loader = container.querySelector('.live-stat-loader') as HTMLElement;
          const valueText = container.querySelector('.live-stat-value') as HTMLElement;

          if (loader) loader.style.display = 'none';
          if (valueText) {
            valueText.innerHTML = value.toLocaleString(targetLocale);
            valueText.style.display = 'inline';
            valueText.classList.remove('hidden');
          }
        }
      };

      updateDom('participants', liveParticipants);
      updateDom('variables', liveVariables);
      updateDom('proteomics', liveProteomics);
      updateDom('biosamples', liveBiosamples);

    } catch (err) {
      console.warn("API metrics synchronization skipped, showing static defaults.");
      document.querySelectorAll('.live-stat-loader').forEach(l => (l as HTMLElement).style.display = 'none');
      document.querySelectorAll('.live-stat-value').forEach(v => {
        (v as HTMLElement).style.display = 'inline';
        v.classList.remove('hidden');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncLandingMetrics);
  } else {
    syncLandingMetrics();
  }
</script>

```

### 🧩 File: `src/pages/[lang]/index.astro`
```astro
---
import { getCollection, getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import Hero from '../../components/Hero.astro';
import TrustBar from '../../components/TrustBar.astro';

export function getStaticPaths() {
  return [
    { params: { lang: undefined } }, // English maps to root (/)
    { params: { lang: 'fr' } }        // French maps to /fr
  ];
}

const { lang = 'en' } = Astro.params;
const langPrefix = lang === 'en' ? '' : '/fr';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');


// 2. Fetch the dynamically correct home data dictionary
const homeData = await getEntry('pages', `${lang}/home`);

// 3. Filter collections to strictly pull the active language's documents
const allTeam = await getCollection('team', ({ id }) => id.startsWith(`${lang}/`));
const sortedTeam = allTeam.sort((a, b) => a.data.order - b.data.order);

const allNews = await getCollection('news', ({ id }) => id.startsWith(`${lang}/`));
const latestNews = allNews.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, 3);

const { insights, teamSection } = homeData.data;

// Utility to cleanly extract just the filename slug from the new nested ID structure
const getCleanSlug = (id: string) => id.split('/').pop()?.replace(/\.[^/.]+$/, "");
---
<Layout title={homeData.data.seoTitle || "BioPortal"} ctaMode="scroll" lang={lang}>
  <main class="relative">

    <Hero content={homeData.data.hero} lang={lang} />

    <TrustBar content={homeData.data.trustBar} />

    <section id="insights" class="pt-2 pb-12 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div class="mb-6 flex justify-between items-end">
        <div>
          <span class="text-brand-blue-mid font-bold tracking-widest uppercase text-xs mb-2 block">{insights.eyebrow}</span>
          <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight">{insights.title}</h2>
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
                  <img src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`} alt={insights.fallbackImageAlt} class="w-32 h-auto opacity-30 grayscale" onerror="this.style.display='none'" />
                </div>
              )}
            </div>

            <div class="p-8 flex flex-col flex-grow">
              <div class="flex justify-between items-start mb-6">
                <span class="text-[10px] font-bold text-gray-400 uppercase">{post.data.date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep">{post.data.tag}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-blue-deep transition-colors">{post.data.title}</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">{post.data.excerpt}</p>

              <a href={`${baseUrl}${langPrefix}/news/${getCleanSlug(post.id)}/`} class="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                {insights.readMoreText} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div class="mt-10 text-center">
        <a href={`${baseUrl}${langPrefix}${insights.viewAllLink}`} class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface border-2 border-gray-100 text-brand-dark font-bold hover:border-brand-blue-deep hover:text-brand-blue-deep transition-colors shadow-sm cursor-pointer">
          {insights.viewAllButtonText}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </section>

    <section id="team" class="py-12 px-6 max-w-7xl mx-auto border-t border-gray-100 bg-surface/30 scroll-mt-20">
      <div class="mb-12">
        <span class="text-brand-blue-mid font-bold tracking-widest uppercase text-xs mb-3 block">{teamSection.eyebrow}</span>
        <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">{teamSection.title}</h2>
        <p class="text-lg text-gray-500 max-w-2xl">{teamSection.description}</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 relative items-start">
        <div class="lg:w-7/12 w-full space-y-12">

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200" data-group="governing">{teamSection.governingTitle}</h3>
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
            <h3 class="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200" data-group="recruitment">{teamSection.recruitmentTitle}</h3>
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
              <h3 class="text-2xl font-black text-brand-dark mb-3 tracking-tight">{teamSection.spotlight.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed font-medium">
                {teamSection.spotlight.description}
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
        // --- DESKTOP HOVER LOGIC ---
        card.addEventListener('mouseenter', () => {
          if (window.innerWidth < 1024) return;
          if (currentDisplayedCard === card) return;

          activeHoverTarget = card;
          const name = card.querySelector('.member-name')?.textContent || '';
          const role = card.querySelector('.member-role')?.textContent || '';
          const bio = card.querySelector('.member-bio')?.textContent || '';
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

        // --- MOBILE TOGGLE LOGIC ---
        card.addEventListener('click', () => {
          if (window.innerWidth >= 1024) return;
          const mobileContainer = card.querySelector('.mobile-bio-container') as HTMLElement;
          if (!mobileContainer) return;

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

### 🧩 File: `src/pages/[lang]/participants.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import TrustBar from '../../components/TrustBar.astro';

export function getStaticPaths() {
  return [
    { params: { lang: undefined } }, // English maps to root (/participants)
    { params: { lang: 'fr' } }        // French maps to /fr/participants
  ];
}

const { lang = 'en' } = Astro.params;
const langPrefix = lang === 'en' ? '' : '/fr';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');


// 2. Query localized data files dynamically based on active locale context parameters
const pageData = await getEntry('pages', `${lang}/participants`);
const homeData = await getEntry('pages', `${lang}/home`);

// Establish dynamic text structure references with secure fallbacks
const hero = pageData?.data?.hero || {
  tagline: "Participant Portal",
  headline: "Advance Medicine Through",
  gradientText: "Genetic Insight",
  description: "Safely contribute to groundbreaking healthcare insights right here in Montreal."
};
const steps = pageData?.data?.steps || [];
const content = pageData?.data?.recruitmentData || {
  pageTitle: "Join Study",
  whyJoinTitle: "Why Join",
  howItWorksTitle: "How It Works",
  formCard: { questions: [] }
};
---
<Layout title={content.pageTitle} navType="minimal" lang={lang}>
  <div class="fixed top-0 inset-x-0 h-[600px] bg-gradient-to-br from-brand-green-bright/5 via-brand-teal/5 to-transparent -z-10"></div>

  <main class="relative z-10 -mt-16 pt-0">
    <header class="pt-28 pb-12 px-6 max-w-5xl mx-auto text-center">
      <span class="text-brand-green-bright font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
      <h1 class="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
        {hero.headline} <br/>
        <span class="bg-gradient-to-r from-brand-green-bright to-brand-teal bg-clip-text text-transparent pb-2">{hero.gradientText}</span>
      </h1>
      <p class="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{hero.description}</p>
    </header>

    {homeData?.data?.trustBar && <TrustBar content={homeData.data.trustBar} />}

    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        <div class="lg:w-7/12 space-y-16">

          <div>
            <h3 class="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-8">{content.whyJoinTitle}</h3>
          </div>

          <div class="pt-8 border-t border-gray-100">
            <h3 class="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-8">{content.howItWorksTitle}</h3>
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
              <h3 class="text-2xl font-black text-brand-dark mb-2 tracking-tight">{content.formCard.title}</h3>
              <p class="text-gray-500 mb-8 text-sm font-medium">{content.formCard.description}</p>

              <form class="space-y-4">
                {content.formCard.questions.map((question: string) => (
                  <label class="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-surface/50 hover:border-brand-green-bright/50 hover:bg-white transition-all cursor-pointer shadow-sm">
                    <span class="text-sm font-bold text-gray-700 pr-2">{question}</span>
                    <input type="checkbox" class="w-5 h-5 rounded border-gray-300 text-brand-green-bright focus:ring-brand-green-bright cursor-pointer shrink-0" />
                  </label>
                ))}

                <div class="pt-4">
                  <label class="block text-[10px] uppercase tracking-widest font-black text-gray-400 mb-2 ml-1">{content.formCard.emailLabel}</label>
                  <input type="email" placeholder={content.formCard.emailPlaceholder} class="w-full px-5 py-4 rounded-xl bg-surface border border-gray-200 focus:border-brand-green-bright focus:bg-white focus:ring-2 focus:ring-brand-green-bright/20 transition-all outline-none text-sm font-medium shadow-inner" />
                </div>

                <button type="button" class="w-full py-4 rounded-xl bg-brand-dark text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-brand-dark/20 hover:bg-gray-900 hover:shadow-2xl hover:shadow-brand-dark/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 mt-6 cursor-pointer group/btn">
                  {content.formCard.buttonText}
                  <svg class="w-4 h-4 text-brand-green-bright group-hover/btn:text-white transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </form>

              <p class="mt-6 text-[11px] text-gray-400 text-center leading-relaxed font-medium">
                {content.formCard.disclaimer} <a href={`${baseUrl}${langPrefix}/privacy`} class="text-brand-green-bright underline hover:text-brand-dark transition-colors font-bold">{content.formCard.privacyLinkText}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</Layout>

```

### 🧩 File: `src/pages/[lang]/privacy.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export function getStaticPaths() {
  return [
    { params: { lang: undefined } }, // English maps to root (/privacy)
    { params: { lang: 'fr' } }        // French maps to /fr/privacy
  ];
}

const { lang = 'en' } = Astro.params;
const langPrefix = lang === 'en' ? '' : '/fr';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');


// 2. Fetch data dynamically based on the current locale parameter
const pageData = await getEntry('pages', `${lang}/privacy`);
const { tagline, headline, description, safeguardsTitle, safeguards, footerBox } = pageData.data;
---
<Layout title={`${headline} | BioPortal`} navType="minimal" lang={lang}>
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
import { getEntry } from 'astro:content';

const {
  title,
  lang = 'en', // 1. Catch the language prop (defaults to 'en')
  navType = 'main',
  ctaMode = 'visible',
  backLink = '/',
  backText = 'Back',
  hideFooter = false
} = Astro.props;

// 2. Fetch data dynamically based on the active locale (e.g., 'en/global' or 'fr/global')
const globalData = await getEntry('pages', `${lang}/global`);

const navigation = globalData?.data?.navigation;
const footer = globalData?.data?.footer;
---
<!doctype html>
<html lang={lang}> <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body class="flex flex-col min-h-screen bg-surface">
    {navigation && (
      <Navbar
        type={navType}
        ctaMode={ctaMode}
        backLink={backLink}
        backText={backText}
        navData={navigation}
        lang={lang} />
    )}

    <div class="flex-grow pt-20">
      <slot />
    </div>

    {!hideFooter && footer && (
      <Footer
        footerData={footer}
        lang={lang} />
    )}
  </body>
</html>

```

### 🧩 File: `src/components/Hero.astro`
```astro
---
const {
  content,
  lang = 'en' // 1. Catch the active language context parameter from index pages
} = Astro.props;

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

// 2. Compute language path prefixes
const langPrefix = lang === 'en' ? '' : '/fr';

// 3. Localized translation mappings for hardcoded interface items
const labels = lang === 'fr' ? {
  joinText: "Rejoindre l'étude",
  joinTooltip: "Inscrivez-vous pour contribuer en toute sécurité à nos cohortes de recherche basées à Montréal en fournissant des échantillons biologiques et des données cliniques.",
  requestText: "Demander des données",
  requestTooltip: "Accédez à notre portail sécurisé pour explorer les ensembles de données anonymisés et demander du matériel biologique pour vos recherches."
} : {
  joinText: "Join Study",
  joinTooltip: "Register your interest to safely contribute biospecimens and clinical data to our Montreal-based research cohorts.",
  requestText: "Request Data",
  requestTooltip: "Access our secure portal to explore de-identified datasets and request biological materials for your research."
};
---
<header class="pt-12 pb-6 px-6 max-w-5xl mx-auto text-center relative z-10 flex flex-col justify-center min-h-[50vh] max-h-[680px]">

  <div class="space-y-6">
    <h1 class="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-4">
      {content.headline} <br/>
      <span class="bg-gradient-to-r from-brand-blue-deep to-brand-teal bg-clip-text text-transparent pb-2">{content.gradientText}</span>
    </h1>

    <p class="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
      {content.description}
    </p>

    <div id="hero-button-group" class="flex flex-col sm:flex-row justify-center items-center gap-6 z-20">

      <div class="relative group/tooltip w-full sm:w-auto">
        <a
          href={`${baseUrl}${langPrefix}/participants`}
          class="w-full sm:w-64 h-16 rounded-full bg-brand-green-bright text-white font-extrabold text-lg shadow-xl shadow-brand-green-bright/30 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-2xl hover:shadow-brand-green-bright/40 flex items-center justify-center gap-3 cursor-pointer select-none group"
        >
          {labels.joinText}
          <svg class="w-5 h-5 shrink-0 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
        <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-4 bg-white border border-gray-100 text-gray-600 text-xs text-left leading-relaxed rounded-2xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
          {labels.joinTooltip}
        </div>
      </div>

      <div class="relative group/tooltip w-full sm:w-auto">
        <a
          href={`${baseUrl}${langPrefix}/data`}
          class="w-full sm:w-64 h-16 rounded-full bg-brand-blue-deep text-white font-extrabold text-lg shadow-xl shadow-brand-blue-deep/30 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-2xl hover:shadow-brand-blue-deep/40 flex items-center justify-center gap-3 cursor-pointer select-none group"
        >
          {labels.requestText}
          <svg class="w-5 h-5 shrink-0 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
        <div class="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-4 bg-white border border-gray-100 text-gray-600 text-xs text-left leading-relaxed rounded-2xl shadow-xl shadow-brand-dark/10 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
          {labels.requestTooltip}
        </div>
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

// Tripling ensures there is always enough content off-screen for Embla to seamlessly loop
const triplePartners = [...content.partners, ...content.partners, ...content.partners];
---

<section class="border-y border-gray-100 bg-white/50 py-8 mb-12 overflow-hidden">
  <div class="max-w-6xl mx-auto text-center">
    <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 px-6">{content.label}</p>

    <div class="embla trustbar-viewport marquee-mask relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none mb-6">

      <div class="embla__container flex touch-pan-y py-2 px-4">

        {triplePartners.map((partner: any) => (
          <div class="embla__slide flex-[0_0_auto] min-w-0 flex items-center justify-center mr-16 md:mr-24">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              class="trustbar-link hover:scale-105 transition-transform duration-300 block"
              title={partner.name}
              draggable="false"
            >
              {partner.logo ? (
                <img
                  src={`${baseUrl}${partner.logo}`}
                  alt={partner.name}
                  class="h-9 md:h-11 w-auto object-contain pointer-events-none"
                  style={partner.scale ? `transform: scale(${partner.scale});` : ''}
                  onerror="this.style.display='none'"
                  draggable="false"
                />
              ) : (
                <span class="text-base font-black text-gray-800 tracking-tighter whitespace-nowrap pointer-events-none">
                  {partner.name}
                </span>
              )}
            </a>
          </div>
        ))}

      </div>
    </div>

    {content.acknowledgments && (
      <div class="max-w-3xl mx-auto pt-4 px-6 border-t border-gray-100/60">
        <p class="text-xs md:text-sm text-gray-400 leading-relaxed italic font-medium">
          {content.acknowledgments}
        </p>
      </div>
    )}
  </div>
</section>

<script>
  import EmblaCarousel from 'embla-carousel';
  import AutoScroll from 'embla-carousel-auto-scroll';

  // Initialize on client load
  const viewports = document.querySelectorAll('.trustbar-viewport');

  viewports.forEach((viewportNode) => {
    const emblaApi = EmblaCarousel(
      viewportNode as HTMLElement,
      {
        loop: true,
        dragFree: true // Enables the fluid, momentum-based throwing/dragging
      },
      [
        AutoScroll({
          playOnInit: true,
          speed: 1, // Adjust this to change the cruising speed
          stopOnMouseEnter: true, // Flawless pausing on hover
          stopOnInteraction: false // Crucial: Resumes auto-scrolling after a user lets go of a drag
        })
      ]
    );
  });
</script>

<style>
  /* Keeps the beautiful side fade transitions */
  .marquee-mask {
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
</style>

```

### 🧩 File: `src/components/Footer.astro`
```astro
---
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

const {
  footerData,
  lang = 'en' // 1. Catch the active language context token
} = Astro.props;

// 2. Establish language-aware route pathing
const langPrefix = lang === 'en' ? '' : '/fr';
---
<footer class="bg-brand-dark text-white py-20 px-6 text-center mt-auto">
  <div class="text-2xl font-bold mb-2 tracking-tight">
    {footerData.title}<span class="text-brand-blue-deep">{footerData.titlePunctuation}</span>
  </div>
  <p class="text-gray-400 text-sm mb-6">{footerData.subtitle}</p>

  <div class="mb-12">
    <a href={`${baseUrl}${langPrefix}${footerData.privacyLinkHref}`} class="text-xs text-gray-400 hover:text-white underline transition-colors">
      {footerData.privacyLinkText}
    </a>
  </div>

  <div class="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
    {footerData.copyright}
  </div>
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
  backText = 'Back',
  navData,
  lang = 'en' // 1. Catch the active language token from the parent layout
} = Astro.props;

// 2. Establish context-aware link path modifiers
const langPrefix = lang === 'en' ? '' : '/fr';

// 3. Compute the reverse language path pairing for the switcher link
const currentPathname = Astro.url.pathname;
const toggleLang = lang === 'en' ? 'fr' : 'en';

const relativePath = currentPathname.startsWith(baseUrl)
  ? currentPathname.slice(baseUrl.length)
  : currentPathname;

const cleanRootPath = relativePath.replace(/^\/fr(\/|$)/, '/');

const switchTargetUrl = toggleLang === 'fr'
  ? `${baseUrl}/fr${cleanRootPath === '/' ? '' : cleanRootPath}`
  : `${baseUrl}${cleanRootPath}`;
---
<nav class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300" data-cta-mode={ctaMode}>
  <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">

    <a href={`${baseUrl}${langPrefix}/`} class="flex items-center shrink-0 z-50 h-fit max-h-16 py-2 outline-none">
      <img
        src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`}
        alt={navData.logoAlt}
        class="h-10 md:h-11 w-auto shrink-0 hover:-translate-y-0.5 transition-transform object-contain"
        onerror="this.style.display='none'"
      />
    </a>

    {type === 'main' ? (
      <>
        <div id="nav-cta-group" class={`absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-4 transition-all duration-500 ease-out ${ctaMode === 'scroll' ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <a href={`${baseUrl}${langPrefix}${navData.ctaButtons.primary.href}`} class="px-5 py-2 rounded-full border-2 border-brand-green-bright text-brand-green-bright text-xs font-bold hover:bg-brand-green-bright hover:text-white transition-all bg-white">
            {navData.ctaButtons.primary.label}
          </a>
          <a href={`${baseUrl}${langPrefix}${navData.ctaButtons.secondary.href}`} class="px-5 py-2 rounded-full border-2 border-brand-blue-deep text-brand-blue-deep text-xs font-bold hover:bg-brand-blue-deep hover:text-white transition-all bg-white">
            {navData.ctaButtons.secondary.label}
          </a>
        </div>

        <div class="hidden lg:flex items-center space-x-8 font-medium text-sm ml-auto">
          {navData.links.map((link: any) => (
            <a href={`${baseUrl}${langPrefix}${link.href}`} class="text-gray-500 hover:text-brand-dark transition-colors">{link.label}</a>
          ))}

          <a
            href={switchTargetUrl}
            class="text-[11px] font-black tracking-wider text-brand-dark border-2 border-gray-100 px-3 py-1.5 rounded-full bg-white shadow-sm hover:border-brand-blue-deep hover:text-brand-blue-deep transition-all uppercase select-none"
          >
            {toggleLang}
          </a>
        </div>

        <button id="mobile-menu-toggle" class="lg:hidden text-brand-dark p-2 -mr-2 focus:outline-none z-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

        <div id="mobile-menu-panel" class="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl hidden flex-col px-6 py-8 space-y-6 lg:hidden">
          {navData.links.map((link: any) => (
            <a href={`${baseUrl}${langPrefix}${link.href}`} class="mobile-link text-brand-dark font-extrabold text-xl">{link.label}</a>
          ))}

          <div class="flex items-center justify-between pt-2">
            <span class="text-xs uppercase tracking-widest font-bold text-gray-400">Language / Langue</span>
            <a
              href={switchTargetUrl}
              class="text-xs font-black tracking-widest text-brand-blue-deep border border-brand-blue-deep/20 px-4 py-2 rounded-xl bg-brand-blue-deep/5 uppercase"
            >
              Voir en {toggleLang}
            </a>
          </div>

          <hr class="border-gray-100" />
          <div class="flex flex-col gap-3">
            <a href={`${baseUrl}${langPrefix}${navData.ctaButtons.primary.href}`} class="w-full text-center py-4 rounded-xl bg-brand-green-bright text-white font-bold shadow-md shadow-brand-green-bright/20">{navData.ctaButtons.primary.label}</a>
            <a href={`${baseUrl}${langPrefix}${navData.ctaButtons.secondary.href}`} class="w-full text-center py-4 rounded-xl bg-brand-blue-deep text-white font-bold shadow-md shadow-brand-blue-deep/20">{navData.ctaButtons.secondary.label}</a>
          </div>
        </div>
      </>
    ) : (
      <a href={`${baseUrl}${langPrefix}${backLink}`} class="text-sm font-bold text-gray-400 hover:text-brand-dark transition-colors flex items-center gap-2 ml-auto z-50">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        {backText}
      </a>
    )}
  </div>
</nav>

<script>
  document.addEventListener("DOMContentLoaded", () => {
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

    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobilePanel = document.getElementById('mobile-menu-panel');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileToggle && mobilePanel) {
      mobileToggle.addEventListener('click', () => {
        mobilePanel.classList.toggle('hidden');
        mobilePanel.classList.toggle('flex');
      });

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
interface Props {
  sidebarTitle: string;
  tooltipTitle: string;
  tooltipDescription: string;
  tooltipWarning: string;
  resetButtonText: string;
  exportButtonText: string;
  searchPlaceholder: string;
  tabFiltersText: string;
  tabChartsText: string;
  baselineText: string;
  visibilityTitle: string;
  visibilityAllText: string;
  visibilityNoneText: string;
  statusGatewayText: string;
  statusSyncingText: string;
}

const {
  sidebarTitle,
  tooltipTitle,
  tooltipDescription,
  tooltipWarning,
  resetButtonText,
  exportButtonText,
  searchPlaceholder,
  tabFiltersText,
  tabChartsText,
  baselineText,
  visibilityTitle,
  visibilityAllText,
  visibilityNoneText,
  statusGatewayText,
  statusSyncingText
} = Astro.props;
---
<aside id="explorer-sidebar" class="w-[300px] sm:w-[360px] bg-white border-r border-gray-200 flex-shrink-0 fixed lg:sticky top-20 h-[calc(100vh-80px)] flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.05)] z-40 transition-transform duration-300 -translate-x-full lg:translate-x-0">

  <div class="p-6 border-b border-gray-100 bg-surface/30 flex justify-center items-center shrink-0 relative min-h-[73px] group/info">

    <div class="flex items-center gap-2 cursor-help select-none bg-gray-50 hover:bg-brand-blue-deep/10 px-3 py-1 rounded-full transition-colors" tabindex="0">
      <span class="font-bold text-brand-dark tracking-tight">{sidebarTitle}</span>
      <svg class="w-4 h-4 text-brand-blue-deep shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063 1.06l-.041.02a.75.75 0 01-1.063-1.06zm0 4.5h.008v.008h-.008v-.008zm-9-3.75a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    </div>

    <div class="absolute right-6 top-1/2 -translate-y-1/2 lg:hidden">
      <button id="mobile-close-sidebar" onclick="toggleMobileSidebar()" class="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-brand-dark transition-colors shadow-sm cursor-pointer">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div class="absolute top-[calc(100%-8px)] left-4 right-4 z-50 bg-white border border-gray-100 rounded-2xl shadow-2xl p-5 transition-all duration-300 transform origin-top opacity-0 scale-95 pointer-events-none group-hover/info:opacity-100 group-hover/info:scale-100 group-hover/info:pointer-events-auto focus-within:opacity-100 focus-within:scale-100 focus-within:pointer-events-auto">
      <div class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45"></div>
      <p class="text-xs text-gray-600 leading-relaxed font-medium mb-2">
        <strong>{tooltipTitle}:</strong> {tooltipDescription}
      </p>
      <p class="text-[11px] text-gray-400 leading-normal border-t border-gray-50 pt-2">
        {tooltipWarning}
      </p>
    </div>
  </div>

  <div class="p-5 lg:p-6 border-b border-gray-100 bg-surface/30 shrink-0">
    <div class="flex gap-3 mb-5">
      <button onclick="changeFilter('baseline')" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:border-brand-blue-deep hover:text-brand-blue-deep transition-all shadow-sm cursor-pointer group">
        <svg class="w-4 h-4 text-gray-400 group-hover:text-brand-blue-deep transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
        {resetButtonText}
      </button>
      <button onclick="exportCohortCSV()" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-brand-dark border border-brand-dark text-white rounded-xl text-xs font-bold hover:bg-brand-blue-deep hover:border-brand-blue-deep transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        {exportButtonText}
      </button>
    </div>

    <div class="relative w-full">
      <input type="text" id="global-search" placeholder={searchPlaceholder}
             class="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-brand-blue-deep focus:ring-2 focus:ring-brand-blue-deep/20 outline-none transition-all text-sm font-medium shadow-sm placeholder:text-gray-400" />
      <svg class="w-4 h-4 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
  </div>

  <div class="flex p-2 bg-surface/30 border-b border-gray-100 shrink-0">
    <div class="flex w-full bg-gray-100/80 p-1 rounded-xl">
      <button onclick="switchTab('filters')" id="tab-btn-filters" class="flex-1 py-2 text-xs font-bold tracking-widest text-brand-dark bg-white rounded-lg shadow-sm transition-all cursor-pointer flex justify-center items-center gap-2">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
        {tabFiltersText}
      </button>
      <button onclick="switchTab('charts')" id="tab-btn-charts" class="flex-1 py-2 text-xs font-bold tracking-widest text-gray-500 hover:text-brand-dark rounded-lg transition-all cursor-pointer flex justify-center items-center gap-2">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        {tabChartsText}
      </button>
    </div>
  </div>

  <div class="flex-1 overflow-y-auto custom-scrollbar p-6">

    <div id="tab-content-filters" class="block">
      <button id="btn-baseline" onclick="changeFilter('baseline')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-brand-blue-deep/5 transition-colors text-[14px] flex justify-between items-center filter-active border border-transparent mb-2 cursor-pointer group">
        <div class="flex items-center gap-3">
          <span class="font-bold">{baselineText}</span>
        </div>
        <span id="size-baseline" class="text-[11px] bg-white px-2 py-0.5 rounded text-brand-blue-deep border border-gray-100 font-black shadow-sm">...</span>
      </button>

      <div id="filter-list" class="space-y-1 filter-search-target"></div>
    </div>

    <div id="tab-content-charts" class="hidden">
      <div class="flex gap-2 mb-4 pb-4 border-b border-gray-100 justify-between items-center px-1">
        <span class="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{visibilityTitle}</span>
        <div class="space-x-3 bg-gray-50 px-2 py-1 rounded-lg">
          <button onclick="toggleAllCharts(true)" class="text-[10px] font-bold text-brand-blue-deep hover:text-brand-dark transition-colors cursor-pointer">{visibilityAllText}</button>
          <span class="text-gray-300">|</span>
          <button onclick="toggleAllCharts(false)" class="text-[10px] font-bold text-gray-400 hover:text-brand-dark transition-colors cursor-pointer">{visibilityNoneText}</button>
        </div>
      </div>
      <div id="chart-toggles" class="space-y-2 filter-search-target"></div>
    </div>

  </div>

  <div class="p-5 border-t border-gray-100 bg-surface/50 shrink-0">
    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex justify-between items-center">
      <span>{statusGatewayText}</span>
      <span id="cache-indicator" class="text-brand-green-bright flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-brand-green-bright animate-pulse shadow-[0_0_8px_rgba(127,195,66,0.8)]"></span> {statusSyncingText}
      </span>
    </div>
  </div>
</aside>

<style>
  /* Keeps existing styles */
  :global(.filter-active) {
    background-color: color-mix(in srgb, var(--color-brand-blue-deep) 6%, transparent) !important;
    border-color: color-mix(in srgb, var(--color-brand-blue-deep) 20%, transparent) !important;
  }
  :global(.filter-active .font-bold) { color: var(--color-brand-dark) !important; }
  :global(#filter-list button) { display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; text-align: left !important; padding: 0.75rem 1rem !important; border-radius: 0.75rem !important; border: 1px solid transparent !important; font-size: 14px !important; color: #4b5563 !important; transition: all 0.2s ease !important; cursor: pointer !important; }
  :global(#filter-list button:hover) { background-color: #f8fafc !important; }
  :global(details > summary) { list-style: none; }
  :global(details > summary::-webkit-details-marker) { display: none; }
  :global(.filter-group) { border-bottom: 1px solid #f1f5f9 !important; }
  :global(.filter-group summary) { display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; font-size: 0.70rem !important; font-weight: 800 !important; color: #94a3b8 !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; cursor: pointer !important; padding: 1.25rem 0.5rem !important; margin: 0 -1.5rem !important; padding-left: 2rem !important; padding-right: 2rem !important; width: calc(100% + 3rem) !important; transition: all 0.2s ease !important; user-select: none !important; }
  :global(.filter-group summary:hover) { color: var(--color-brand-blue-deep) !important; background-color: color-mix(in srgb, var(--color-brand-blue-deep) 3%, transparent) !important; }
  :global(.filter-group[open] > div) { padding-bottom: 1rem !important; margin-top: 0.5rem !important; }
  .custom-scrollbar::-webkit-scrollbar { width: 5px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--color-brand-blue-deep); }
  :global(.apple-switch) { position: relative; display: inline-block; width: 36px; height: 20px; flex-shrink: 0; }
  :global(.apple-switch input) { opacity: 0; width: 0; height: 0; }
  :global(.slider) { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #e2e8f0; transition: .3s ease; border-radius: 20px; }
  :global(.slider:before) { position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .3s ease; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.15); }
  :global(input:checked + .slider) { background-color: var(--color-brand-green-bright); }
  :global(input:checked + .slider:before) { transform: translateX(16px); }
</style>

```

### 🧩 File: `src/components/explorer/ExplorerHeader.astro`
```astro
---
interface Props {
  totalCountLabel: string;
}

const { totalCountLabel } = Astro.props;
---
<header id="explorer-header" class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4 border-b border-gray-200 pb-8 transition-all duration-500 ease-out origin-top">

  <div class="w-full sm:w-auto flex justify-between items-start sm:items-center gap-4">
    <div>
      <h1 class="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight min-h-[40px]" id="view-title"></h1>
    </div>

    <button onclick="toggleMobileSidebar()" class="lg:hidden shrink-0 bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm text-brand-blue-deep hover:bg-brand-blue-deep/10 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>

  <div class="text-right bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-end">
    <span class="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-1">{totalCountLabel}</span>
    <span id="top-cohort-size" class="text-2xl sm:text-3xl font-black text-brand-blue-deep leading-none min-h-[36px]"></span>
  </div>
</header>

```

### 🧩 File: `src/components/explorer/ExplorerGrid.astro`
```astro
---
interface Props {
  noResultsText: string;
}

const { noResultsText } = Astro.props;
---
<div id="dashboard-grid" class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 transition-all duration-500 ease-out origin-top">
</div>

<div id="search-fallback" class="hidden flex-col items-center justify-center py-32 text-gray-400 bg-white/50 border border-gray-100 rounded-[2.5rem] mt-6 shadow-sm">
  <svg class="w-14 h-14 mb-6 opacity-50 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  <p class="text-base font-bold text-gray-500 uppercase tracking-[0.15em]">{noResultsText}</p>
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
    /* 🌟 UX FIX: Subtle scale outward prevents edge-jitter while highlighting */
    transform: scale(1.015);
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

/* Add this at the bottom of src/styles/global.css */
.upset-wrapper .upset-toolbar,
.upset-wrapper svg g[class*="action"],
.upset-wrapper .action-menu {
  display: none !important;
  pointer-events: none !important;
}

/* Core Grid Dots & Matrix Row Recoloring */
.upset-matrix-dot[data-set="blood"] { fill: var(--color-brand-blue-deep) !important; }
.upset-matrix-dot[data-set="retinal"] { fill: var(--color-brand-green-bright) !important; }
.upset-matrix-dot[data-set="urine"] { fill: var(--color-brand-teal) !important; }

/* Highlight the Triple Overlap Intersection Column Bar */
.upset-bar[data-intersection="retinal-blood-urine"] {
  fill: var(--color-brand-orange-deep) !important;
  transition: fill 0.2s ease-in-out;
}

/* Ensure the fill property state changes gracefully on hover */
.upset-bar[data-intersection="retinal-blood-urine"]:hover {
  fill: var(--color-brand-yellow) !important;
  transition: fill 0.15s ease-in-out;
}

```

