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
			{ title: 'Ozyymandias is the title of an epic' },
			{
				title: 'world is changing!'
			},
			{ title: 'shall we ever see the end of ' },
			{ title: 'shall we ever see the end of ' },
			{ title: 'lorem ipsum dolor samit is  ' },
			{ title: 'What an epic end to everything! ' },
		],
		url: url.pathname
	};
}) satisfies LayoutServerLoad;
