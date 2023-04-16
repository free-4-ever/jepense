<script lang="ts">
	let windowWidth: number = 0;
	let h = 0;
	$: top = `calc(50% - ${h / 2}px)`;

	let currentY = 0;
	let scrollY = 0;
	let translated = false;
	function scrollWatcher() {
		if (scrollY > currentY) {
			translated = true;
		} else {
			translated = false;
		}
		currentY = scrollY;
	}
	// console.log(windowWidth)
	$: orientation = windowWidth > 992 ? 'horizontal' : 'vertical';
</script>

<svelte:window bind:scrollY on:scroll={scrollWatcher} bind:innerWidth={windowWidth} />

{#if orientation == 'horizontal'}
	<ul id="tabs" style:top bind:clientHeight={h} class:translated>
		<slot {orientation} />
	</ul>
{:else}
	<div id="mobileTabs" class="row jc">
		<slot {orientation} />
	</div>
{/if}

<style lang="postcss">
	ul#tabs {
		list-style: none;
		position: fixed;
		/* top: 50%; */
		left: -300px;
		transition: left 0.5s;
		transition: transform 0.8s;
		animation: slide 0.5s ease-out 1s 1 normal forwards;
	}

	.translated {
		transform: translateX(-300px);
	}

	@keyframes slide {
		from {
			left: -200px;
		}
		to {
			left: -100px;
		}
	}

	#mobileTabs {
		position: relative;
		/* background-color: aqua; */
		/* top: -100px; */
		/* animation: name duration eas delay iteration-count direction fill-mode; */
		& button {
			/* background-color: blue; */
			visibility: hidden;
			position: relative;
			padding: 0.5rem;
		}
		animation: dropdown .5s ease-out 0.1s 1 normal forwards;
	}

	@keyframes dropdown {
		from {
			visibility: hidden;
			top: -80px;
			/* background-color: aliceblue; */
		}

		to {
			top: 0;
			visibility: visible;
			/* background-color: yellowgreen; */
		}
	}

	@media only screen and (min-width: 992px) {
		#mobileTabs {
			display: none;
		}
	}

	@media only screen and (max-width: 992px) {
		ul#tabs {
			display: none;
		}
	}
</style>
