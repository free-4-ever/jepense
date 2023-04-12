import type { PageLoad } from './$types';
export const csr = false;

export const load: PageLoad = () => {
	return {
		title: 'Media',
      claimDrawer: true,
	};
};
