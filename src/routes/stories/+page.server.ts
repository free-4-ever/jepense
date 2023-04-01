import prisma from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, request, locals, platform, route, url }) => {
	const posts = await prisma.post.findMany({select: {
		id: true, title: true, createdAt: true
	}});

	// let postHeaders : string[] = [];

	// posts.forEach(post => {
	// 	postHeaders.push(post.title);
	// });
	
	// console.log('Locals \n' + locals.b);
	// console.log('platform + \n' + platform);
	// console.log('Route + \n' + route);
	// console.log('url + \n' + url.);
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
