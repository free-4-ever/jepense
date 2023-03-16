<script>
	import logo from '$lib/images/JePense.png';
   // export let path;
   import { page } from '$app/stores';

   // let path = page.url.pathname;
</script>

<header class="bg-drupal row items-x-cente">
   <div class="row text-center glow ai-c jc-se">
      <img
         id="logo"
         class="mr-sm"
         fit="contain"
         src={logo}
         height="90"
         width="90"
         alt="JePense logo"
      />
   </div>
   <!-- {path} -->
   <nav id="nav" class="pa-md text-center">
      <a class:selected="{$page.url.pathname === '/'}" href="/">Home</a> |
      <a class:selected="{$page.url.pathname === '/stories'}" href="/stories">Stories</a> |
      <a class:selected="{$page.url.pathname === '/animes'}" href="/animes">Animes</a> |
      <a class:selected="{$page.url.pathname === '/inspirations'}" href="/inspirations">Inspirations</a> |
      <a class:selected="{$page.url.pathname === '/books'}" href="/books">Books</a> |
      <a class:selected="{$page.url.pathname === '/contact'}" href="/contact">Contact</a> |
      <a class:selected="{$page.url.pathname === '/me'}" href="/me">Me</a>
   </nav>
	<!-- <div class="pa-sm text-fourth">
	</div> -->
</header>

<style>
	header {
		min-height: 14vh;
		/* // max-height: 18vh; */
		/* background-color: var(--second); */

		padding: 1rem;
	}

	header > div {
		background-color: #8ec5fc;
		background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
		padding: 1rem;
		border-radius: 1rem;
		border: 0.2rem solid;
	}

	nav {
		display: inline-block;
		padding: 0.5rem;
		border-radius: 10px;
		background-color: var(--brown1);
		border: 0.1rem solid;

	}

   nav a {
      /* padding: .5rem; */
   }

	/* Change color on hover */
	nav a:hover {
		background-color: #ddd;
		color: black;
	}

   .selected {
      background-color: #e0c3fc;
   }
</style>
