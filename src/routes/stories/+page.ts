import type { PageLoad } from './$types';
import drawer from './Categories.svelte';

export const load = (({ data }) => {
	return {
		posts: data.posts,
		title: data.title,
		description: data.description,
		drawer: drawer
	};
}) satisfies PageLoad;
