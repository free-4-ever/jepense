import prisma from '$lib/db';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
// import fs from 'fs';
export const prerender = false;
export const csr = false;
// import('fs');

/** @type {import('./$types').Actions} */
export const actions = {
	submit: async ({ request }) => {
		const data = await request.formData();
		console.log('type of firstname is: ' + typeof data.get('firstname'));
		// const schema = zfd.formData({
		// 	firstname: zfd.text(z.string().min(3, 'Too short a name!')),
		// 	lastname: zfd.text(z.string().optional()),
		// 	email: zfd.text(z.string().email()),
		// 	message: zfd.text(z.string().max(1000, 'Too long a message!'))
		// });

		const rules = z.object({
			firstname: z.coerce.string().min(3, 'Too short a name!'),
			lastname: z.coerce.string().optional(),
			// email: z.coerce.string().regex(''),
			message: z.coerce.string().max(1000, 'Too long a message!')
		});

		// parse the validation schema
		const validation = rules.safeParse(data);

		if (!validation.success) {
			const resData = {
				data: Object.fromEntries(data),
				errors: validation.error.flatten().fieldErrors
			};
			// return resData;
			console.log(resData);
			return fail(400, resData);
		}

		const msg = await prisma.message.create({
			data: {
				name: `${data.get('firstname')} ${data.get('lastname')}`,
				email: String(data.get('email')),
				content: String(data.get('message'))
			}
		});
		// const content = `Email:  ${data.get('email')}\n
		// Message: ${data.get('subject')}
		// `;

		// fs.writeFile(`${data.get('firstname')}-${data.get('lastname')}.txt`, content, (err) => {
		// 	if (err) {
		// 		console.error(err);
		// 	}
		// 	// file written successfully
		// });

		return {
			success: true
		};
	}
};
