import fs from 'fs';

// import('fs');

/** @type {import('./$types').Actions} */
export const actions = {
	submit: async ({ request }) => {
		const data = await request.formData();
		// console.log(data);
		const content = `Email:  ${data.get('email')}\n
		Message: ${data.get('subject')}
		`;

		fs.writeFile(`${data.get('firstname')}-${data.get('lastname')}.txt`, content, (err) => {
			if (err) {
				console.error(err);
			}
			// file written successfully
		});

		return {
			success: true
		};
	}
};
