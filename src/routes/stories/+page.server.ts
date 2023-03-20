import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		posts: [
			{
				title: `Ozymandias`,
				body: `A beautiful poem by Percy Bys Shelly`
			},
			{ title: 'Olysis', body: "Come my friends, it's not too late to seek a newer world" }
		],
		meta: {
			title: 'Wow',
			description: ''
		}
	};
}) satisfies PageServerLoad;
