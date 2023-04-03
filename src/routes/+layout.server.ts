import type { LayoutServerLoad } from './$types';
// export function load({ route }) {
// 	console.log(route.id);
//    return {
//       posts: [
//          {title: 'Ozy'}
//       ]
//    } // '/a/[b]/[...c]'
// }
export const prerender = true;

export const load = (async ({ locals, url }) => {
	return {
      user: locals.user,
		posts: [
			{ title: 'Ozy' },
			{
				title: 'world is changing!'
			},
			{ title: 'but why?' },
		],
		url: url.pathname
	};
}) satisfies LayoutServerLoad;
