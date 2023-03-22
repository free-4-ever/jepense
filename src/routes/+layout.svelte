<script lang="ts">
	import type { LayoutServerData } from './$types';
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import './styles.postcss';
	import { fade, fly } from 'svelte/transition';

	export let data: LayoutServerData;
</script>

<svelte:head>
	<title>{$page.data.title} | JePense</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<div class="app">
	<Header />

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
		grid-template-rows: 20vh auto;

	}

	main {
		display: grid;
		grid-template-columns: auto 20%;
		/* grid-template-areas: 'main main main drawer'; */
		/* column-gap: 0.5rem; */
		/* padding: 0.1rem; */
		width: 100%;
		min-height: 81vh;
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
</style>
