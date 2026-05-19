import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/pages" }),
  schema: z.object({
    id: z.string(),
    hero: z.any().optional(),
    trustBar: z.any().optional(),
    steps: z.any().optional(),
    benefit: z.any().optional(),
    stats: z.any().optional(),
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
