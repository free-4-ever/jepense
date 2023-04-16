<script>
	// import Icon from '@iconify/svelte';
	import Icon from '@iconify/svelte';
	// let defaultTab = 'animes'
	import { fade, fly, crossfade, blur } from 'svelte/transition';

	import anne from '$lib/vidoes/anne.mp4';
	import Tabs from '../Tabs.svelte';
	import Tab from '../Tab.svelte';

	export let data;

	let active = 'animes';
	let animes = [
		{
			name: 'The Twins of Destiny',
			src: 'twins.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://s1.dmcdn.net/v/5X9DC1JBm8O6PaXUr/x1080',
			time: '2019'
		},
		{
			name: 'The Wonderful Adventures of Nils',
			src: 'nils.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://static.kino.de/wp-content/uploads/2017/06/large-1498558411-7-rct480x270u.jpg',
			time: '2019'
		},
		{
			name: 'Les Misérables: Shōjo Cosette',
			src: 'les-miserables.mp4',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet soluta quia culpa minima tempore reprehenderit unde rerum a, sed architecto modi ea possimus aperiam harum aspernatur. Quae, incidunt nesciunt!',
			image: 'https://m.media-amazon.com/images/I/61Ymi8KdteL._AC_SX425_.jpg',
			time: '2020'
		}
	];
</script>

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
		disabled
		{orientation}
	/>
</Tabs>

<div class="row jc">
	<div class="col-m-11 col-s-12 col-l-10 f-lll">
		<div class="column">
			{#if active === 'animes'}
				<div id="animes" class="tab" transition:blur>
					<div class="f-l my-xl">
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
					{#each animes as anime}
						<div class="row sp animRow">
							<div class="col col-s-7">
								<video class="b anime" width="" src={anime.src} controls>
									<track kind="captions" />
								</video>
							</div>
							<div class="col col-s-4">
								<h4>{anime.name}</h4>
								<img src={anime.image} height="250" alt="Nils" srcset="" />
								<div>
									{anime.desc} <br />
									<span>Watched: {anime.time}</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
			{#if active === 'music'}
				<div id="music" class="tab" transition:blur>
					<h3>Some Good Piece of Music</h3>
					{#each [1, 2, 3] as music}
						<div class="musicRow align-center">
							<span class="musicName"> Siccar Point </span>
							<audio controls>
								<source src="music/SiccarPoint.mp3" type="audio/mp3" />
							</audio>
						</div>
					{/each}
				</div>
			{/if}
			{#if active === 'video'}
				<div id="videos" class="tab" transition:blur>Videos</div>
			{/if}
			<!-- </div> -->
		</div>
	</div>
</div>

<style lang="postcss">
	.anime {
		margin-bottom: 1rem;
		width: 600px;
	}

	h4 {
		text-align: left;
	}

	.row .col:nth-child(2) {
		/* align-self: center; */
		/* margin-top: 2rem; */
	}

	.sp {
		justify-content: space-between;
	}

	.animRow {
		margin-bottom: 3rem;
	}

	.musicRow {
		display: grid;
		grid-template-columns: 30% auto;
		column-gap: 1rem;
		margin-bottom: 2rem;
	}

	.musicName {
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

	/* #mobileTabs button {
		padding: 0.5rem;
	} */

	/* #mobileTabs {
		position: relative;

		& button {
			visibility: hidden;
			position: relative;
			padding: 0.5rem;
			animation: dropdown 1s ease-out 0.1s 1 normal forwards;
		}
	}

	@keyframes dropdown {
		from {
			visibility: hidden;
			top: -50px;
			background-color: aliceblue;
		}

		to {
			top: 0;
			visibility: visible;
			background-color: yellowgreen;
		}
	} */

	/* @media only screen and (min-width: 768px) {
		#mobileTabs {
			display: none;
		}
	} */
</style>
