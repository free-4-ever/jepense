<script>
	import logo from '$lib/images/JePense.png';
	// export let path;
	import { page } from '$app/stores';

	let width = '0';
	let offset = '50%';
	// let path = page.url.pathname;
	const moveSlider = (event) => {
		width = event.target.parentNode.offsetWidth + 'px';
		offset = event.target.parentNode.offsetLeft + 'px';
		console.log('width: ' + width + '| offset: ' + offset);
	};

	function openNav () {

	}
</script>

<header class="bg-drupal">
	<div id="ah" class="column text-center glow ai-c jc-se">
		<span id="sideNav" style="font-size:30px;cursor:pointer" on:click="{openNav}">&#9776;</span>
		<!-- <div class="loader"></div> -->
		<div>
			<img id="logo" class="mr-sm" fit="contain" src={logo} alt="JePense logo" />
		</div>
		<nav id="nav" class="">
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<!-- <path d="M0,3 C1,1 1,1 2,0 L2,3 Z" /> -->
				<path d="M0,3 L2,0 L2,3 Z" stroke-width=".1" />
				<!-- <g fill="red" stroke-width=".1">
					<path stroke="red"  d="M0,3 L2,0" />
					<path d="M2,0 L2,3" />
					<path stroke="blue" d="M2,3 L0,3" />
				</g> -->
			</svg>
			<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg> -->
			<ul style:--decoration-width={width} style:--decoration-left={offset}>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class:selected={$page.url.pathname === '/'} href="/" on:click={moveSlider}>Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/stories' ? 'page' : undefined}>
					<a
						class:selected={$page.url.pathname === '/stories'}
						href="/stories"
						on:click={moveSlider}>Stories</a
					>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/animes') ? 'page' : undefined}>
					<a class:selected={$page.url.pathname === '/animes'} href="/animes" on:click={moveSlider}
						>Animes</a
					>
				</li>
				<!-- <li aria-current={$page.url.pathname === '/' ? '/inspirations' : undefined}>
					<a class:selected={$page.url.pathname === '/inspirations'} href="/inspirations"
						>Inspirations</a
					>
				</li> -->
				<li aria-current={$page.url.pathname === '/books' ? 'page' : undefined}>
					<a class:selected={$page.url.pathname === '/books'} href="/books" on:click={moveSlider}
						>Books</a
					>
				</li>
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a
						class:selected={$page.url.pathname === '/contact'}
						href="/contact"
						on:click={moveSlider}>Contact</a
					>
				</li>
				<li aria-current={$page.url.pathname === '/me' ? 'page' : undefined}>
					<a class:selected={$page.url.pathname === '/me'} href="/me" on:click={moveSlider}>Me</a>
				</li>
			</ul>
			<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg> -->
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L2,3 L0,3 Z" />
			</svg>
		</nav>
	</div>
	<!-- {path} -->
	<!-- <div class="pa-sm text-fourth">
	</div> -->
</header>

<style>
	header {
		display: grid;
		grid-template-columns: auto;
		min-height: 14vh;
		/* // max-height: 18vh; */
		/* background-color: var(--second); */

		/* padding: 1rem; */
		background-color: #8ec5fc;
		background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
	}

	#sideNav {
		display: none;
		position: absolute;
		left: 1rem;
		bottom: 1rem;
	}

	img {
		width: 90px;
		height: 90px;
	}

	header > div {
		padding: 1rem;
		/* border-radius: 1rem; */
		/* border: 0.2rem solid; */
		align-items: center;
		position: relative;
	}

	nav {
		display: flex;
		/* padding: 0.5rem; */
		justify-content: center;
		/* border-radius: 10px; */
		/* background-color: var(--brown1); */
		/* border: 0.1rem solid; */
		position: absolute;
		bottom: 0;
	}

	nav a {
		/* padding: .5rem; */
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		position: relative;
	}

	/* Change color on hover */
	nav a:hover {
		/* background-color: #ddd; */
		color: var(--first);
	}

	.selected {
		/* background-color: #e0c3fc; */
		/* border-top: var(--mdBorder) solid var(--first); */
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;

		--decoration-left: 50%;
		--decoration-width: 0;
	}

	ul::before {
		content: '';
		position: absolute;
		top: 0;
		left: var(--decoration-left);
		width: var(--decoration-width);
		height: 3px;
		background: var(--color-theme-1);
		transition: 600ms;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: calc(var(--mdBorder));
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
		transition: 600ms;
	}

	.loader {
		border: 16px solid #f3f3f3;
		border-radius: 50%;
		border-top: 16px solid blue;
		border-right: 16px solid green;
		border-bottom: 16px solid red;
		border-left: 16px solid pink;
		width: 120px;
		height: 120px;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
	}

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@media only screen and (max-width: 600px) {
		header {
			grid-template-columns: auto;
			min-height: 8vh;
		}

		svg {
			display: none;
		}

		nav a {
			padding: 0 0.3rem;
			font-size: 0.5rem;
		}

		ul {
			height: 2rem;
		}

		img {
			width: 65px;
			height: 65px;
		}
		nav {
         display: none;
      }

		#sideNav {
			display: block;
		}
	}

	@media only screen and (min-width: 768px) {
		header {
			grid-template-columns: 80% 20%;
		}
	}
</style>
