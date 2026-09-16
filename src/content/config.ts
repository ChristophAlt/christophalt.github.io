import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    abbr: z.string().optional(),
    date: z.coerce.date(),
    type: z.enum(["inproceedings", "article", "phdthesis"]),
    selected: z.boolean().default(false),
    pdf: z.string().optional(),
    website: z.string().optional(),
    slides: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    inline: z.boolean().default(true),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, work, publications, news };
