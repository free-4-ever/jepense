import prisma from '$lib/db';
import type { PageServerLoad } from './$types';

// export const ssr = false;

export const load = (async ({ params, request }) => {
	console.log('here: ' + request.headers.get('user-agent'))
	const post = await prisma.post.findFirst({
      where: {
         slug:  params.slug
      },
      select: {
         id: true, title: true, slug: true, content: true, createdAt: true
      }
	});

	return {
		post: post,
		title: post?.title,
		description: post?.content,
	};
}) satisfies PageServerLoad;
