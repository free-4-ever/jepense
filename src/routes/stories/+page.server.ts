import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		post: {
			title: `Ozymandias`,
			body: `A beautiful poem by Percy Bys Shelly`
		},
		meta: {
			title: 'Wow',
			description: ''
		}
	};
}) satisfies PageServerLoad;
