<script lang="ts">
	import type { LayoutServerData } from './$types';
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import './styles.postcss';
	import { fade, fly } from 'svelte/transition';

	export let data: LayoutServerData;
	let mobNav = false;
	$: width = mobNav ? '250px' : '0';
	// function toggleNav () {
	// 	if (mobNav) {
	// 		mobNav = false;
	// 		width = '0';
	// 	} else {
	// 		mobNav = true;
	// 		width = '250px';
	// 	}
	// }

	const handleBodyClick = () => {
		// alert('click');
		if (mobNav)
			mobNav = false;
		// alert(width);
		console.log(width);

	};
</script>

<svelte:head>
	<title>{$page.data.title} | JePense</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<svelte:body on:click={() => mobNav ? mobNav = false : void(0)} />

<div class="app" >
	<div id="mySidenav" class="sidenav" style="width: {width}">
		<a href="{void(0)}" class="closebtn" on:click="{e => mobNav = false}">&times;</a>
		<a href="/">Home</a>
		<a href="/stories">Stories</a>
		<a href="/animes">Animes</a>
		<a href="/books">Books</a>
		<a href="/contact">Contact</a>
		<a href="/me">Me</a>
	</div>
	<Header on:openNav={e => mobNav = true} />

	<main>
		<div>
			<div id="tablet">
				{#key $page}
					<div in:fly={{ y: 100, duration: 1000 }}>
						<slot />
					</div>
				{/key}
			</div>
		</div>
		<aside>
			<div class="column">
				{#each data.posts as post}
					<div>
						{post.title}
					</div>
				{/each}
			</div>
		</aside>
	</main>
</div>

<style lang="postcss">
	.app {
		display: grid;
		/* flex-direction: column; */
		min-height: 100vh;
		grid-template-rows: auto;
	}

	main {
		display: grid;
		grid-template-columns: auto;
		/* grid-template-areas: 'main main main drawer'; */
		/* column-gap: 0.5rem; */
		/* padding: 0.1rem; */
		width: 100%;
		min-height: 80vh;
		/* max-width: 64rem; */
		margin: 0 auto;
		background-color: var(--tenth);
	}

	main > div {
		/* padding: 1rem;
		border: 1px solid; */
		/* grid-area: main; */
	}

	aside {
		/* display: flex;
		flex-direction: column; */
		/* grid-area: drawer; */
		padding: 4px 8px;
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
		z-index: 1;
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

	/* aside div {
		margin-bottom: 3rem;
	} */

	#tablet {
		height: 100%;
		background-color: var(--brown2);
		display: flex;
		flex-direction: column;
		align-items: center;
		/* border: 1px solid; */
		/* border-radius: 5px; */
		padding: 2rem 1rem;
		/* max-height: 81vh; */
		/* overflow-y: scroll; */
		/* box-sizing: border-box; */
	}

	@media only screen and (max-width: 600px) {
		main {
			grid-template-columns: auto;
		}

		#tablet {
			padding: 1rem 0.5rem;
		}

		/* .app {
         display: flex;
         flex-flow: row;
      } */
	}

	@media only screen and (min-width: 768px) {
		main {
			grid-template-columns: auto 20%;
		}

		.app {
			grid-template-rows: 20vh auto;
		}
	}
</style>
