<script lang="ts">
	import logo from '$lib/images/JePense.png';
	// export let path;
	import { page } from '$app/stores';
	import { createEventDispatcher, onMount } from 'svelte';
	import {headerHeight} from './store'

	const dispatch = createEventDispatcher();

	let width = '0', offset = '50%', headerH: number;
	// let path = page.url.pathname;
	const moveSlider = (event) => {
		width = event.target.parentNode.offsetWidth + 'px';
		offset = event.target.parentNode.offsetLeft + 'px';
		// console.log('width: ' + width + '| offset: ' + offset);
	};

	function openNav() {
		dispatch('openNav');
	}

	onMount(() => {
		headerHeight.set(headerH)
	})
</script>

<header class="bg-drupal column" bind:clientHeight={headerH}>
	<div id="ah" class="column text-center glow">
		<button id="sideNav" on:click|stopPropagation={openNav}>
		&#9776;</button>
		<!-- <div class="loader"></div> -->
		<div id="logoWrapper">
			<!-- <div id="wand"></div> -->
			<img id="logo" class="mr-sm" fit="contain" src={logo} alt="JePense logo" />
		</div>
		<div>Je Pense</div>
		<nav id="nav" class="">
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,3 L2,0 L2,3 Z" stroke-width=".1" />
			</svg>

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
				<li aria-current={$page.url.pathname.startsWith('/media') ? 'page' : undefined}>
					<a class:selected={$page.url.pathname === '/media'} href="/media" on:click={moveSlider}
						>Media</a
					>
				</li>
				<!-- <li aria-current={$page.url.pathname === '/' ? '/inspirations' : undefined}>
					<a class:selected={$page.url.pathname === '/inspirations'} href="/inspirations"
						>Inspirations</a
					>
				</li> -->
				<li aria-current={$page.url.pathname === '/school' ? 'page' : undefined}>
					<a class:selected={$page.url.pathname === '/school'} href="/school" on:click={moveSlider}
						>School</a
					>
				</li>
				<!-- <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a
						class:selected={$page.url.pathname === '/contact'}
						href="/contact"
						on:click={moveSlider}>Contact</a
					>
				</li> -->
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
</header>

<style>
	header {
		display: grid;
		grid-template-columns: auto;
		/* min-height: 14vh; */
		/* // max-height: 18vh; */
		/* background-color: #8ec5fc;
		background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%); */
		background: rgb(180, 144, 223);
		background: linear-gradient(90deg, rgba(180, 144, 223, 1) 0%, rgba(89, 54, 98, 1) 100%);
	}

	#sideNav {
		display: none;
		position: absolute;
		left: 1rem;
		bottom: 1rem;
		font-size: '25px';
		cursor: pointer;
	}

	/* #logoWrapper {
		position: relative;
		width: 90px;
	} */

	#logo {
		width: 90px;
		height: 90px;
		/* position: absolute;
		z-index: 1; */
		border-radius: 100%;
		outline-color: aqua;
		outline-width: 2px;
		/* transition: border 0.5s; */
		animation: border 2s linear 1s 1 normal forwards;
		border: 2px solid transparent;
		/* box-sizing:initial; */

	}

	/* .bordered {
		border: 2px solid white;
		border-top: solid gold;
		border-bottom: solid red;
	} */

	@keyframes border {
		0% {
			border: 2px solid transparent;
		}

		33% {
			/* border: none; */
			border: 2px solid transparent;
			border-top: 2px solid gold;
		}


		66% {
			/* border: 2px solid white; */
			border-top: 2px  solid gold;
			border-left: 2px solid white;
			border-right: 2px solid white;
			border-bottom: 2px solid transparent;
		}

		100% {
			border: 2px solid white;
			border-top: solid gold;
			border-bottom: solid red;
		}

		/* to {
			border: 2px solid white;
			border-top: solid gold;
			border-bottom: solid red;
		} */
	}

	#wand {
		/* animation: GFG 5s infinite linear; */
		width: 90px;
		height: 90px;
		border-radius: 100%;
		background-color: yellow;
		position: absolute;
		z-index: 0;
	}

	/* #logo::after {
		content: '';
		width: 90px;
		height: 90px;
		background-color: red;
	} */

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
		color: var(--color-theme-1);
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
		border: 8px solid #f3f3f3;
		border-radius: 50%;
		border-top: 8px solid gold;
		/* border-right: 8px solid green; */
		border-bottom: 8px solid red;
		/* border-left: 16px solid pink; */
		width: 120px;
		height: 120px;
		-webkit-animation: spin 8s linear infinite;
		animation: spin 0.5s linear 1;
		/* transition: border .2s linear; */
	}

	button#sideNav {
		content: 'lo';
		border: none;
		background-color: unset;
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

	@keyframes GFG {
		0% {
			transform: rotate(0deg) translateY(100px) rotate(0deg);
		}

		100% {
			transform: rotate(360deg) translateY(100px) rotate(-360deg);
		}
	}

	@media only screen and (max-width: 600px) {
		header {
			/* display: grid; */
			/* grid-template-columns: auto; */
			/* min-height: 6vh; */
			/* height: min-content; */
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

	@media only screen and (min-width: 600px) and (max-width: 768px) {
		header {
			/* min-height: 18vh; */
			/* height: min-content; */
		}
	}

	@media only screen and (min-width: 768px) {
		header {
			grid-template-columns: 75% 25%;
		}
	}
</style>
