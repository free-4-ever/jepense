import type { PageLoad } from '../$types';

export const load = (({ data }) => {
	return { ...data, claimDrawer: true, title: 'School', description: 'Books read or reading.' };
}) satisfies PageLoad;
