<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="row jusitfy jc">
	<div class="col-m-8 col-s-9 col-l-7 f-lll">
		{#if data.posts.length}
			{#each data.posts as post}
				<div id="postBrief">
					<h4>
						<a href="/stories/{post.slug}">
							{post.title}
						</a>
					</h4>
					<div>
						{post.createdAt.toLocaleDateString()}
					</div>
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
			{:else}
			<h4 class="tc">No stories published yet! Come back later!</h4>
		{/if}
	</div>
</div>

<style>
	#postBrief {
		position: relative;
		border-radius: 10px;
		/* border: 1px solid; */
		margin-bottom: 1rem;
		background-color: var(--grey2);
		padding: 0.2rem 0.5rem;
	}

	#postBrief div:nth-child(2) {
		position: absolute;
		right: 5px;
		bottom: 5px;
		font-size: smaller;
		color: var(--emplDS);
	}
</style>
