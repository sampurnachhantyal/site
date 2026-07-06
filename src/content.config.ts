import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Preserve the URL slugs that were previously read from each file's
// frontmatter `slug` field (legacy content-collection behavior).
const idFromSlug = ({ data, entry }: { data: Record<string, unknown>; entry: string }) =>
    typeof data.slug === "string" ? data.slug : entry.replace(/\.[^.]+$/, "");

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog", generateId: idFromSlug }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        speciality: z.string(),
        authorImage: z.string(),
        image: z.string(),
        tags: z.array(z.string())
    })
});

const career = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/career", generateId: idFromSlug }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()).optional()
    })
});

export const collections = { blog, career };
