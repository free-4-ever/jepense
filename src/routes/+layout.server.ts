import type { LayoutServerLoad } from './$types';
// export function load({ route }) {
// 	console.log(route.id);
//    return {
//       posts: [
//          {title: 'Ozy'}
//       ]
//    } // '/a/[b]/[...c]'
// }
export const load = (async ({ route }) => {
	return {
		posts: [
			{ title: 'Ozy' },
			{
				title: 'world is changing!'
			},
			{ title: 'but why?' },
		]
	};
}) satisfies LayoutServerLoad;
