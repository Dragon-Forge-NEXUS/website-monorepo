import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    pfp: z.string().url(),
    signature: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
