import type { PageLoad } from './$types';
// import drawer from './Categories.svelte';
// import Comments from './Comments.svelte';

export const load = (({ data }) => {
	return data;
}) satisfies PageLoad;
