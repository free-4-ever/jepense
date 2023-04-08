import prisma from '$lib/db';
import type { Handle } from '@sveltejs/kit';

// import { sequence } from '@sveltejs/kit/hooks';
// import type { RequestEvent } from '@sveltejs/kit';
// import prisma from '../../../../Dev/Web/JePense/src/db';

// async function auth ({ event: RequestEvent, resolve }) {
// 	if (event.url.pathname.startsWith('/stories')) {
// 		// return new Response('custom response');
//       console.log('/stories path invoked');
// 		console.log(event.getClientAddress());
// 	}

// 	const response = await resolve(event);
// 	return response;
// };
// const guardedRoutes = [
// 	'cockpit'
// ];
export const handle = (async ({ event, resolve }) => {
	let start = performance.now();
	
	const route = event.url;
	// event.locals = {
	// 	a: 'a',
	// 	b: 'b'
	// };
	// get cookies from browser
	// return new Response('BAN');


	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	const user = await prisma.user.findUnique({
		where: { userAuthToken: session },
		select: { username: true  }
	});
	// if `user` exists set `events.local`
	if (user) {
		// console.log(user);
		event.locals.user = {
			name: user.username,
		};
	}

	// if (event.url.pathname.startsWith('/custom')) {
	// 	return new Response('custom response');
	// }

	const response = await resolve(event);

	let end = performance.now();

	let responseTime = end - start;

	if (responseTime > 1000) {
		console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
	}

	// if (responseTime < 1000) {
	// 	console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`);
	// }
	return response;
}) satisfies Handle;

// export const handle = sequence(auth);