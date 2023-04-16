<script lang="ts">
	import type { PageServerData } from './$types';
	// import EditorJS from '@editorjs/editorjs';
	export let data: PageServerData;
</script>

<div class="row jusitfy jc">
	<div class="col-m-8 col-s-9 col-l-7 f-lll">
		{#each data.posts as post}
		<div id="postBrief">
			<h4>
				<a href="/stories/{post.slug}">
					{post.title}
				</a>
			</h4>
			<span>
				{post.createdAt.toLocaleDateString()}
			</span>
		</div>
			<!-- {#if post.image != null}
				<img
					fit="contain"
					src={post.image}
					height="100"
					width="450"
					alt="Ozymandias"
					class="mx-auto my-lg"
				/>
			{/if}
			<div class="f-ll f-b">{post.title}</div> -->
		{/each}
	</div>
</div>

<style>
	#postBrief {
		position: relative;
	}

	#postBrief span {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>