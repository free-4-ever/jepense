<script>
	// import Icon from '@iconify/svelte';
	import Icon from '@iconify/svelte';
	// let defaultTab = 'animes'
	import { fade, fly, crossfade, blur } from 'svelte/transition';

	import anne from '$lib/vidoes/anne.mp4';
	import Tabs from '../Tabs.svelte';
	import Tab from '../Tab.svelte';
	import { onMount } from 'svelte';

	export let data;

	let active = 'animes',
		wh = 0,
		sy = 0;
	let animes = [
		{
			name: 'The Twins of Destiny',
			src: 'twins.mp4',
			desc: 'is a 1991 animated television series produced by French writer Jean Chalopin. It follows the fictional quest of two children, Jules and Julie, in their travels across Eurasia seeking to overthrow the Empress Dowager of China, and consequently, release their fathers from imprisonment.',
			image: 'twins1.jpg', //'https://s1.dmcdn.net/v/5X9DC1JBm8O6PaXUr/x1080',
			time: '2019',
			offset: 0,
			shown: false
		},
		{
			name: 'The Wonderful Adventures of Nils',
			src: 'nils.mp4',
			desc: 'is a work of fiction by the Swedish writer Selma Lagerlöf, the first woman to receive the Nobel Prize in literature. Nils Holgersson, whose "chief delight was to eat and sleep, and after that he liked best to make mischief" is turned into a tomte, after rejecting to free a tomte he captures, leaving him shrunk and able to speak to animals ...',
			image: 'nils.jpg',
			time: '2019',
			offset: 0,
			shown: false
		},
		{
			name: 'Les Misérables: Shōjo Cosette',
			src: 'les-miserables.mp4',
			desc: "is a Japanese anime series produced by Nippon Animation, as part of their World Masterpiece Theater series. It is an adaptation of Victor Hugo's classic 1862 novel Les Misérables, depicting the troubles little Cosette goes through after her mother, Fantine, leaves her with a family to look after ...",
			image: 'Shoujo-Cosette.jpg',
			time: '2020',
			offset: 0,
			shown: false
		},
		{
			name: "Kon'nichiwa Anne: Before Green Gables",
			src: 'les-miserables.mp4',
			desc: "is an adaptation of Canadian children's literature author Budge Wilson's 2008 prequel novel Before Green Gables. It chronicles the early years of main character Anne Shirley as she loses both her parents and is adopted by Matthew and Marilla Cuthbert.",
			image: 'https://th.bing.com/th/id/OIP.9LUBm379WM7OocbLNzhAkwAAAA?pid=ImgDet&rs=1',
			time: '2020',
			offset: 0,
			shown: false
		},
		{
			name: 'Anne of Green Gables',
			src: 'anne.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image:
				'anne-gg.jpg',
			time: '2020',
			offset: 0,
			shown: false
		},
		{
			name: 'The Story of Perrine',
			src: 'perrine.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image:
				'perrine.jpg',
			time: '2021-2',
			offset: 0,
			shown: false
		},
		{
			name: "Little Women II: Jo's Boys",
			src: 'jos-boys.mp4',
			desc: "is a 1993 Japanese animated television series based on Louisa May Alcott's Little Men, produced by Nippon Animation. The title is taken from Jo's Boys, the title of the sequel to Little Men, on which the series is also partially based.",
			image: 'jos-boys.jpg',
			time: '2022-23',
			offset: 0,
			shown: false
		}
	];

	let doms = [];
	let showns = [false, false, false, false, false, false, false, false];

	// function reveal() {
	// 	var reveals = document.querySelectorAll('.reveal');
	// 	// console.log(reveals);
	// 	// console.log('running');
	// 	var elementVisible = 150;
	// 	for (var i = 0; i < reveals.length; i++) {
	// 		// var windowHeight = window.innerHeight;
	// 		var elementTop = reveals[i].getBoundingClientRect().top;
	// 		// console.log(elementTop);
	// 		if (elementTop < wh - elementVisible) {
	// 			// reveals[i].
	// 			reveals[i].classList.add('active');
	// 			console.log(reveals[i] + ' active');
	// 		} else {
	// 			// reveals[i].classList.remove('active');
	// 			console.log(reveals[i] + ' deactive');
	// 		}
	// 	}
	// }

	onMount(() => {
		// window.addEventListener('scroll', reveal);
		// animes.forEach((anim) => console.log(anim.offset));
		doms.forEach((el, i) => {
			animes[i].offset = el.getBoundingClientRect().top;
			if (animes[i].offset < wh) {
				showns[i] = true;
			}
		});
		// console.dir(doms)
	});

	function setVisibilities() {
		// console.log('running')
		animes.forEach((an, i) => {
			if (!an.shown) {
				// console.log('inside1')
				if (sy + 400 >= an.offset) {
					// console.log('inside2')
					// an.shown = true
					showns[i] = true;
				}
			}
			// console.log(an.shown)
		});
	}
</script>

<svelte:window bind:innerHeight={wh} bind:scrollY={sy} on:scroll={setVisibilities} />

<Tabs let:orientation>
	<Tab name="animes" label="Animes" bind:active icon="file-icons:animestudio" {orientation} />
	<Tab
		name="music"
		label="Music"
		bind:active
		icon="material-symbols:music-note-rounded"
		{orientation}
	/>
	<Tab
		name="videos"
		label="Videos"
		bind:active
		icon="material-symbols:video-camera-back"
		{orientation}
		disabled
	/>
</Tabs>

<div class="row jc">
	<div class="col-m-11 col-s-12 col-l-10 f-lll">
		<div class="column">
			{#if active === 'animes'}
				<div id="animes" class="tab" in:blur>
					<div class="">
						<h3>Animes watched, enjoyed and learned from more recently. . .</h3>
					</div>
					<br />
					<!-- <div class="my-xl text-center"> -->
					<!-- style="display: {sy + 150 >= anime.offset ? 'block' : 'none'}" -->
					{#each animes as anime, i}
						<div class="row sp animRow" bind:this={doms[i]}>
							<div class="col col-s-7 col-l-5">
								<video
									class="b anime reveal fade-left"
									src={anime.src}
									style="display: {showns[i] ? 'block' : 'none'};"
									controls
								>
									<track kind="captions" />
								</video>
								<!-- my offset is {anime.offset}
								anime shown: {anime.shown} -->
							</div>
							<div class="col col-s-6 col-l-4 description">
								<div class="reveal" class:fade-right={showns[i]}>
									<h4 class="mt-0">{anime.name}</h4>
									<img src={anime.image} width="250" alt="{anime.name}" srcset="" />
									<div class="brief">
										{anime.desc} <br />
										<span>Watched: {anime.time}</span>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
			{#if active === 'music'}
				<div id="music" class="tab" in:blur>
					<h3>🎵 Some Good Music</h3>
					{#each [1, 2, 6] as music}
						<div class="musicRow align-center">
							<div class="musicName">
								<h4>Siccar Point</h4>
								<p>
									Siccar Point is regarding Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Deserunt necessitatibus quae pariatur laboriosam hic? Eligendi est molestiae
									dicta! Neque repellendus atque reiciendis mollitia ullam velit exercitationem
									inventore nam repellat illum!
								</p>
							</div>
							<audio controls>
								<source src="music/SiccarPoint.mp3" type="audio/mp3" />
							</audio>
						</div>
					{/each}
				</div>
			{/if}
			{#if active === 'video'}
				<div id="videos" class="tab" in:blur>Videos</div>
			{/if}
			<!-- </div> -->
		</div>
	</div>
</div>

<style lang="postcss">
	.video {
		max-width: 400px;
	}
	.anime {
		/* margin-bottom: 1rem; */
		width: 600px;
	}

	h4 {
		text-align: left;
	}

	.mt-0 {
		margin-top: 0;
	}

	.animRow {
		margin-bottom: 3rem;

		& .description {
			margin: 0 auto;
		}
	}

	.musicRow {
		display: grid;
		grid-template-columns: 30% auto;
		column-gap: 1rem;
		margin-bottom: 2rem;
	}

	.musicName {
		h4 {
			font-weight: bolder;
		}

		p {
			text-align: justify;
		}
	}

	/* li.active {
		background-color: aquamarine;
	} */

	/* #tabs li button:not(button[disabled]):hover {
		width: 190px;
		color: brown;
	} */

	/* ul.timeline {
		list-style: none;
		margin: 50px 0 30px 0px;
		border-left: 8px solid white;
		& li {
			position: relative;
			margin: 5rem 0;
			color: red;
		}
	}

	.date {
		font-size: 0.95em;
		line-height: 20px;
		position: absolute;
		margin-top: -10px;
		top: 50%;
		left: -158px;
	}

	.circle {
		width: 10px;
		height: 10px;
		background: red;
		border: 5px solid white;
		border-radius: 50%;
		display: block;
		position: absolute;
		margin-top: -10px;
		top: 50%;
		left: -44px;
	}

	.content {
		max-height: 20px;
		padding: 50px 20px 0;
		border-color: transparent;
		border-width: 2px;
		border-style: solid;
		border-radius: 0.5em;
		position: relative;
	} */

	/* .active {
		display: block !important;
	} */

	/* .reveal.active {
		opacity: 1;
	}
	.active.fade-left {
		animation: fade-left 1s ease-in ;
	}
	.active.fade-right {
		animation: fade-right 1s ease-in;
	} */

	@keyframes fade-left {
		0% {
			transform: translateX(-60px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes fade-right {
		0% {
			transform: translateX(60px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	/* @media only screen and (max-width: 768px) {
		#mobileTabs {
			display: none;
		}
	} */

	@media only screen and (max-width: 600px) {
		.musicRow {
			grid-template-columns: auto;
			row-gap: 1rem;
			justify-content: center;
			text-align: center;
		}

		.anime {
			max-width: 100%;
			margin-bottom: 1rem;
		}

		audio {
			width: 100%;
		}

		.description .brief {
			padding: 0.5rem 0;
		}
	}

	@media only screen and (min-width: 992px) {
		.reveal {
			position: relative;
			opacity: 0;
			/* display: none; */
		}

		.reveal.fade-left {
			animation: fade-left 1s ease-in 0s 1 normal forwards;
		}

		.reveal.fade-right {
			animation: fade-right 1s ease-in 0s 1 normal forwards;
		}

		.description .brief {
			padding: 1rem 0;
		}

		video {
			border: 8px solid;
			border-image: var(--emplGradient) 1%;
			border-radius: 10px;
		}
	}
</style>
