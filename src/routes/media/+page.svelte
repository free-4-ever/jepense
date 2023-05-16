<script>
	// import Icon from '@iconify/svelte';
	import Icon from '@iconify/svelte';
	// let defaultTab = 'animes'
	import { blur } from 'svelte/transition';

	import Tabs from '../Tabs.svelte';
	import Tab from '../Tab.svelte';
	import { onMount } from 'svelte';

	export let data;

	let active = 'animes',
		wh = 0,
		sy = 0,
		iw;
	const animes = [
		{
			name: 'The Twins of Destiny',
			src: 'twins.mp4',
			desc: 'is a 1991 animated television series produced by French writer Jean Chalopin. It follows the fictional quest of two children, Jules and Julie, in their travels across Eurasia seeking to overthrow the Empress Dowager of China, and consequently, release their fathers from imprisonment.',
			image: 'twins1.jpg', //'https://s1.dmcdn.net/v/5X9DC1JBm8O6PaXUr/x1080',
			time: '2019, 1996-97 (1st)',
			offset: 0,
			shown: false,
			genre: 'action, adventure, drama, historical',
			episodes: 52,
			run: '1991-92'
		},
		{
			name: 'The Wonderful Adventures of Nils',
			src: 'nils.mp4',
			desc: 'is a work of fiction by the Swedish writer Selma Lagerlöf, the first woman to receive the Nobel Prize in literature. Nils Holgersson, whose "chief delight was to eat and sleep, and after that he liked best to make mischief" is turned into a tomte, after rejecting to free a tomte he captures, leaving him shrunk and able to speak to animals ...',
			image: 'nils.jpg',
			time: '2019, 1996-97 (1st)',
			offset: 0,
			shown: false,
			genre: 'adventure, fantasy',
			episodes: 52,
			run: '1980-81'
		},
		{
			name: 'Les Misérables: Shōjo Cosette',
			src: 'les-miserables.mp4',
			desc: "is a Japanese anime series produced by Nippon Animation, as part of the World Masterpiece Theater series. It is an adaptation of Victor Hugo's classic 1862 novel Les Misérables, depicting the troubles little Cosette goes through after her mother, Fantine, leaves her in care of the Thénardier family ...",
			image: 'Shoujo-Cosette.jpg',
			time: '2020, partly 2007-08',
			offset: 0,
			shown: false,
			genre: 'drama, historical',
			episodes: 52,
			run: '2007'
		},
		{
			name: "Kon'nichiwa Anne: Before Green Gables",
			src: null,
			desc: "is an adaptation of Canadian children's literature author Budge Wilson's 2008 prequel novel Before Green Gables. It chronicles the early years of main character Anne Shirley as she loses both her parents and is adopted by Joanna (her maternal aunt) and Bert Thomas.",
			image: 'k-anne.jpg',
			time: '2020',
			offset: 0,
			shown: false,
			genre: 'adventure, drama, slice of life',
			episodes: 39,
			run: '2009'
		},
		{
			name: 'Anne of Green Gables',
			src: 'anne.mp4',
			desc: "is a Japanese animated television series and the fifth entry in Nippon Animation's World Masterpiece Theater. It was adapted from the 1908 novel Anne of Green Gables by Lucy Maud Montgomery. Anne Shirley, a girl raised in an orphanage, is accidentally sent to Miss Marilla and Mr. Matt Cuthbert, who had originally requested a boy. Marilla is surprised at first but as she learns of her sad past, Anne gradually becomes an irreplaceable member of the Cuthbert family.",
			image: 'anne-gg.jpg',
			time: '2020',
			offset: 0,
			shown: false,
			genre: 'adventure, drama, historical, slice of life',
			episodes: 50,
			run: '1979'
		},
		{
			name: 'The Story of Perrine',
			src: 'perrine.mp4',
			desc: "is a Japanese anime series by Nippon Animation and the fourth production in the World Masterpiece Theater series. It is based on the French novel En Famille by Hector Malot. Perrine Paindavoine is the daughter of an Anglo-Indian mother and a French father who dies at the very beginning of the story. Before dying, he asks his wife and Perrine to return to his hometown, Maraucourt, where Perrine's grandfather owns a factory.",
			image: 'perrine.jpg',
			time: '2021-22',
			offset: 0,
			shown: false,
			genre: 'adventure, historical, drama',
			episodes: 53,
			run: '1978'
		},
		{
			name: "Little Women II: Jo's Boys",
			src: 'jos-boys.mp4',
			desc: 'is a 1993 Japanese animated television series based on Louisa May Alcott\'s Little Men, produced by Nippon Animation. The title is taken from Jo\'s Boys, the title of the sequel to Little Men, on which the series is also partially based. Josephine March has grown into womanhood about ten years since Tales of Little Women and is now married to the German Professor, Friedrich Bhaer. In the Plumfield farm-house that Aunt March had left her, Jo Bhaer has established a new school for her two sons, Robby and Teddy, nephews (Franz, Emil, Demi-John), niece (Daisy) and a gang of orphaned children, including Annie "Nan" Harding and a rough, street-wise adolescent named Dan.',
			image: 'jos-boys.jpg',
			time: '2022-23',
			offset: 0,
			shown: false,
			genre: 'drama, slice of life, coming of age',
			episodes: 40,
			run: '1993'
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

<svelte:window
	bind:innerWidth={iw}
	bind:innerHeight={wh}
	bind:scrollY={sy}
	on:scroll={setVisibilities}
/>

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

<div class="row" class:jc={iw >= 992}>
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
							<div class="col col-xl-5">
								{#if anime.src != null}
									<video
										class="b anime reveal fade-left"
										src={anime.src}
										style="display: {showns[i] ? 'block' : 'none'};"
										controls
									>
										<track kind="captions" />
									</video>
								{:else}
									<div class="column pua reveal fade-left">Video Unavailable</div>
								{/if}
								<!-- my offset is {anime.offset}
								anime shown: {anime.shown} -->
							</div>
							<div class="col col-l-7 col-xl-5 description">
								<div class="reveal" class:fade-right={showns[i]}>
									<h4 class="mt-0">{anime.name}</h4>
									<div class="intro">
										<img src={anime.image} width="250" alt={anime.name} srcset="" />
										<div class="bullets">
											<div class="">
												<div>Genre</div>
												<div>{anime.genre}</div>
											</div>
											<div class="">
												<div>Episodes</div>
												<div>{anime.episodes}</div>
											</div>
											<div class="">
												<div>Run (1st)</div>
												<div>{anime.run}</div>
											</div>
											<div class="">
												<div>Watched</div>
												<div>{anime.time}</div>
											</div>
										</div>
									</div>
									<div class="brief">
										{anime.desc} <br />
										<!-- <span>Watched: {anime.time}</span> -->
									</div>
								</div>
							</div>
						</div>
					{/each}
					<hr />
					<h4>All rights reserved for the respective owner(s).</h4>
				</div>
			{/if}
			{#if active === 'music'}
				<div id="music" class="tab" in:blur>
					<h3>🎵 Some Good Music</h3>
					{#each data.music as mus}
						<div class="musicRow align-center">
							<div class="musicName">
								<h4>{mus.title}</h4>
								<p>
									{mus.desc}
								</p>
							</div>
							<audio controls>
								<source src="music/{mus.src}" type="audio/mp3" />
							</audio>
						</div>
					{/each}
					<hr />
					<h4>All rights reserved for the respective owner(s).</h4>
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

	.pua {
		justify-content: center;
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
		grid-template-columns: auto;
		column-gap: 1rem;
		margin-bottom: 2rem;
	}

	.musicName {
		h4 {
			font-weight: bolder;
			text-transform: capitalize;
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

		.bullets {
			& > div {
				display: grid;
				grid-template-columns: 30% auto;
				/* padding: 0.3rem 0.5rem; */

				& div:first-child {
					font-weight: bold;
				}

				& div:nth-child(2) {
					text-transform: capitalize;
					/* font-size: smaller; */
				}
			}
		}
	}

	@media only screen and (min-width: 600px) and (max-width: 992px) {
		.musicRow {
			grid-template-columns: 60% auto;
			/* column-gap: 1rem;
			margin-bottom: 2rem; */
		}

		.intro {
			display: grid;
			grid-template-columns: 250px auto;
			border: 2px solid var(--emplFC);
		}

		.bullets {
			display: inline-grid;
			height: min-content;
			align-self: center;
			/* font-size: small; */

			& > div {
				display: grid;
				grid-template-columns: 30% auto;
				padding: 0.3rem 0.5rem;

				& div:first-child {
					font-weight: bold;
				}

				& div:nth-child(2) {
					text-transform: capitalize;
					font-size: smaller;
				}
			}
		}
	}

	@media only screen and (min-width: 992px) {
		.musicRow {
			display: grid;
			grid-template-columns: 40% auto;
			column-gap: 1rem;
			margin-bottom: 2rem;
		}

		.musicName p {
			text-align: unset;
		}
		
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

		.intro {
			display: grid;
			grid-template-columns: 250px auto;
			border: 2px solid var(--emplFC);
		}

		.bullets {
			display: inline-grid;
			height: min-content;
			align-self: center;
			/* font-size: small; */

			& > div {
				display: grid;
				grid-template-columns: 30% auto;
				padding: 0.3rem 0.5rem;

				& div:first-child {
					font-weight: bold;
				}

				& div:nth-child(2) {
					text-transform: capitalize;
					font-size: smaller;
				}
			}
		}
	}
</style>
