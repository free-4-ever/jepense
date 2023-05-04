import drawer from './Gallery.svelte';

export function load() {
	return { drawer, showDrawer: false, title: 'Home', claimDrawer: true };
}
