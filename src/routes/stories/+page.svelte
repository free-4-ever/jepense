<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<!-- <svelte:head>
	<title>Stories | JePense</title>
	<meta name="description" content="My posts and stories" />
</svelte:head> -->

<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
	<p-img
		size="contain"
		src="/jepense/img/ozymandias.jpg"
		:height="100"
		:width="250"
		alt="Ozymandias"
		class="mx-auto my-lg"
	/>
	{#each data.posts as post}
	<span class="f-ll f-b"> {post.title} </span>
	{/each}
</div>
