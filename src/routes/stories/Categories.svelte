<script lang="ts">
   import { page } from '$app/stores';
	// import EditorJS from '@editorjs/editorjs';
</script>

<div>
	{#each $page.data.posts as post}
		<div class="sideItem">
			{post.title}
		</div>
	{/each}
</div>