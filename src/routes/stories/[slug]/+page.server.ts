import prisma from '$lib/db';
import type { PageServerLoad } from './$types';

export const ssr = false;

export const load = (async ({ params }) => {
	const post = await prisma.post.findFirst({
      where: {
         slug:  params.slug
      },
      select: {
         title: true, slug: true, content: true, createdAt: true
      }
	});

	return {
		post: post,
		title: post?.title,
		description: 'My posts and stories.'
	};
}) satisfies PageServerLoad;
