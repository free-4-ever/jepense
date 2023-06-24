import type { RequestHandler } from './$types';
import { json, fail } from '@sveltejs/kit';
import prisma from '$lib/db';
import { slugify } from '../../helpers';

export const POST = (async (event) => {
	let postJson = await event.request.json();
	// const data = await event.request.formData();
	const user = await prisma.user.findFirstOrThrow({
		where: {
			userAuthToken: event.cookies.get('session')
		}
	});

	let title: string = postJson.blocks[0].data.text;

	if (user != null) {
		const post = await prisma.post.create({
			data: {
				userId: user.id,
				title: title,
				slug: slugify(title),
				content: JSON.stringify(postJson),
				published: true
			}
		});
	}

	return json({
		success: true
	});
}) satisfies RequestHandler;
