<script>
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import './styles.css';
	Header;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<div>
			<div id="tablet">
				<slot />
			</div>
		</div>
		<aside>
			<div>First</div>
			<div>Second</div>
			<div>Third</div>
		</aside>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: grid;
		grid-template-columns: auto 20%;
      /* grid-template-areas: 'main main main drawer'; */
		column-gap: 0.5rem;
		padding: 0.1rem;
		width: 100%;
		min-height: 81vh;
		/* max-width: 64rem; */
		margin: 0 auto;
		background-color: var(--tenth);
	}

	main > div {
		padding: 1rem;
		border: 1px solid;
      /* grid-area: main; */

	}

	aside {
		/* display: flex;
		flex-direction: column; */
      /* grid-area: drawer; */
		padding: 4px 8px;
		border: 1px solid;
	}

	#tablet {
		height: 100%;
		background-color: var(--brown2);
		border: 1px solid;
		border-radius: 5px;
		padding: 1rem;
      /* max-height: 81vh; */
      /* overflow-y: scroll; */
		/* box-sizing: border-box; */
	}


</style>
