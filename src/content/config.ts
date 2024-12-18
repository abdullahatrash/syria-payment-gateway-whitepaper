import { defineCollection, z } from 'astro:content';

const whitepaperSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const whitepaperCollection = defineCollection({
  type: 'content',
  schema: whitepaperSchema,
});

export const collections = {
  'en': whitepaperCollection,
  'ar': whitepaperCollection,
}; 