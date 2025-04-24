import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().url(),
    technologies: z.array(z.string()),
  }),
});

export const collections = {
  'projects': projectsCollection,
}; 