
import prisma from '$lib/db';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
export const prerender = false;
export const csr = false;

/** @type {import('./$types').Actions} */
export const actions = {
	submit: async ({ request }) => {
		const data = await request.formData();
		// console.log('type of firstname is: ' + typeof data.get('firstname'));
		const schema = zfd.formData({
			firstname: zfd.text(z.string().min(3, 'Too short a name!')),
			lastname: zfd.text(z.string().optional()),
			email: zfd.text(z.string().email()),
			message: zfd.text(z.string().max(1000, 'Too long a message!').min(10, 'Message is too short!'))
		});

		// parse the validation schema
		const validation = schema.safeParse(data);

		if (!validation.success) {
			const resData = {
				data: Object.fromEntries(data),
				errors: validation.error.flatten().fieldErrors
			};

			return fail(400, resData);
		}

		await prisma.message.create({
			data: {
				name: `${data.get('firstname')} ${data.get('lastname')}`,
				email: String(data.get('email')),
				content: String(data.get('message'))
			}
		});

		return {
			success: true
		};
	}
};
