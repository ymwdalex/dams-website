import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		meetupNumber: z.number().optional(),
		category: z.enum(['meetup', 'datacafe']).default('meetup'),
		location: z.string().optional(),
		coverPhoto: z.string().optional(),
		photos: z.array(z.string()).optional(),
		photoFolder: z.string().optional(),
	}),
});

export const collections = { blog };
