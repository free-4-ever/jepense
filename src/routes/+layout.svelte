<script lang="ts">
	import type { LayoutServerData } from './$types';
	import { page } from '$app/stores';
	import './styles.css';
	import { fly, slide } from 'svelte/transition';
	import Header from './Header.svelte';
	import { drawerOpen } from './store';
	import Modal from './Modal.svelte';
	import { onMount } from 'svelte';
	import Analytics from '$lib/analytics.svelte';

	export let data: LayoutServerData;

	// drawerOpen.subscribe((value) => {
	// 	countValue = value;
	// });
	let mobNav = false, iw = 0, x0, x1, y0, y1;
	// let headerHeight: number = 0;

	$: width = mobNav ? '250px' : '0';

	// $: doubleCol = mql?.matches && !$page.data.claimDrawer ? true : false;
	$: doubleCol = iw >= 992 && !$page.data.claimDrawer ? true : false;

	let needConsent = false;
	onMount(() => {
		// alert();
		// const mql = window.matchMedia('(min-width: 768px)');
		// doubleCol = mql.matches && !$page.data.claimDrawer ? true : false;
		if (
			typeof window.isAdsDisplayed == 'undefined' &&
			!['/cockpit', '/slogin'].includes(window.location.pathname)
		) {
			needConsent = true;
		}
	});

	function startMove (e) {
		x0 = e.changedTouches[0].clientX
		y0 = e.changedTouches[0].clientY
	}

	function endMove (e) {
		x1 = e.changedTouches[0].clientX
		y1 = e.changedTouches[0].clientY

		if (x1 < x0) {
			mobNav = false
		}

		if (x1 - x0 >= 40 && Math.abs(y1 - y0)<= 50) {
			mobNav = true
		}
	}
</script>

<svelte:head>
	<title>{$page.data.title} | JePense</title>
	<meta name="description" content={$page.data.description} />
	<script src="/matomo.js"></script>
	<meta name="msvalidate.01" content="9FB5C939F46DC21D4176F4490B6C1F6A" />
</svelte:head>

<svelte:body on:click={() => (mobNav ? (mobNav = false) : void 0)} />

<svelte:window bind:innerWidth={iw} />

<!-- <svelte:window on:visibilitychange={visibilitychange} /> -->
<Analytics />
{#if needConsent}
	<Modal shakingEnabled>
		<div slot="title">Ad Blocker 🫣</div>
		<div slot="content">
			We don't have any marketing/ads in place, still your add blocker extension(s) is interrupting
			our essential features. To continue please disable on this site and refresh the page.
		</div>
	</Modal>
{/if}
<div class="app" class:b={needConsent} on:touchstart={startMove}  on:touchend={endMove}>
	<div id="mySidenav" class="sidenav" style="width: {width}" on:touchstart={(e) => x0 = e.changedTouches[0].clientX}  on:touchend={endMove}>
		<a href={void 0} class="closebtn" on:click={(e) => (mobNav = false)}>&times;</a>
		<a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a>
		<a href="/stories" aria-current={$page.url.pathname === '/stories' ? 'page' : undefined}
			>Stories</a
		>
		<a href="/media" aria-current={$page.url.pathname === '/media' ? 'page' : undefined}>Media</a>
		<a href="/school" aria-current={$page.url.pathname === '/school' ? 'page' : undefined}>School</a
		>
		<a href="/me" aria-current={$page.url.pathname === '/me' ? 'page' : undefined}>Me</a>
	</div>
	<Header on:openNav={(e) => (mobNav = true)} />

	<main class:doubleCol>
		<div>
			<div id="tablet" class:oh={!$page.url.pathname.includes('/stories/')}>
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
		{#if $drawerOpen}
			<div transition:slide class="drawerWrapper">
				<svelte:component this={$page.data.drawer} />
			</div>
		{/if}
	</main>
</div>

<style lang="postcss">
	.app {
		display: grid;
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
		width: 100%;
		/* min-height: 80vh; */
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

	#tablet {
		height: 100%;
		background-color: var(--brown2);
		display: flex;
		flex-direction: column;
		padding: 2rem 1rem;
	}

	.oh {
		overflow: hidden;
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
			/* following rule caused sticky elemetns not to work properly when defined for bigger screens */
			overflow: hidden;
		}
	}

	@media only screen and (max-width: 600px) {
		a[aria-current='page'] {
			color: var(--second);
		}
	}

	@media only screen and (min-width: 600px) and (max-width: 768px) {
		.app {
			grid-template-rows: 20vh auto;
		}

		/* main {
			min-height: 82vh;
		}

		header {
			min-height: 18vh;
		} */
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
