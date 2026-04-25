import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
  // type: 'content',
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/context/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      // refine((img) => img.width < 51200, { message: 'Imagen debe ser menor a 1200px' }),
      image: image(),
      // Relations
      // author: z.string(),
      author: reference('author'),
      // Relations
      tags: z.array(z.string()),
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  loader: glob({ pattern: '**/*.yml', base: './src/context/author' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string(),
      linkedIn: z.string(),
      github: z.string(),
      bio: z.string(),
      subtitle: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};

// name: Alice Johnson
// avatar: ./avatars/alice-johnson.webp
// twitter: alicejohnson_tech
// linkedIn: https://www.linkedin.com/in/alicejohnson-tech
// github: https://github.com/alicejohnson
// bio: 'Alice Johnson is a passionate software engineer with over 10 years of experience in the tech industry. She loves sharing her knowledge about web development and cloud computing.'
// subtitle: 'Senior Software Engineer'
