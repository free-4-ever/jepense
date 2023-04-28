import type { RequestHandler } from './$types';
import { json, fail } from '@sveltejs/kit';
import prisma from '$lib/db';

export const POST = (async ({ request, getClientAddress, platform }) => {
	// if (event.locals.user.name) {
	// }
	const data = await request.json();

	// console.log(postJson);
	// console.log(getClientAddress())
	// console.log(platform)
	// console.log(request.headers.get('user-agent'))

	await prisma.vote.upsert({
		where: {
			ip_postId: {
				ip: getClientAddress(),
				postId: data.post
			}
		},
		create: {
			postId: data.post,
			ip: getClientAddress(),
			value: data.vote
		},
		update: {
			value: data.vote
		}
	});

	const up = await prisma.vote.count({
		where: {
			postId: data.post,
			value: 1
		}
	});

	const down = await prisma.vote.count({
		where: {
			postId: data.post,
			value: -1
		}
	});

	return json({
		up: up,
		down: down
	});
}) satisfies RequestHandler;
