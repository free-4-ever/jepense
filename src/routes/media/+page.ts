import type { PageLoad } from './$types';
export const csr = false;

	// import anne from '$lib/videos/anne.mp4';

export const load: PageLoad = () => {
	return {
		title: 'Media',
      claimDrawer: true,
		// anne: anne,
	};
};
