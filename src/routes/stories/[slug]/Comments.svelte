<script lang="ts">
</script>

<div id="component">
	<h3>Comments</h3>
	{#each [1, 2, 3] as comment}
		<div class="comment">
			<div class="from">Empress Louise:</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat exercitationem enim
				sit, necessitatibus odio libero. Velit nam iure, nihil ratione ipsum neque quod quo
				veritatis sunt animi a doloribus.
			</p>
			<div class="date">2012-012-01</div>
		</div>
	{/each}
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
		padding: 0.3rem 1rem;
		border: 1px solid;
		border-radius: 5px;
	}
	.date {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.from {
		font-size: larger;
	}
</style>
