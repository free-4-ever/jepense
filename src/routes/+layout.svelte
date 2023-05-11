<script lang="ts">
	import type { LayoutServerData } from './$types';
	import { page } from '$app/stores';
	import './styles.css';
	import { fade, fly, slide } from 'svelte/transition';
	import Header from './Header.svelte';
	import Drawer from './Gallery.svelte';
	import { drawerOpen } from './store';
	import Modal from './Modal.svelte';
	import { onMount } from 'svelte';
	// import Analytics from '$lib/analytics.svelte';
	// import '$lib/matomo';

	export let data: LayoutServerData;

	// drawerOpen.subscribe((value) => {
	// 	countValue = value;
	// });
	let mobNav = false;
	// let headerHeight: number = 0;

	$: width = mobNav ? '250px' : '0';

	// const handleBodyClick = () => {
	// 	// alert('click');
	// 	if (mobNav) mobNav = false;
	// 	// alert(width);
	// 	// console.log(width);
	// };
	// let mql = undefined;
	// if (browser) {
	// 	mql = window.matchMedia('(min-width: 992px)');
	// 	console.log(headerHeight);
	// }

	let tw = 0;
	// $: doubleCol = mql?.matches && !$page.data.claimDrawer ? true : false;
	$: doubleCol = tw >= 992 && !$page.data.claimDrawer ? true : false;

	let needConsent = false;
	onMount(() => {
		// const mql = window.matchMedia('(min-width: 768px)');
		// doubleCol = mql.matches && !$page.data.claimDrawer ? true : false;
		if (typeof window.isAdsDisplayed == 'undefined') {
			needConsent = true;
		}
	});
	// alert(tw)

	// let mobileView = mql.matches;

	// function visibilitychange(event) {
	// 	// alert(event)
	// 	console.log(event);
	// }
</script>

<svelte:head>
	<title>{$page.data.title} | JePense</title>
	<meta name="description" content={$page.data.description} />
	<script src="/matomo.js"></script>
</svelte:head>

<svelte:body on:click={() => (mobNav ? (mobNav = false) : void 0)} />

<svelte:window bind:innerWidth={tw} />

<!-- <svelte:window on:visibilitychange={visibilitychange} /> -->
<!-- <Analytics /> -->
{#if needConsent}
	<Modal shakingEnabled>
		<div slot="title">Ad Blocker 🫣</div>
		<div slot="content">
			We don't have any marketing/ads in place, still your add blocker extension(s) is interrupting
			our essential features. To continue please disable on this site and refresh the page.
		</div>
	</Modal>
{/if}
<div class="app" class:b={needConsent}>
	<div id="mySidenav" class="sidenav" style="width: {width}">
		<a href={void 0} class="closebtn" on:click={(e) => (mobNav = false)}>&times;</a>
		<a href="/">Home</a>
		<a href="/stories">Stories</a>
		<a href="/media">Media</a>
		<a href="/school">School</a>
		<a href="/me">Me</a>
	</div>
	<Header on:openNav={(e) => (mobNav = true)} />

	<main class:doubleCol>
		<div>
			<div id="tablet">
				<!-- <div class="row jusitfy items-x-center">
					<div class="col-m-10 col-s-11 col-l-9 f-lll"> -->
				{#key data.url}
					<div in:fly={{ y: 50, duration: 1000 }}>
						<slot />
					</div>
				{/key}
				<!-- </div>
				</div> -->
			</div>
		</div>
		<!-- {#if $page.data.drawer} -->
		<!-- <aside> -->
		{#if $drawerOpen}
			<div transition:slide class="drawerWrapper">
				<svelte:component this={$page.data.drawer} />
			</div>
		{/if}
		<!-- </aside> -->
		<!-- {/if} -->
	</main>
</div>

<style lang="postcss">
	.app {
		display: grid;
		/* flex-direction: column; */
		min-height: 100vh;
		grid-template-rows: auto;
	}

	.b {
		/* opacity: .1; */
		filter: blur(3px);
		height: 100vh;
		overflow-y: hidden;
	}

	main {
		display: grid;
		position: relative;
		grid-template-columns: auto;
		/* grid-template-areas: 'main main main drawer'; */
		/* column-gap: 0.5rem; */
		/* padding: 0.1rem; */
		width: 100%;
		min-height: 80vh;
		/* max-width: 64rem; */
		margin: 0 auto;
		background-color: var(--brown2);

		& div:nth-child(2) {
			background-color: red;
		}
	}

	.drawerWrapper {
		/* transition: all 1s; */
		box-shadow: 0px 9px 20px rgb(0 0 0 / 12%);
	}

	main > div {
		/* padding: 1rem;
		border: 1px solid; */
		/* grid-area: main; */
	}

	aside {
		opacity: 0.8;
		/* background-color: red; */
		line-height: 1rem;
		/* display: flex;
		flex-direction: column; */
		/* grid-area: drawer; */
		/* padding: 4px 8px; */
		/* border: 1px solid; */
		& .column > div {
			margin-bottom: 1rem;
		}

		& .column {
			color: red;
		}
	}

	.sidenav {
		height: 100%;
		/* width: 0; */
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		background-color: #111;
		overflow-x: hidden;
		transition: 0.5s;
		padding-top: 60px;
	}

	.sidenav a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 25px;
		color: #818181;
		display: block;
		transition: 0.3s;
	}

	.sidenav a:hover {
		color: #f1f1f1;
	}

	.sidenav .closebtn {
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		margin-left: 50px;
	}

	.doubleCol {
		grid-template-columns: auto 25%;
	}

	/* aside div {
		margin-bottom: 3rem;
	} */

	#tablet {
		height: 100%;
		background-color: var(--brown2);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding: 2rem 1rem;
	}

	.sideItem {
		padding: 0.5rem 0.3rem;
		border-bottom: 1px solid;
	}

	@media only screen and (max-width: 600px) {
		/* main {
			grid-template-columns: auto;
		} */
		.app {
			grid-template-rows: 13vh auto;
		}

		#tablet {
			padding: 1rem 0.5rem;
		}
	}

	@media only screen and (min-width: 600px) and (max-width: 768px) {
		.app {
			grid-template-rows: 20vh auto;
		}

		main {
			min-height: 82vh;
		}

		header {
			min-height: 18vh;
		}
	}

	@media only screen and (min-width: 768px) {
		/* main {
			grid-template-columns: auto 20%;
		} */

		.app {
			grid-template-rows: 18vh auto;
			/* 22? */
		}
	}

	@media only screen and (min-width: 992px) and (min-height: 800px) {
		.app {
			grid-template-rows: 22vh auto;
			/* 22 */
		}
	}

	@media only screen and (min-width: 992px) and (max-height: 800px) {
		.app {
			grid-template-rows: 25vh auto;
			/* 22 */
		}
	}

	/* @media only screen and (min-width: 992px) {
		.app {
			grid-template-rows: 20vh auto;
		}
	} */
</style>
