import prisma from '$lib/db';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load = (async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	const quotes = await prisma.quote.findMany({
		select: {
			body: true,
			great: true
		}
	});

	const selections = await prisma.selection.findMany({
		select: {
			body: true,
			book: true
		}
	});

	const greats = await prisma.great.findMany({
		orderBy: {
			name: 'asc'
		}
	})

	// console.log(selections)

	return {
		quotes,
		selections,
		greats,
	};
}) satisfies PageServerLoad;
