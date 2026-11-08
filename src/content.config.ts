import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({ entry, data }) => typeof data.slug === 'string' && data.slug
      ? data.slug
      : entry.replace(/^(notes|tech)\//, '').replace(/\.md$/, '').toLowerCase().replace(/\s+/g, '-'),
  }),
  schema: z.object({
    title: z.string(), description: z.string(),
    pubDate: z.coerce.date(), updatedDate: z.coerce.date().optional(),
    category: z.string(), tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false), techShare: z.boolean().default(false),
    shareGroup: z.enum(['troubleshooting', 'tools', 'retrospective']).optional(),
    seriesOrder: z.number().int().positive().optional(),
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    label: z.string().optional(),
    status: z.enum(['计划中', '进行中', '持续迭代', '已完成']).default('计划中'),
    tech: z.array(z.string()).default([]),
    milestone: z.string().optional(),
    repository: z.string().url().optional(),
    note: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().int().default(100),
    draft: z.boolean().default(false),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    note: z.object({ slug: z.string(), label: z.string() }).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, updates };
