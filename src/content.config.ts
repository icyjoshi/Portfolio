/* ============================================================
   CONTENT SCHEMAS

   Three collections, three folders:

     src/content/work/     one .md file  = one project / case study
     src/content/lab/      one .md file  = one short Lab post
     src/content/writing/  one .md file  = one article or essay

   The frontmatter at the top of each file is validated against the
   schemas below. If you mistype a field, the build tells you exactly
   which file and which line — it will not silently publish something
   broken.

   Copy src/content/work/_TEMPLATE.md.txt to start a new project.
   ============================================================ */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Honest labelling of what the work actually is. Non-negotiable:
   speculative work must never read as client work. */
const projectType = z.enum([
  'professional', // paid / client / employed work
  'independent', // self-initiated strategic project
  'speculative', // hypothetical campaign for a brand I don't work with
  'experiment', // small personal test
]);

const businessModel = z.enum(['B2B', 'B2C', 'D2C', 'B2B2C', 'NA']);

/* Which accent a project uses. Keeps colour intentional rather than
   random — a project keeps the same accent everywhere it appears. */
const accent = z.enum(['pink', 'yellow', 'cyan', 'lime', 'ink']);

const status = z.enum([
  'published', // finished, appears in Work
  'building', // appears in "Currently in the lab"
  'planned', // appears in "Currently in the lab" as queued
]);

/* A number with the context that makes it mean something.
   Bare vanity metrics are not allowed anywhere on this site. */
const metric = z.object({
  value: z.string(), // "400%"
  label: z.string(), // "weekly active user growth"
  context: z.string().optional(), // "Cogent Infotech, 2025"
});

const link = z.object({
  label: z.string(),
  href: z.string(),
});

const image = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),

    type: projectType,
    status: status.default('published'),

    /* Context chips shown in the case-study hero */
    org: z.string().optional(), // "Cogent Infotech" — omit for independent work
    role: z.string(),
    industry: z.string(),
    businessModel: businessModel.default('NA'),
    capabilities: z.array(z.string()).default([]),

    /* Dates. `date` sorts; `period` is what humans read. */
    date: z.coerce.date(),
    period: z.string().optional(), // "Dec 2024 – Jul 2025"

    /* Presentation */
    featured: z.boolean().default(false),
    order: z.number().default(100), // lower = earlier
    accent: accent.default('pink'),
    thumbnail: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),

    /* Cards + previews */
    summary: z.string(),

    /* Results.
       `metrics` = things that actually happened. Real work only.
       `measurement` = what I *would* measure. Speculative work only.
       The template refuses to show fabricated outcomes. */
    metrics: z.array(metric).default([]),
    measurement: z.array(z.string()).default([]),

    /* The 30-second version, shown at the end of every case study */
    tldr: z
      .object({
        problem: z.string(),
        approach: z.string(),
        impact: z.string(),
      })
      .optional(),

    gallery: z.array(image).default([]),
    links: z.array(link).default([]),

    /* Set true to keep a file in the repo but off the live site */
    draft: z.boolean().default(false),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    /* Free text, but reuse existing values so filters stay tidy:
       Brand breakdown · Copy experiment · Campaign idea ·
       Ad test · Funnel breakdown · Marketing observation */
    category: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    accent: accent.default('pink'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    kind: z.enum(['essay', 'article', 'observation']).default('essay'),
    /* Where it was published, if it was published elsewhere */
    publication: z.string().optional(),
    /* If set, the card links out instead of to an on-site page */
    externalUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, lab, writing };
