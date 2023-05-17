import prisma from "$lib/db";
import type { PageServerLoad } from "./$types";

export const prerender = false;

export const load = (async ({  }) => {
	// console.log('here: ' + request.headers.get('user-agent'));
	const quotes = await prisma.quote.findMany({
		select: {
         body: true,
         great: true
		}
	});
	// console.log(post?.votes);

	return {
      quotes
	};
}) satisfies PageServerLoad;
