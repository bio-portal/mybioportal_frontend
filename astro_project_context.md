# BioPortal Astro Architectural Context
Generated on: Tue 15 Sep 2026 11:05:04 AM EDT

---

## 📂 Project Directory Structure
```text
[38;5;33m.[00m
├── [38;5;33marchive[00m
│   ├── 17-byanca-liboni.yaml
│   └── 19-nadia-blostein.yaml
├── astro.config.mjs
├── astro_project_context.md
├── CNAME
├── english_translation_dump.txt
├── english_yamls.cjs
├── en_translation_dump.txt
├── fixcolors.sh
├── fr_translation_dump.txt
├── gather_context.sh
├── generate_team.sh
├── load_npm.sh
├── organize_assets.sh
├── package.json
├── package-lock.json
├── project_context.txt
├── README.html
├── README.md
├── [38;5;33msrc[00m
│   ├── [38;5;33mcomponents[00m
│   │   ├── [38;5;33mexplorer[00m
│   │   │   ├── ExplorerGrid.astro
│   │   │   ├── ExplorerHeader.astro
│   │   │   └── ExplorerSidebar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── TrustBar.astro
│   ├── [38;5;33mcontent[00m
│   │   ├── [38;5;33mnews[00m
│   │   │   ├── [38;5;33men[00m
│   │   │   │   ├── bioportal-open-for-applications.md
│   │   │   │   ├── multiomics-to-clinics-presentation.md
│   │   │   │   └── roche-partnership.md
│   │   │   └── [38;5;33mfr[00m
│   │   │       ├── bioportal-open-for-applications.md
│   │   │       ├── multiomics-to-clinics-presentation.md
│   │   │       └── roche-partnership.md
│   │   ├── [38;5;33mpages[00m
│   │   │   ├── [38;5;33men[00m
│   │   │   │   ├── data.yaml
│   │   │   │   ├── faq.yaml
│   │   │   │   ├── global.yaml
│   │   │   │   ├── home.yaml
│   │   │   │   ├── news.yaml
│   │   │   │   ├── participants.yaml
│   │   │   │   └── privacy.yaml
│   │   │   └── [38;5;33mfr[00m
│   │   │       ├── data.yaml
│   │   │       ├── faq.yaml
│   │   │       ├── global.yaml
│   │   │       ├── home.yaml
│   │   │       ├── news.yaml
│   │   │       ├── participants.yaml
│   │   │       └── privacy.yaml
│   │   └── [38;5;33mteam[00m
│   │       ├── [38;5;33men[00m
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
│   │       └── [38;5;33mfr[00m
│   │           ├── 01-brent-richards.yaml
│   │           ├── 02-vincent-mooser.yaml
│   │           ├── 03-jonathan-afilalo.yaml
│   │           ├── 04-tricia-peters.yaml
│   │           ├── 05-guillaume-butler.yaml
│   │           ├── 06-satoshi-yoshiji.yaml
│   │           ├── 07-tobias-erlanger.yaml
│   │           ├── 08-david-morrison.yaml
│   │           ├── 09-mariana-pico.yaml
│   │           ├── 10-issam-elkbaiche.yaml
│   │           ├── 11-darin-adra.yaml
│   │           ├── 12-mariana-jaime.yaml
│   │           ├── 13-corinne-pirici.yaml
│   │           ├── 14-mina-nikkhah.yaml
│   │           ├── 15-zaman-afrasiabi.yaml
│   │           ├── 16-cesar-peralta.yaml
│   │           ├── 18-jonafe-daguplo.yaml
│   │           ├── 20-jesse-islam.yaml
│   │           ├── 21-hind-lerhcha.yaml
│   │           └── 22-shirlyn-cabilin.yaml
│   ├── content.config.ts
│   ├── [38;5;33mlayouts[00m
│   │   └── Layout.astro
│   ├── [38;5;33mone_off_scripts[00m
│   │   └── convert_image_to_webp.R
│   ├── [38;5;33mpages[00m
│   │   └── [38;5;33m[...lang][00m
│   │       ├── [38;5;33mdata[00m
│   │       │   └── explorer.astro
│   │       ├── data.astro
│   │       ├── faq.astro
│   │       ├── index.astro
│   │       ├── [38;5;33mnews[00m
│   │       │   ├── [id].astro
│   │       │   └── index.astro
│   │       ├── participants.astro
│   │       └── privacy.astro
│   ├── [38;5;33mscripts[00m
│   │   └── explorerEngine.ts
│   ├── [38;5;33mstyles[00m
│   │   └── global.css
│   └── types.d.ts
├── tsconfig.json
├── [00mupdate_french_team_names.cjs[00m
├── write_french_translations.sh
└── yaml_gather_context.sh

22 directories, 104 files
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
  site: 'https://mybioportal.ca',
  base: '/',
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
    // Cleaned up from z.any() to strict structures
    hero: z.object({
      tagline: z.string().optional(),
      headline: z.string().optional(),
      gradientText: z.string().optional(),
      description: z.string().optional()
    }).optional(),

    trustBar: z.any().optional(), // Left as any depending on your TrustBar component structure

    steps: z.array(z.object({
      title: z.string(),
      desc: z.string()
    })).optional(),

    benefit: z.object({
      title: z.string(),
      desc: z.string()
    }).optional(),

    landingMetrics: z.object({
      participantsLabel: z.string(),
      clinicalVariablesLabel: z.string(),
      proteomicsLabel: z.string(),
      biosamplesLabel: z.string(),
      fallbackValues: z.object({
        participants: z.string().optional(),
        clinicalVariables: z.string(),
        proteomics: z.string().optional(),
        biosamples: z.string().optional()
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
      faqLinkText: z.string().optional(), // Added
      contactText: z.string().optional(), // Added
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
      applicationProcess: z.object({
        title: z.string(),
        description: z.string(),
        requirementsTitle: z.string(),
        requirementsItems: z.array(z.string()),
        infrastructureTitle: z.string(),
        infrastructureDescription: z.string(),
        infrastructureTags: z.array(z.string()),
      }),
      actionBlock: z.object({
        title: z.string(),
        description: z.string(),
        downloadButtonText: z.string(),
        emailLabel: z.string(),
        emailAddress: z.string(),
      })
    }).optional(),

    // 🌟 CLEANED: No more z.any(), strictly expecting the new actionCard schema
    recruitmentData: z.object({
      pageTitle: z.string(),
      whyJoinTitle: z.string(),
      howItWorksTitle: z.string(),
      pillars: z.array(z.object({
        title: z.string(),
        desc: z.string()
      })),
      formCard: z.object({
        title: z.string(),
        description: z.string(),
        buttonText: z.string(),
        disclaimer: z.string(),
        privacyLinkText: z.string()
      })
    }).optional(),
    // --- FAQ PAGE SPECIFIC ---
    faqData: z.object({
      pageTitle: z.string(),
      tagline: z.string(),
      headline: z.string(),
      description: z.string(),
      categories: z.array(z.object({
        name: z.string(),
        items: z.array(z.object({
          q: z.string(),
          a: z.string()
        }))
      }))
    }).optional(),
    // --- DATA EXPLORER APP SPECIFIC ---
    explorer: z.object({
      pageTitle: z.string(),
      backLink: z.string(),
      backText: z.string(),
      header: z.object({
        totalPatientsLabel: z.string(),
        approxDisclaimer: z.string(),
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
  loader: glob({ pattern: "**/*.{yaml,yml}", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    order: z.number(),
    group: z.string(),
    bio: z.string(),
  }),
});

const news = defineCollection({
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
### 🧩 File: `src/pages/[...lang]/news/[id].astro`
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

// Fetch the translated "Back to Insights" text from the pages/news configuration file dynamically
const newsPageData = await getEntry('pages', `${lang}/news`);
const backToNewsText = newsPageData?.data?.backToNewsText || (lang === 'fr' ? 'Retour aux actualités' : 'Back to Insights');
---
<Layout
  title={`${post.data.title} | BioPortal Insights`}

  backLink="/news/"  /* 🌟 PATH FIX: Navbar already injects base URL and language prefixes automatically */
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

### 🧩 File: `src/pages/[...lang]/news/index.astro`
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
        <article class="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-soft hover:shadow-2xl transition-all group flex flex-col overflow-hidden">

          {/* 🌟 CLICKABILITY FIX: Top-level transparent link layer covering the entire card bounds */}
          <a href={`${baseUrl}${langPrefix}/news/${getCleanSlug(post.id)}/`} class="absolute inset-0 z-20" aria-label={post.data.title}></a>

          <div class="h-48 w-full relative overflow-hidden bg-surface flex-shrink-0">
            {post.data.image ? (
              <img src={`${baseUrl}${post.data.image}`} alt={post.data.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
              <div class="absolute inset-0 bg-gradient-to-br from-brand-orange-mid/10 via-brand-green-bright/5 to-brand-blue-deep/10 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <img src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`} alt="BioPortal Mark" class="w-32 h-auto opacity-30 grayscale" onerror="this.style.display='none'" />
              </div>
            )}
          </div>

          <div class="p-8 flex flex-col flex-grow relative z-10">
            <div class="flex justify-between items-start mb-6">
              <span class="text-[10px] font-bold text-gray-400 uppercase">
                {post.data.date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
              <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep">{post.data.tag}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-blue-deep transition-colors">{post.data.title}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">{post.data.excerpt}</p>

            {/* STRUCTURAL FIX: Converted from <a> to <div> to ensure HTML validation standards are met */}
            <div class="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
              {readMoreText || (lang === 'fr' ? "Lire l'article" : "Read Insight")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </article>
      ))}
    </div>
  </main>
</Layout>

```

### 🧩 File: `src/pages/[...lang]/data/explorer.astro`
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

const dataPage = await getEntry('pages', `${lang}/data`);

const explorerContent = dataPage?.data?.explorer || {
  pageTitle: "Data Explorer",
  backLink: "/data",
  backText: "Back",
  header: {
    totalPatientsLabel: "Total Patients",
    approxDisclaimer: "Values are approximate to preserve privacy."
  },
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

  backLink={explorerContent.backLink}
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
      <ExplorerHeader
  totalCountLabel={explorerContent.header.totalPatientsLabel}
  approxDisclaimer={explorerContent.header.approxDisclaimer}
/>
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

### 🧩 File: `src/pages/[...lang]/data.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export function getStaticPaths() {
  return [
    { params: { lang: undefined } },
    { params: { lang: 'fr' } }
  ];
}

const { lang = 'en' } = Astro.params;
const langPrefix = lang === 'en' ? '' : '/fr';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

const pageData = await getEntry('pages', `${lang}/data`);

const hero = pageData?.data?.hero || { tagline: 'Data', headline: 'BioPortal Datasets', description: 'Loading data...' };

// 🌟 EXACT PIPELINE CONFIGURATION
const TOTAL_CLINICAL_VARIABLES = "158";

const metrics = pageData?.data?.landingMetrics || {
  participantsLabel: "Total Participants",
  clinicalVariablesLabel: "Clinical Variables",
  proteomicsLabel: "Proteomic Profiles",
  biosamplesLabel: "Matched Biosamples",
  fallbackValues: { participants: "...", clinicalVariables: "...", proteomics: "...", biosamples: "..." }
};

const content = pageData?.data?.dataRequest || {
  pageTitle: "Datasets",
  backText: "Back",
  explorerCard: { tag: "App", title: "Explorer", description: "Explore datasets", buttonText: "Open Explorer" },
  applicationProcess: {
    title: "Application Process",
    description: "",
    requirementsTitle: "Requirements",
    requirementsItems: [],
    infrastructureTitle: "Infrastructure",
    infrastructureDescription: "",
    infrastructureTags: []
  },
  actionBlock: {
    title: "Request Data",
    description: "",
    downloadButtonText: "Download Form",
    emailLabel: "Submit to:",
    emailAddress: "access.bioportal@ladydavis.ca"
  }
};
---
<Layout title={content.pageTitle} backText={content.backText} lang={lang}>
  <main class="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">
    <header class="max-w-3xl mb-16 text-center mx-auto">
      <span class="text-brand-blue-deep font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
      <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">{hero.headline}</h1>
      <p class="text-xl text-gray-600 leading-relaxed">{hero.description}</p>
    </header>

    {/* Metric Cards Section */}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
      {/* 1. Total Cohort */}
      <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-blue-deep shadow-soft">
          <h3 id="metric-participants" class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter h-12 lg:h-14 flex items-center">
            <div class="live-stat-loader flex items-center gap-1.5 pt-1">
              <div class="w-2.5 h-2.5 bg-brand-blue-deep/40 rounded-full animate-pulse"></div>
              <div class="w-2.5 h-2.5 bg-brand-blue-deep/60 rounded-full animate-pulse" style="animation-delay: 200ms"></div>
              <div class="w-2.5 h-2.5 bg-brand-blue-deep/90 rounded-full animate-pulse" style="animation-delay: 400ms"></div>
            </div>
            <span class="live-stat-value hidden">{metrics.fallbackValues.participants}</span>
          </h3>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.participantsLabel}</p>
      </div>

      {/* 2. Hardcoded Pipeline Tracking Metric */}
      <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-teal shadow-soft">
          <h3 id="metric-variables" data-static-value={TOTAL_CLINICAL_VARIABLES} class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter h-12 lg:h-14 flex items-center">
            <div class="live-stat-loader flex items-center gap-1.5 pt-1">
              <div class="w-2.5 h-2.5 bg-brand-teal/40 rounded-full animate-pulse"></div>
              <div class="w-2.5 h-2.5 bg-brand-teal/60 rounded-full animate-pulse" style="animation-delay: 200ms"></div>
              <div class="w-2.5 h-2.5 bg-brand-teal/90 rounded-full animate-pulse" style="animation-delay: 400ms"></div>
            </div>
            <span class="live-stat-value hidden">{metrics.fallbackValues.clinicalVariables}</span>
          </h3>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.clinicalVariablesLabel}</p>
      </div>

      {/* 3. Total Proteomics */}
      <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-green-bright shadow-soft">
          <h3 id="metric-proteomics" class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter h-12 lg:h-14 flex items-center">
            <div class="live-stat-loader flex items-center gap-1.5 pt-1">
              <div class="w-2.5 h-2.5 bg-brand-green-bright/40 rounded-full animate-pulse"></div>
              <div class="w-2.5 h-2.5 bg-brand-green-bright/60 rounded-full animate-pulse" style="animation-delay: 200ms"></div>
              <div class="w-2.5 h-2.5 bg-brand-green-bright/90 rounded-full animate-pulse" style="animation-delay: 400ms"></div>
            </div>
            <span class="live-stat-value hidden">{metrics.fallbackValues.proteomics}</span>
          </h3>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.proteomicsLabel}</p>
      </div>

      {/* 4. Venn Diagram Intersections */}
      <div class="bg-white rounded-[2rem] p-8 border-t-4 border-brand-yellow shadow-soft">
          <h3 id="metric-biosamples" class="text-4xl lg:text-5xl font-black text-brand-dark mb-2 tracking-tighter h-12 lg:h-14 flex items-center">
            <div class="live-stat-loader flex items-center gap-1.5 pt-1">
              <div class="w-2.5 h-2.5 bg-brand-yellow/40 rounded-full animate-pulse"></div>
              <div class="w-2.5 h-2.5 bg-brand-yellow/60 rounded-full animate-pulse" style="animation-delay: 200ms"></div>
              <div class="w-2.5 h-2.5 bg-brand-yellow/90 rounded-full animate-pulse" style="animation-delay: 400ms"></div>
            </div>
            <span class="live-stat-value hidden">{metrics.fallbackValues.biosamples}</span>
          </h3>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{metrics.biosamplesLabel}</p>
      </div>
    </div>

    {/* Informational Cards Grid */}
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div class="lg:col-span-7 bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-soft h-full flex flex-col">
        <h2 class="text-3xl font-black text-brand-dark mb-4">{content.applicationProcess.title}</h2>
        <p class="text-gray-500 mb-8 leading-relaxed font-medium text-lg">{content.applicationProcess.description}</p>

        <div class="flex-grow space-y-8">
          <div>
            <h3 class="text-lg font-bold mb-4 flex items-center gap-3 text-gray-900">
              <span class="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </span>
              {content.applicationProcess.requirementsTitle}
            </h3>
            <ul class="space-y-3 text-sm text-gray-600 font-medium ml-11">
              {content.applicationProcess.requirementsItems?.map((item: string, index: number) => (
                <li class="flex items-start gap-3"><span class="text-brand-teal font-black mt-0.5 opacity-60">0{index + 1}</span><span class="leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </div>

          <div class="pt-6 border-t border-gray-100">
            <h3 class="text-lg font-bold text-gray-900 mb-3">{content.applicationProcess.infrastructureTitle}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-4" set:html={content.applicationProcess.infrastructureDescription}></p>
            <div class="flex flex-wrap gap-2">
              {content.applicationProcess.infrastructureTags?.map((tag: string) => (
                <span class="px-3 py-1.5 rounded-lg bg-brand-blue-mid/10 text-brand-dark font-bold text-[10px] uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 flex flex-col gap-8 h-full">
        <div class="relative bg-white rounded-[2.5rem] p-10 border-2 border-transparent shadow-soft flex flex-col group/card transition-colors duration-300 hover:border-brand-blue-deep shrink-0">
          <div class="flex justify-between items-start mb-6">
            <span class="px-3 py-1.5 rounded-lg bg-brand-blue-deep/5 text-brand-blue-deep font-bold text-[10px] uppercase tracking-[0.15em] border border-brand-blue-deep/10">{content.explorerCard.tag}</span>
            <div class="relative flex h-3 w-3 mt-1 mr-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60"></span>
              <span class="aurora-dot relative inline-flex rounded-full h-3 w-3 shadow-sm ring-2 ring-white"></span>
            </div>
          </div>
          <h2 class="text-3xl font-black tracking-tight text-gray-900 mb-3">{content.explorerCard.title}</h2>
          <p class="text-gray-500 text-sm leading-relaxed font-medium mb-8">{content.explorerCard.description}</p>
          <a href={`${baseUrl}${langPrefix}/data/explorer/`} class="group/action w-full py-4 rounded-xl bg-brand-blue-deep text-white text-sm font-bold shadow-lg flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:brightness-110">
            <span class="relative z-10">{content.explorerCard.buttonText}</span>
            <svg class="arrow-thrust relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </a>
        </div>

        <div class="relative bg-white rounded-[2.5rem] p-10 flex flex-col justify-center flex-grow group/card border-2 border-transparent shadow-soft transition-colors duration-300 hover:border-brand-blue-deep">
          <div class="relative z-10">
            <span class="w-14 h-14 rounded-2xl bg-brand-blue-deep/5 flex items-center justify-center mb-6 border border-brand-blue-deep/10 transition-colors group-hover/card:bg-brand-blue-deep/10">
              <svg class="w-7 h-7 text-brand-blue-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </span>
            <h2 class="text-2xl font-black text-gray-900 mb-3">{content.actionBlock.title}</h2>
            <p class="text-gray-500 mb-8 text-sm leading-relaxed font-medium">{content.actionBlock.description}</p>
            <a href="https://github.com/bio-portal/mybioportal_frontend/blob/main/public/docs/BIO-PORTAL-Data-Access-Form.Feb-23-2026-2.pdf?raw=true" target="_blank" rel="noopener noreferrer" class="group/action w-full py-4 rounded-xl bg-brand-blue-deep text-white font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-3 cursor-pointer mb-8 transition-all duration-300 hover:brightness-110">
              <span class="relative z-10">{content.actionBlock.downloadButtonText}</span>
              <svg class="arrow-bounce relative z-10 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
            <div class="pt-6 border-t border-gray-100">
              <p class="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">{content.actionBlock.emailLabel}</p>
              <a href={`mailto:${content.actionBlock.emailAddress}`} class="text-base font-bold text-brand-dark hover:text-brand-blue-deep transition-colors">
                {content.actionBlock.emailAddress}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</Layout>

<style>
  .aurora-dot {
    background: linear-gradient(135deg, var(--color-brand-blue-deep), var(--color-brand-teal), var(--color-brand-green-bright), var(--color-brand-yellow), var(--color-brand-orange-deep));
    background-size: 300% 300%;
    animation: auroraSpin 4s ease infinite;
  }
  @keyframes auroraSpin {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes arrowDip {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }
  .group\/action:hover .arrow-bounce {
    animation: arrowDip 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes arrowThrust {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }
  .group\/action:hover .arrow-thrust {
    animation: arrowThrust 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
</style>

<script>
  const API_GATEWAY = "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats";

  async function syncLandingMetrics() {
    try {
      // 1. Single API call targeting baseline metrics
      const statsRes = await fetch(`${API_GATEWAY}?filter=baseline&_cb=${new Date().getTime()}`);
      if (!statsRes.ok) throw new Error("API Connection Error");

      const summaryStatistics = await statsRes.json();
      if (!summaryStatistics || summaryStatistics.length === 0) throw new Error("Dataset Empty");

      // 🌟 HELPER: Safely evaluate mixed interface{} types from Go API
      const extractCount = (val: any): number => {
        if (typeof val === 'number') return val;
        if (typeof val === 'string') return parseInt(val) || 0;
        return 0;
      };

      // 2. Compute Metrics using the precise backend parameters
      // Total Patients (Summing up the 'sex' chart data array elements)
      const sexData = summaryStatistics.find((s: any) => s.chart_id === 'sex' && s.filter_key === 'baseline')?.data || [];
      const totalPatients = sexData.reduce((sum: number, item: any) => sum + extractCount(item.count), 0);

      // Total Proteomics (Grabbing the "Yes" metrics)
      const proteomicsData = summaryStatistics.find((s: any) => s.chart_id === 'n_proteomics' && s.filter_key === 'baseline')?.data || [];
      const proteomicMatch = proteomicsData.find((item: any) => item.category.includes('Yes'));
      const totalProteomics = proteomicMatch ? extractCount(proteomicMatch.count) : 0;

      // Matched Biosamples (Summing up the 'sample_intersections' matrix array)
      const vennData = summaryStatistics.find((s: any) => s.chart_id === 'sample_intersections' && s.filter_key === 'baseline')?.data || [];
      const totalBiosamples = vennData.reduce((sum: number, item: any) => sum + extractCount(item.count), 0);

      // 3. Extract the Hardcoded Variable Value from the DOM configuration attribute
      const variablesEl = document.getElementById('metric-variables');
      const staticVariables = variablesEl?.dataset.staticValue || "158";

      // 4. Internationalization formatting configuration
      const docLang = document.documentElement.lang || 'en';
      const targetLocale = docLang === 'fr' ? 'fr-FR' : 'en-US';
      const formatNum = (val: number) => val.toLocaleString(targetLocale);

      // 5. Atomic State Modifier function
      const updateDom = (id: string, displayValue: string) => {
        const container = document.getElementById(`metric-${id}`);
        if (container) {
          const loader = container.querySelector('.live-stat-loader') as HTMLElement;
          const valueText = container.querySelector('.live-stat-value') as HTMLElement;
          if (loader) loader.style.display = 'none';
          if (valueText) {
            valueText.innerHTML = displayValue;
            valueText.style.display = 'inline';
            valueText.classList.remove('hidden');
          }
        }
      };

      // 🌟 ALL OR NOTHING COMPLIANCE GUARD:
      // Only swap visual assets if numbers were accurately parsed.
      if (totalPatients > 0 && totalBiosamples > 0) {
        updateDom('participants', formatNum(totalPatients));
        updateDom('variables', staticVariables);
        updateDom('proteomics', formatNum(totalProteomics));
        updateDom('biosamples', formatNum(totalBiosamples));
      } else {
        throw new Error("Data bounds calculation failed");
      }

    } catch (err) {
      console.warn("Metrics synchronization failed. Falling back to static values.");

      // Clear all animations gracefully and drop down fallback markers simultaneously
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

### 🧩 File: `src/pages/[...lang]/index.astro`
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

  {/* COMPLIANCE FIX: If the user lands on the English root page, but hasn't explicitly
    chosen English yet, instantly redirect them to the French version.
  */}
  {lang === 'en' && (
    <script is:inline>
      if (sessionStorage.getItem('langPref') !== 'en') {
        sessionStorage.setItem('langPref', 'fr');
        // Safely handles both custom domains (/) and github pages (/mybioportal_frontend/)
        const currentPath = window.location.pathname.replace(/\/$/, '');
        window.location.replace(currentPath + '/fr/');
      }
    </script>
  )}

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
          <article class="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-soft hover:shadow-2xl transition-all group flex flex-col overflow-hidden">

            {/* 🌟 CLICKABILITY FIX: Transparent overlay link covering the entire card bounds */}
            <a href={`${baseUrl}${langPrefix}/news/${getCleanSlug(post.id)}/`} class="absolute inset-0 z-20" aria-label={post.data.title}></a>

            <div class="h-48 w-full relative overflow-hidden bg-surface flex-shrink-0">
              {post.data.image ? (
                <img src={`${baseUrl}${post.data.image}`} alt={post.data.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div class="absolute inset-0 bg-gradient-to-br from-brand-orange-mid/10 via-brand-green-bright/5 to-brand-blue-deep/10 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <img src={`${baseUrl}/logos/BioPortal_Primary_Color.svg`} alt={insights.fallbackImageAlt} class="w-32 h-auto opacity-30 grayscale" onerror="this.style.display='none'" />
                </div>
              )}
            </div>

            <div class="p-8 flex flex-col flex-grow relative z-10">
              <div class="flex justify-between items-start mb-6">
                <span class="text-[10px] font-bold text-gray-400 uppercase">{post.data.date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep">{post.data.tag}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-blue-deep transition-colors">{post.data.title}</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">{post.data.excerpt}</p>

              {/* Styled layout block representing the link cleanly */}
              <div class="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                {insights.readMoreText} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
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
                <div class="team-card group cursor-pointer lg:cursor-default relative outline-none" tabindex="0">
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
                <div class="team-card group cursor-pointer lg:cursor-default relative outline-none" tabindex="0">
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

### 🧩 File: `src/pages/[...lang]/participants.astro`
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

// Fetch both the Participants page data AND the Data page data to reuse the explorer card content
const pageData = await getEntry('pages', `${lang}/participants`);
const homeData = await getEntry('pages', `${lang}/home`);
const dataPageData = await getEntry('pages', `${lang}/data`);

const hero = pageData?.data?.hero;
const steps = pageData?.data?.steps || [];
const content = pageData?.data?.recruitmentData;

// Extract the Explorer Card from the data.yaml
const explorerCard = dataPageData?.data?.dataRequest?.explorerCard || {
  tag: "Interactive Platform",
  title: "Live Data Explorer",
  description: "Visualize real-time clinical cohorts, demographic distributions, and sample metrics immediately.",
  buttonText: "Launch Explorer"
};

// SVG Icon mapping for the 3 pillars (Security, Altruism, Value)
const pillarIcons = [
  // 0: Lock (Security)
  '<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />',
  // 1: People (Representation)
  '<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />',
  // 2: Heart (Health Value)
  '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />'
];
---
<Layout title={content.pageTitle} lang={lang}>
  <main class="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">

    <header class="max-w-4xl mb-20 text-center mx-auto">
      <span class="text-brand-green-bright font-bold tracking-widest uppercase text-xs mb-4 block">{hero.tagline}</span>
      <h1 class="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
        {hero.headline} <br/>
        <span class="bg-gradient-to-r from-brand-green-bright to-brand-teal bg-clip-text text-transparent pb-2">{hero.gradientText}</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">{hero.description}</p>
    </header>

    {homeData?.data?.trustBar && <TrustBar content={homeData.data.trustBar} />}

    <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-20">

      <div class="lg:col-span-7 space-y-16">
        <div>
          <h3 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">{content.whyJoinTitle}</h3>
          <div class="space-y-12">
            {content.pillars.map((pillar: any, index: number) => (
              <div class="flex gap-5 items-start">
                <div class="w-12 h-12 rounded-2xl bg-brand-green-bright/10 flex items-center justify-center shrink-0 text-brand-green-bright">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" set:html={pillarIcons[index] || pillarIcons[0]}></svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2 tracking-tight">{pillar.title}</h4>
                  <p class="text-gray-500 leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="pt-12 border-t border-gray-100">
          <h3 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">{content.howItWorksTitle}</h3>
          <div class="space-y-8 relative pl-4 border-l-2 border-brand-green-bright/20 ml-5">
            {steps.map((step: any, index: number) => (
              <div class="relative group">
                <div class="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-white border-2 border-brand-green-bright text-brand-green-bright font-extrabold text-xs flex items-center justify-center transition-all shadow-sm">
                  {index + 1}
                </div>
                <div class="pl-4 pb-2">
                  <h4 class="font-bold text-gray-900 text-lg mb-1 tracking-tight">{step.title}</h4>
                  <p class="text-base text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY COLUMN: Now a flex column to hold both cards */}
      <div class="lg:col-span-5 w-full lg:sticky lg:top-28 flex flex-col gap-6">

        {/* 1. DATA EXPLORER LAUNCHER CARD (Green Theme) */}
        <div class="relative bg-white rounded-[2.5rem] p-10 border-2 border-transparent shadow-soft flex flex-col group/card transition-colors duration-300 hover:border-brand-green-bright shrink-0">
          <div class="flex justify-between items-start mb-6">
            <span class="px-3 py-1.5 rounded-lg bg-brand-green-bright/5 text-brand-green-bright font-bold text-[10px] uppercase tracking-[0.15em] border border-brand-green-bright/10">{explorerCard.tag}</span>
            <div class="relative flex h-3 w-3 mt-1 mr-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-bright opacity-60"></span>
              <span class="aurora-dot relative inline-flex rounded-full h-3 w-3 shadow-sm ring-2 ring-white"></span>
            </div>
          </div>
          <h2 class="text-3xl font-black tracking-tight text-gray-900 mb-3">{explorerCard.title}</h2>
          <p class="text-gray-500 text-sm leading-relaxed font-medium mb-8">{explorerCard.description}</p>
          <a href={`${baseUrl}${langPrefix}/data/explorer/`} class="group/action w-full py-4 rounded-xl bg-brand-green-bright text-white text-sm font-bold shadow-md shadow-brand-green-bright/20 flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:brightness-110">
            <span class="relative z-10">{explorerCard.buttonText}</span>
            <svg class="arrow-thrust relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </a>
        </div>

        {/* 2. ECONSENT CARD (Disabled) */}
        <div class="group bg-white rounded-[2.5rem] shadow-soft border-2 border-transparent hover:border-brand-green-bright/50 transition-colors duration-500 p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center">
          <div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>

          <div class="relative z-10 text-center lg:text-left">
            <span class="w-14 h-14 rounded-2xl bg-brand-green-bright/5 flex items-center justify-center mb-6 border border-brand-green-bright/10 mx-auto lg:mx-0 group-hover:bg-brand-green-bright/10 transition-colors">
              <svg class="w-7 h-7 text-brand-green-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </span>

            <h3 class="text-2xl font-black text-brand-dark mb-3 tracking-tight">{content.formCard.title}</h3>
            <p class="text-gray-500 mb-8 text-sm leading-relaxed font-medium">{content.formCard.description}</p>

            {/* DISABLED STATE: eConsent Coming Soon */}
            <div class="w-full py-4 rounded-xl bg-gray-100 text-gray-400 font-bold text-sm tracking-widest uppercase border border-gray-200 flex items-center justify-center gap-3 cursor-not-allowed select-none">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>{content.formCard.buttonText}</span>
            </div>

            <p class="mt-8 text-[11px] text-gray-400 text-center lg:text-left leading-relaxed font-medium">
              {content.formCard.disclaimer} <a href={`${baseUrl}${langPrefix}/privacy/`} class="text-brand-green-bright underline hover:text-brand-dark transition-colors font-bold">{content.formCard.privacyLinkText}</a>.
            </p>
          </div>
        </div>

      </div>

    </div>
  </main>
</Layout>

<style>
  /* 1. Aurora Dot Background Animation */
  .aurora-dot {
    background: linear-gradient(
      135deg,
      var(--color-brand-blue-deep),
      var(--color-brand-teal),
      var(--color-brand-green-bright),
      var(--color-brand-yellow),
      var(--color-brand-orange-deep)
    );
    background-size: 300% 300%;
    animation: auroraSpin 4s ease infinite;
  }
  @keyframes auroraSpin {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* 2. Horizontal Thrust Arrow (Launch) */
  @keyframes arrowThrust {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }
  .group\/action:hover .arrow-thrust {
    animation: arrowThrust 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
</style>

```

### 🧩 File: `src/pages/[...lang]/privacy.astro`
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
<Layout title={`${headline} | BioPortal`} lang={lang}>
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

### 🧩 File: `src/pages/[...lang]/faq.astro`
```astro
---
import { getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export function getStaticPaths() {
  return [
    { params: { lang: undefined } }, // English maps to root (/faq)
    { params: { lang: 'fr' } }        // French maps to /fr/faq
  ];
}

const { lang = 'en' } = Astro.params;

// Fetch data from the new YAML files based on language!
const pageData = await getEntry('pages', `${lang}/faq`);
const content = pageData?.data?.faqData;
---
<Layout title={content.pageTitle} lang={lang}>
  <main class="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">

    {/* Page Header */}
    <header class="max-w-3xl mb-20 text-center mx-auto">
      <span class="text-brand-green-bright font-bold tracking-widest uppercase text-xs mb-4 block">{content.tagline}</span>
      <h1 class="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
        {content.headline}
      </h1>
      <p class="text-lg lg:text-xl text-gray-500 leading-relaxed font-medium">{content.description}</p>
    </header>

    {/* FAQ Categories & Accordions */}
    <div class="max-w-4xl mx-auto space-y-16">
      {content.categories.map((category: any) => (
        <section>
          <h2 class="text-2xl font-extrabold text-brand-dark mb-6 tracking-tight border-b border-gray-100 pb-4">{category.name}</h2>

          <div class="space-y-4">
            {category.items.map((item: any) => (
              <details class="group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex items-center justify-between p-6 lg:p-8 cursor-pointer outline-none hover:bg-gray-50 transition-colors">
                  <h3 class="font-bold text-gray-900 text-lg pr-4 group-hover:text-brand-blue-deep transition-colors">{item.q}</h3>
                  <span class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-open:bg-brand-blue-deep group-open:text-white transition-colors duration-300">
                    <svg class="w-4 h-4 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div class="px-6 pb-6 lg:px-8 lg:pb-8 text-gray-600 leading-relaxed font-medium">
                  {/* set:html renders the <br> and <ul> tags safely inside the string */}
                  <div set:html={item.a}></div>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
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

// Safely grab the base URL for deploying to custom domains or subfolders like GitHub Pages
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

// 2. Fetch data dynamically based on the active locale (e.g., 'en/global' or 'fr/global')
const globalData = await getEntry('pages', `${lang}/global`);

const navigation = globalData?.data?.navigation;
const footer = globalData?.data?.footer;
---
<!doctype html>
<html lang={lang}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    {/* 🌟 FAVICON ADDED HERE */}
    <link rel="icon" type="image/svg+xml" href={`${baseUrl}/logos/favicon_bioportal.svg?v=1`} />

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
  joinText: "Participer",
  joinTooltip: "Inscrivez-vous pour contribuer en toute sécurité à nos cohortes de recherche basées à Montréal en fournissant des échantillons biologiques et des données cliniques.",
  requestText: "Accès données",
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
  lang = 'en'
} = Astro.props;

const langPrefix = lang === 'en' ? '' : '/fr';
---
<footer class="bg-brand-dark text-white pt-16 pb-8 px-6 mt-auto">
  <div class="max-w-4xl mx-auto flex flex-col items-center text-center">

    {/* 1. The Brand Anchor */}
    <div class="text-3xl sm:text-4xl font-bold mb-2 tracking-tight flex items-center justify-center gap-1">
      {footerData.title}<span class="text-brand-blue-deep">{footerData.titlePunctuation}</span>
    </div>

    <p class="text-gray-400 text-sm sm:text-base font-medium mb-10">
      {footerData.subtitle}
    </p>

    {/* 2. The Navigation Links (Mathematically Centered Grid) */}
    <nav class="grid grid-cols-1 sm:grid-cols-3 w-full max-w-3xl mx-auto gap-y-4 mb-10 items-center">

      {/* FAQ (Column 1) */}
      <div class="flex items-center justify-center">
        <a href={`${baseUrl}${langPrefix}/faq/`} class="text-sm font-bold text-gray-300 hover:text-white transition-colors tracking-wide">
          {footerData.faqLinkText}
        </a>
      </div>

      {/* Privacy Policy (Column 2 - Dead Center) */}
      <div class="relative flex items-center justify-center">
        {/* Left Visual Dot - Absolutely positioned */}
        <div class="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-blue-deep/50"></div>

        <a href={`${baseUrl}${langPrefix}${footerData.privacyLinkHref}`} class="text-sm font-bold text-gray-300 hover:text-white transition-colors tracking-wide">
          {footerData.privacyLinkText}
        </a>

        {/* Right Visual Dot */}
        <div class="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-blue-deep/50"></div>
      </div>

      {/* Contact Link (Column 3) */}
      <div class="flex items-center justify-center">
        <a href="mailto:access.bioportal@ladydavis.ca" class="text-sm font-bold text-gray-300 hover:text-white transition-colors tracking-wide flex items-center gap-2 group">
          <svg class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          {footerData.contactText}
        </a>
      </div>

    </nav>

    {/* 3. The Social Icons */}
    <div class="flex items-center justify-center gap-4 mb-10">
      <a href="https://x.com/bioportal_hgj" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300" aria-label="X (Twitter)">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/112363978" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300" aria-label="LinkedIn">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/>
        </svg>
      </a>
    </div>

    {/* 4. The Sub-Footer (Copyright) */}
    <div class="w-full border-t border-white/10 pt-6">
      <div class="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
        {footerData.copyright}
      </div>
    </div>

  </div>
</footer>

```

### 🧩 File: `src/components/Navbar.astro`
```astro
---
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

const {
  type = 'main',
  backLink = '/',
  backText = 'Back',
  navData,
  lang = 'en'
} = Astro.props;

const langPrefix = lang === 'en' ? '' : '/fr';
const currentPathname = Astro.url.pathname;

// Cleanly isolate the underlying path regardless of whether the user is on the English or French route
const relativePath = currentPathname.startsWith(baseUrl)
  ? currentPathname.slice(baseUrl.length)
  : currentPathname;

const cleanRootPath = relativePath.replace(/^\/fr(\/|$)/, '/');

// 🌟 AUTO-DETECT ROUTE LOGIC
const isHome = cleanRootPath === '/' || cleanRootPath === '';
const isParticipants = cleanRootPath.startsWith('/participants');

// Explicitly detect the interactive explorer app
const isExplorer = cleanRootPath.startsWith('/data/explorer');

// Only treat it as the Data landing page if it starts with /data but IS NOT the explorer app
const isResearchers = cleanRootPath.startsWith('/data') && !isExplorer;

// 🌟 DYNAMIC CTA VISIBILITY RULES
const autoCtaMode = isHome ? 'scroll' : 'visible';
const showPrimary = !isParticipants; // Hides "Join Study" on the Participants page
const showSecondary = !isResearchers; // Hides "Access Data" on the Data landing page, keeps it on Explorer

// Calculate absolute target destinations for language toggles
const enUrl = `${baseUrl}${cleanRootPath}`.replace(/\/+/g, '/');
const frUrl = `${baseUrl}/fr${cleanRootPath === '/' ? '' : cleanRootPath}`.replace(/\/+/g, '/');

// UTILITY: Safely concatenate and normalize any array of URL parts
const buildUrl = (...parts: (string | undefined)[]) => {
  return parts.filter(Boolean).join('/').replace(/\/+/g, '/');
};
---
<nav class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300" data-cta-mode={autoCtaMode}>
  <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">

    <a href={buildUrl(baseUrl, langPrefix, '/')} class="flex items-center shrink-0 z-50 h-fit max-h-16 py-2 outline-none">
      <img
        src={buildUrl(baseUrl, '/logos/BioPortal_Primary_Color.svg')}
        alt={navData?.logoAlt || "BioPortal Logo"}
        class="h-10 md:h-11 w-auto shrink-0 hover:-translate-y-0.5 transition-transform object-contain"
        onerror="this.style.display='none'"
      />
    </a>

    {type === 'main' ? (
      <>
        {/* DESKTOP CENTER BUTTONS */}
        <div id="nav-cta-group" class={`absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-4 transition-all duration-500 ease-out ${autoCtaMode === 'scroll' ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          {showPrimary && (
            <a href={buildUrl(baseUrl, langPrefix, navData?.ctaButtons?.primary?.href)} class="px-5 py-2 rounded-full border-2 border-brand-green-bright text-brand-green-bright text-xs font-bold hover:bg-brand-green-bright hover:text-white transition-all bg-white shadow-sm">
              {navData?.ctaButtons?.primary?.label}
            </a>
          )}
          {showSecondary && (
            <a href={buildUrl(baseUrl, langPrefix, navData?.ctaButtons?.secondary?.href)} class="px-5 py-2 rounded-full border-2 border-brand-blue-deep text-brand-blue-deep text-xs font-bold hover:bg-brand-blue-deep hover:text-white transition-all bg-white shadow-sm">
              {navData?.ctaButtons?.secondary?.label}
            </a>
          )}
        </div>

        <div class="hidden lg:flex items-center space-x-8 font-medium text-sm ml-auto">
          {navData?.links?.map((link: any) => (
            <a href={buildUrl(baseUrl, langPrefix, link.href)} class="text-gray-500 hover:text-brand-dark transition-colors">{link.label}</a>
          ))}

          {/* Desktop Language Toggles */}
          <div class="flex items-center gap-1 bg-gray-100/80 p-1 rounded-full border border-gray-200/40 shadow-inner select-none ml-4">
            <a href={enUrl} onclick="sessionStorage.setItem('langPref', 'en')" class={`px-2.5 py-1 text-[10px] font-black rounded-full tracking-wider transition-all ${lang === 'en' ? 'bg-white text-brand-blue-deep shadow-sm border border-gray-100' : 'text-gray-400 hover:text-brand-dark'}`}>EN</a>
            <a href={frUrl} onclick="sessionStorage.setItem('langPref', 'fr')" class={`px-2.5 py-1 text-[10px] font-black rounded-full tracking-wider transition-all ${lang === 'fr' ? 'bg-white text-brand-blue-deep shadow-sm border border-gray-100' : 'text-gray-400 hover:text-brand-dark'}`}>FR</a>
          </div>
        </div>

        <button id="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false" class="lg:hidden text-brand-dark p-2 -mr-2 focus:outline-none z-50 transition-transform duration-300">
           <svg id="icon-menu" class="w-6 h-6 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <svg id="icon-close" class="w-6 h-6 hidden transition-opacity duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div id="mobile-menu-panel" class="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl hidden flex-col px-6 py-8 space-y-6 lg:hidden opacity-0 translate-y-[-10px] transition-all duration-300 pointer-events-none">
          {navData?.links?.map((link: any) => (
            <a href={buildUrl(baseUrl, langPrefix, link.href)} class="mobile-link text-brand-dark font-extrabold text-xl">{link.label}</a>
          ))}

          {/* Mobile Language Toggles */}
          <div class="flex items-center justify-between pt-2">
            <span class="text-xs uppercase tracking-widest font-bold text-gray-400">Language / Langue</span>
            <div class="flex items-center gap-1 bg-gray-100/80 p-1 rounded-full border border-gray-200/40 shadow-inner select-none">
              <a href={enUrl} onclick="sessionStorage.setItem('langPref', 'en')" class={`px-4 py-1.5 text-xs font-black rounded-full tracking-wider transition-all ${lang === 'en' ? 'bg-white text-brand-blue-deep shadow-sm' : 'text-gray-400'}`}>EN</a>
              <a href={frUrl} onclick="sessionStorage.setItem('langPref', 'fr')" class={`px-4 py-1.5 text-xs font-black rounded-full tracking-wider transition-all ${lang === 'fr' ? 'bg-white text-brand-blue-deep shadow-sm' : 'text-gray-400'}`}>FR</a>
            </div>
          </div>

          <hr class="border-gray-100" />

          {/* MOBILE BUTTONS */}
          <div class="flex flex-col gap-3">
            {showPrimary && (
              <a href={buildUrl(baseUrl, langPrefix, navData?.ctaButtons?.primary?.href)} class="w-full text-center py-4 rounded-xl bg-brand-green-bright text-white font-bold shadow-md shadow-brand-green-bright/20">{navData?.ctaButtons?.primary?.label}</a>
            )}
            {showSecondary && (
              <a href={buildUrl(baseUrl, langPrefix, navData?.ctaButtons?.secondary?.href)} class="w-full text-center py-4 rounded-xl bg-brand-blue-deep text-white font-bold shadow-md shadow-brand-blue-deep/20">{navData?.ctaButtons?.secondary?.label}</a>
            )}
          </div>
        </div>
      </>
    ) : (
      <div class="flex items-center gap-6 ml-auto z-50">

        {/* Minimal/Spoke Navbar Language Toggles */}
        <div class="flex items-center gap-1 bg-gray-100/80 p-1 rounded-full border border-gray-200/40 shadow-inner select-none">
          <a href={enUrl} onclick="sessionStorage.setItem('langPref', 'en')" class={`px-2.5 py-1 text-[10px] font-black rounded-full tracking-wider transition-all ${lang === 'en' ? 'bg-white text-brand-blue-deep shadow-sm border border-gray-100' : 'text-gray-400 hover:text-brand-dark'}`}>EN</a>
          <a href={frUrl} onclick="sessionStorage.setItem('langPref', 'fr')" class={`px-2.5 py-1 text-[10px] font-black rounded-full tracking-wider transition-all ${lang === 'fr' ? 'bg-white text-brand-blue-deep shadow-sm border border-gray-100' : 'text-gray-400 hover:text-brand-dark'}`}>FR</a>
        </div>

        <div class="h-4 w-px bg-gray-200"></div>

        <a href={buildUrl(baseUrl, langPrefix, backLink)} class="text-sm font-bold text-gray-400 hover:text-brand-dark transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          {backText}
        </a>
      </div>
    )}
  </div>
</nav>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    // --- Scroll CTA Logic ---
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

    // --- Mobile Menu Toggle Logic with Animations ---
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobilePanel = document.getElementById('mobile-menu-panel');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
      if(!mobilePanel || !mobileToggle || !iconMenu || !iconClose) return;

      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));

      if (!isExpanded) {
        // Open
        mobilePanel.classList.remove('hidden');
        // Force reflow for transition
        void mobilePanel.offsetWidth;
        mobilePanel.classList.remove('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
        iconMenu.classList.add('hidden');
        iconClose.classList.remove('hidden');
        mobileToggle.classList.add('rotate-90');
      } else {
        // Close
        mobilePanel.classList.add('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
        iconClose.classList.add('hidden');
        iconMenu.classList.remove('hidden');
        mobileToggle.classList.remove('rotate-90');

        // Wait for animation to finish before applying display:none
        setTimeout(() => {
          if(mobileToggle.getAttribute('aria-expanded') === 'false') {
             mobilePanel.classList.add('hidden');
          }
        }, 300);
      }
    };

    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
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

    <div class="flex items-center gap-2.5 cursor-help select-none bg-white border border-gray-200/80 shadow-sm hover:border-brand-blue-deep hover:shadow-md hover:-translate-y-0.5 group-hover/info:border-brand-blue-deep px-4 py-2 rounded-xl transform transition-all duration-300" tabindex="0">
      <span class="font-extrabold text-brand-dark tracking-tight text-[13px] sm:text-sm group-hover/info:text-brand-blue-deep transition-colors">{sidebarTitle}</span>
      <svg class="w-4 h-4 text-brand-blue-deep shrink-0 transition-transform duration-300 group-hover/info:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
  approxDisclaimer: string;
}

const { totalCountLabel, approxDisclaimer } = Astro.props;
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

  <div class="flex flex-col items-end gap-1.5 w-full sm:w-auto shrink-0">
    <div class="text-right bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm w-full flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-end">
      <span class="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-1">{totalCountLabel}</span>
      <span id="top-cohort-size" class="text-2xl sm:text-3xl font-black text-brand-blue-deep leading-none min-h-[36px]"></span>
    </div>

    {approxDisclaimer && (
      <span class="text-[10px] text-gray-400 font-medium px-2 flex items-center gap-1">
        <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        {approxDisclaimer}
      </span>
    )}
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

