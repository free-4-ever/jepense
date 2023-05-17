import prisma from '$lib/db';
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

export const load = (async ({ locals, url, request, cookies }) => {
	// const session = locals.session
	const session = cookies.get('session')
	// console.log('session: ' + session)
	let user;
	if (session) {
		user = await prisma.user.findUnique({
			where: { userAuthToken: session },
			select: { username: true }
		});
	}

	return {
		user:  user,
		url: url.pathname
	};
}) satisfies LayoutServerLoad;
