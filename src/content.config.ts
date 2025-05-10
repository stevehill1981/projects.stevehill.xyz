import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().url(),
    technologies: z.array(z.string()),
  })
});

export const collections = { projects }; 