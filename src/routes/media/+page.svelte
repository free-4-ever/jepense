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
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://s1.dmcdn.net/v/5X9DC1JBm8O6PaXUr/x1080',
			time: '2019',
			offset: 0,
			shown: false
		},
		{
			name: 'The Wonderful Adventures of Nils',
			src: 'nils.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://static.kino.de/wp-content/uploads/2017/06/large-1498558411-7-rct480x270u.jpg',
			time: '2019',
			offset: 0,
			shown: false
		},
		{
			name: 'Les Misérables: Shōjo Cosette',
			src: 'les-miserables.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://m.media-amazon.com/images/I/61Ymi8KdteL._AC_SX425_.jpg',
			time: '2020',
			offset: 0,
			shown: false
		},
		{
			name: "Kon'nichiwa Anne: Before Green Gables",
			src: 'les-miserables.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://th.bing.com/th/id/OIP.9LUBm379WM7OocbLNzhAkwAAAA?pid=ImgDet&rs=1',
			time: '2020',
			offset: 0,
			shown: false
		},
		{
			name: 'Anne of Green Gables',
			src: 'les-miserables.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image:
				'https://th.bing.com/th/id/R.a419350c06e2378a6fa77971ba6ca3ae?rik=16YOl0YjS6XNcw&pid=ImgRaw&r=0',
			time: '2020',
			offset: 0,
			shown: false
		},
		{
			name: 'The Story of Perrine',
			src: 'les-miserables.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image:
				'https://th.bing.com/th/id/R.544ba1b84992966ed1db4b9ea0b4b916?rik=YqRzntpO0Q1jYw&pid=ImgRaw&r=0',
			time: '2021-2',
			offset: 0,
			shown: false
		},
		{
			name: "Little Women II: Jo's Boys",
			src: 'les-miserables.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://th.bing.com/th/id/OIP.CsT8nOGWP82tG1RtVy6KuQHaFj?pid=ImgDet&rs=1',
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
					<!-- <ul id="timeline">
					<li class="work">
						<input class="radio" id="work5" name="works" type="radio" checked />
						<div class="relative">
							<label for="work5">Lorem ipsum dolor sit amet</label>
							<span class="date">12 May 2013</span>
							<span class="circle" />
						</div>
						<div class="content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo
								velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati
								nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum
								non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus
								dicta qui est optio rerum.
							</p>
						</div>
					</li>
					<li class="work">
						<input class="radio" id="work4" name="works" type="radio" />
						<div class="relative">
							<label for="work4">Lorem ipsum dolor sit amet</label>
							<span class="date">11 May 2013</span>
							<span class="circle" />
						</div>
						<div class="content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo
								velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati
								nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum
								non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus
								dicta qui est optio rerum.
							</p>
						</div>
					</li>
				</ul> -->
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
							<div class="col col-s-6 col-l-3 description">
								<div class="reveal" class:fade-right={showns[i]}>
									<h4 class="mt-0">{anime.name}</h4>
									<img src={anime.image} height="250" alt="Nils" srcset="" />
									<div>
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
					<h3>🎵 Some Good Piece of Music</h3>
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

	.musicName h4 {
		font-weight: bolder;
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
	}
</style>
