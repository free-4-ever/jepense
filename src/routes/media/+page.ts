import type { PageLoad } from './$types';
export const csr = false;

// import anne from '$lib/videos/anne.mp4';

export const load: PageLoad = () => {
	return {
		title: 'Media',
		claimDrawer: true,
		music: [
			{
				title: 'Siccar point',
				desc: "Siccar Point is a rocky promontory in the county of Berwickshire on the east coast of Scotland. It is famous in the history of geology for Hutton's Unconformity found in 1788, which James Hutton regarded as conclusive proof of his uniformitarian theory of geological development.",
				src: 'SiccarPoint.mp3'
			},
			{
				title: 'Braveheart (piano)',
				desc: "",
				src: 'Braveheart.mp3'
			}
		]
		// anne: anne,
	};
};
