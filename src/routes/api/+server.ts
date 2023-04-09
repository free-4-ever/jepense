import type { RequestHandler } from './$types';
import { json, fail } from '@sveltejs/kit';
import prisma from '$lib/db';

function slugify(text: string) {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}

export const POST = (async (event) => {
	// if (event.locals.user.name) {
	// }
	let postJson = await event.request.json();
	console.log(postJson)
	// const data = await event.request.formData();
	if (typeof event.locals.user.name == "string") {
		const user = await prisma.user.findFirstOrThrow({
			where: {
				username: event.locals.user.name
			}
		});
	
		let title : string = postJson.blocks[0].data.text;
	
		if (user != null) {
			const post = await prisma.post.create({
				data: {
					// id: 1,
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
	}

	return json({});
}) satisfies RequestHandler;
