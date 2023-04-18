<script lang="ts">
	import type { PageData } from './$types';
	import { drawerOpen } from './store';
	// import EditorJS from '@editorjs/editorjs';
	export let data: PageData;

	// function increment() {
	// 	count.update(n => n + 1);
	// }
	// data.showDrawer = true
	console.log(data.showDrawer)

	const toggleDrawer = () => {
		// data.showDrawer = !data.showDrawer
		drawerOpen.set(!$drawerOpen)
		console.log(drawerOpen)
	}
</script>

<svelte:head>
	<title>Home | JePense</title>
	<meta name="description" content="Je Pense" />
</svelte:head>

<div class="row jusitfy items-x-center">
	<div class="col-m-10 col-s-11 col-l-9 f-lll">
		<div class="tc">
			<h3>Welcome to Je Pense.</h3>
			<button on:click={toggleDrawer}>hope</button>
			<p>
				This is a personal space I use to share ideas, ideals, and stuff I like. <br />
				Hope you can find something useful here.
			</p>

			<blockquote cite="http://www.worldwildlife.org/who/index.html">
				For 60 years, WWF has worked to help people and nature thrive. As the world's leading
				conservation organization, WWF works in nearly 100 countries. At every level, we collaborate
				with people around the world to develop and deliver innovative solutions that protect
				communities, wildlife, and the places in which they live. <br /> <br />
				- SO
			</blockquote>
		</div>
	</div>
</div>

<style>
	p {
		font-size: large;
	}

	blockquote {
		font-size: larger;
		margin-top: 3rem;
	}
</style>
