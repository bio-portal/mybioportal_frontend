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
