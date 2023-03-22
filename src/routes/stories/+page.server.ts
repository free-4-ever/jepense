import prisma from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const posts = await prisma.post.findMany();
	

	// const op = [
	// 	{
	// 		title: `Ozymandias`,
	// 		body: `A beautiful poem by Percy Bys Shelly`,
	// 		image: 'queen.jpg'
	// 	},
	// 	{
	// 		title: 'Olysis',
	// 		body: "Come my friends, it's not too late to seek a newer world",
	// 		image: null
	// 	}
	// ];
	return {
		posts: posts,
		title: 'Stories',
		description: 'My posts and stories.'
	};
}) satisfies PageServerLoad;
