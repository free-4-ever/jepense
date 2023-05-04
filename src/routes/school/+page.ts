import type { PageLoad } from '../$types';

export const csr = false;

export const load = (({ data }) => {
	return { quotes: data.quotes, claimDrawer: true, title: 'School', description: 'Books read or reading.' };
}) satisfies PageLoad;
