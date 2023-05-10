<script>

	import { blur } from "svelte/transition";

	let shake = false
	function shaker (event) {
		if (event.target.id == 'wrapper') {
			console.log('inside')
		}
		console.log(event)
		shake = true
		setTimeout(() => shake = false, 500)
	}
</script>
<svelte:body on:click={shaker} />

<div class="modal" transition:blur>
	<div id="wrapper" class:shake>
		<div class="body">
				<div class="title">
					<slot name="title" />
				</div>
				<!-- <hr> -->
				<div>
					<slot name="content"/>
				</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.shake {
		animation: shake 500ms linear;
	}

	@keyframes shake {
		0% {
			transform: translate(5px, 5px);
		}

		20% {
			transform: translate(-6px, -6px);
		}

		40% {
			transform: translate(5px, 5px);
		}

		60% {
			transform: translate(-6px, -6px);
		}

		80% {
			transform: translate(5px, 5px);
		}

		100% {
			transform: translate(0px, 0px);
		}
	}
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

	#wrapper {
		position: relative;
		margin: auto;
		width: 50%;
		padding: 20px;
		border-radius: 5px;
		border: 2px solid var(--first);
		background-color: #fefefe;
	}

   .title {
      font-size: larger;
      font-weight: bold;
      margin-bottom: 1rem;
   }

	/* Modal Content */
	.body {
		/* border: 1px solid #888; */
	}
</style>
