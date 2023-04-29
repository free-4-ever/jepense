<script lang="ts">
	import type { Comment } from '@prisma/client';

	export let comments: Comment[] | undefined;
</script>

<div id="component">
	<h3>Comments</h3>
	{#if comments != undefined}
		{#each comments as comment}
			<div class="comment">
				<div class="from">{comment.name}</div>
				<p>
					{comment.content}
				</p>
				<div class="date">
					{comment.createdAt.toLocaleDateString()}
				</div>
			</div>
		{/each}
	{/if}
	<!-- <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, recusandae numquam quia
      eveniet nobis non repellat fuga natus, soluta, nostrum aperiam quas rerum libero voluptatem labore
      ipsum ad ratione. Enim.
   </p>
   <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestias assumenda magni magnam
      explicabo, perspiciatis ea delectus, optio inventore, aspernatur error eum ullam nobis quaerat
      numquam vitae. Sequi, impedit eum.
   </p> -->
</div>

<style lang="postcss">
	h3 {
		margin-top: 0;
		padding: 1rem;
	}
	#component {
		height: 100%;
		background-color: var(--grey2);
		/* box-shadow: 0px 9px 20px rgb(0 0 0 / 12%); */
		/* transition: all 3s; */
	}
	.comment {
		position: relative;
		margin: 1rem 0.5rem;
		padding: 0.3rem .5rem;
		border-left: 5px solid transparent;
		/* border-i */
		border-image: var(--em-gr) 5%;
		/* border-style:groove; */
		/* border-radius: 5px; */
	}
	.date {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.from {
		/* font-size: larger; */
		font-weight:600;
	}
</style>
