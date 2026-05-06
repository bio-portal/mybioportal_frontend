// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- This is the new v5/v6 loader

const team = defineCollection({
  // Tell Astro exactly where to load these files from
  loader: glob({ pattern: "*.{yaml,yml}", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const news = defineCollection({
  // Tell Astro to load markdown files from the news folder
  loader: glob({ pattern: "*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { team, news };
