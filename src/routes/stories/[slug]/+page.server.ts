import prisma from '$lib/db';
import { error, fail } from '@sveltejs/kit';
import type { Action, PageServerLoad } from './$types';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const prerender = false;

export const load = (async ({ params, setHeaders }) => {
	  setHeaders({
			'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
		});
	const post = await prisma.post.findFirst({
		where: {
			slug: params.slug
		},
		select: {
			votes: true,
			comments: {
				where: {
					approved: true
				}
			},
			id: true,
			title: true,
			slug: true,
			content: true,
			createdAt: true
		}
	});

	if (!post) {
		throw error(404, 'No such post!');
	}

	return {
		post: {
			...post,
			up: post.votes.filter((v) => v.value == 1).length,
			down: post.votes.filter((v) => v.value == -1).length,
			commentCount: post.comments.length
		},
		title: post.title,
		description: post.content
	};
}) satisfies PageServerLoad;

export const actions = {
	comment: async ({ params, cookies, request }) => {
		const data = await request.formData();

		const rules = zfd.formData({
			name: zfd.text(z.string().min(3, 'Too short a name!')),
			email: zfd.text(z.string().email()),
			comment: zfd.text(
				z.string().max(1000, 'Too long a comment!').min(7, 'Comment is too short!')
			)
		});
		// const rules = z.object({
		// 	name: z.coerce.string().min(4, 'Too short a name!'),
		// 	// email: z.coerce.string().regex(''),
		// 	comment: z.coerce.string().max(1000, 'Too long a comment!')
		// });

		const validation = rules.safeParse(data);

		if (!validation.success) {
			const resData = {
				data: Object.fromEntries(data),
				errors: validation.error.flatten().fieldErrors
			};
			return fail(400, resData);
		}

		const post = await prisma.post.findFirstOrThrow({
			where: {
				slug: params.slug
			},
			select: {
				id: true
			}
		});

		await prisma.comment.create({
			data: {
				postId: post.id,
				name: String(data.get('name')),
				email: String(data.get('email')),
				content: String(data.get('comment'))
			}
		});

		return {
			success: true
		};
	}
};
