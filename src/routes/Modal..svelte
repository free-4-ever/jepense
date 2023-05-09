<div class="modal">
	<div class="body">
      <div class="title">
         <slot name="title" />
      </div>
      <hr>
      <div>
         <slot name="content"/>
      </div>
	</div>
</div>

<style lang="postcss">
	.modal {
		/* display: none; */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	}

   .title {
      font-size: large;
      font-weight: bold;
      margin-bottom: 1rem;
   }

	/* Modal Content */
	.body {
		background-color: #fefefe;
		margin: auto;
		padding: 20px;
		border: 1px solid #888;
		width: 50%;
		border-radius: 5px;
		border: 2px solid var(--first);
	}
</style>
