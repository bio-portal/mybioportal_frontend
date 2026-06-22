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


