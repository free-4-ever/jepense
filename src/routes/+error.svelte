<script>
	import { page } from '$app/stores';
	let hereKitty = false;
	const handleMouseenter = () => (hereKitty = true);
	const handleMouseleave = () => (hereKitty = false);
</script>

<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} />

<!-- creative commons BY-NC http://www.pngall.com/kitten-png/download/7247 -->
<div class="column tc align-center">
	{$page.error?.message}
	<img
		class:curious={hereKitty}
		alt="Kitten wants to know what's going on"
		src="/kitten.png"
		width="300"
	/>
</div>

<style>
	img {
		/* position: absolute;
		left: 0;
		bottom: -60px; */
		/* transform: translate(-80%, 0) rotate(-30deg); */
		/* transform-origin: 100% 100%; */
		transition: transform 0.4s;
		animation: appear .5s ease-out 0s 1 normal forwards;
      /* transform:  rotate(-180deg); */
      opacity: 0;
      transform: scale(.1);
	}

	.curious {
		/* transform: translate(-15%, 0) rotate(0deg); */
	}

	/* :global(body) {
		overflow: hidden;
	} */

   @keyframes appear {
      0% {
         opacity: .1;
         transform: scale(.3);
      }

      80% {
         opacity: 1;
         transform: scale(1.5);
      }

      100% {
         opacity: 1;
         transform: scale(1);
      }
   }
</style>
