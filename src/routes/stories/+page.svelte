<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<!-- <svelte:head>
	<title>Stories | JePense</title>
	<meta name="description" content="My posts and stories" />
</svelte:head> -->

<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
	{#each data.posts as post}
		<h5>
			{post.title}
		</h5>
		{#if post.image != null}
		<img
			fit="contain"
			src="{post.image}"
			height="100"
			width="450"
			alt="Ozymandias"
			class="mx-auto my-lg"
		/>
			
		{/if}
		<div class="f-ll f-b">{post.title}</div>
	{/each}
</div>
