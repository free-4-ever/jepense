import prisma from '$lib/db';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load = (async ({ params, request, locals, platform, route, url, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	const posts = await prisma.post.findMany({
		select: {
			id: true,
			title: true,
			slug: true,
			createdAt: true
		},
		orderBy: {
			createdAt: 'desc'
		}
	});

	return {
		posts: posts,
		title: 'Stories',
		description: 'My posts and stories.'
	};
}) satisfies PageServerLoad;
