<script>
   import nils from '$lib/videos/nils.mp4';
	let animes = ["nils.mp4", "twins.mp4", "les-miserables.mp4"];
</script>

<div class="row jc">
	<div class="col-s-10 col-m-9 col-l-8">
		<div class="f-l my-xl">
			<h3>Some of the animes watched, enjoyed and learned from . . .</h3>
		</div>
		<div class="column my-xl text-center">
			{#each animes as anime}
				<video class="b anime" width="" src="{anime}" controls >
               <track kind="captions" />
            </video>
				<span class="mt-md f-b" />
			{/each}
		</div>
	</div>
</div>

<style>
   .jc {
      justify-content: center;
   }
   .anime {
      margin-bottom: 1rem;
   }
</style>