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
	// const data = await event.request.formData();
	// if (typeof event.locals.user.name == 'string') {
	// 	const user = await prisma.user.findFirstOrThrow({
	// 		where: {
	// 			username: event.locals.user.name
	// 		}
	// 	});

	// 	let title: string = postJson.blocks[0].data.text;

	// 	if (user != null) {
	// 		const post = await prisma.post.create({
	// 			data: {
	// 				// id: 1,
	// 				userId: user.id,
	// 				title: title,
	// 				slug: slugify(title),
	// 				content: JSON.stringify(postJson),
	// 				published: true
	// 			}
	// 		});
	// 	}

	// 	return json({
	// 		success: true
	// 	});
	// }

	return json({
		up: up,
		down: down
	});
}) satisfies RequestHandler;
