<script>
	// import Icon from '@iconify/svelte';
	import Icon from '@iconify/svelte';
	// let defaultTab = 'animes'
	import { fade, fly, crossfade, blur } from 'svelte/transition';

	$: active = 'animes';
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
	let h = 0;
	$: top = `calc(50% - ${h / 2}px)`;

	let currentY = 0;
	let scrollY = 0;
	// $: left = 0;
	let translated = false;
	function scrollWatcher() {
		if(scrollY > currentY) {
			translated = true
		} else {
			translated = false
		}
		currentY = scrollY
		// let currentY = scrollY;
		console.log(scrollY);
	}
</script>

<svelte:window bind:scrollY on:scroll={scrollWatcher} />

<!-- <svelte:head>
	<title>Animes | JePense</title>
	<meta name="description" content="animes I've watched" />
</svelte:head> -->
<!-- <IconAccountBox style="font-size: 2em; color: red"/> -->
<ul id="tabs" style:top bind:clientHeight={h} class:translated>
	<li
		class="row je"
		class:active={active == 'animes'}
		on:click={() => (active = 'animes')}
		on:keypress={() => (active = 'animes')}
	>
		<div>
			<Icon icon="file-icons:animestudio" />
			Animes
		</div>
	</li>
	<li
		class="row je"
		class:active={active == 'music'}
		on:click={() => (active = 'music')}
		on:keypress={() => (active = 'music')}
	>
		<div>
			<!-- <icon-account-box style="font-size: 2em; color: red"/> -->
			<Icon icon="material-symbols:music-note-rounded" />
			Music
		</div>
	</li>
	<li
		class="row je"
		class:active={active == 'video'}
		on:click={() => (active = 'video')}
		on:keypress={() => (active = 'video')}
	>
		<div>
			<Icon icon="material-symbols:video-camera-back" />
			Videos
		</div>
	</li>
</ul>
<div class="row jc">
	<div class="col-m-11 col-s-12 col-l-10 f-lll">
		<div class="column">
			{#if active === 'animes'}
				<div
					id="animes"
					class="tab"
					transition:blur
				>
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
				<div
					id="music"
					class="tab"
					transition:blur
				>
					Music
				</div>
			{/if}
			{#if active === 'video'}
				<div
					id="videos"
					class="tab"
					transition:blur
				>
					Videos
				</div>
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

	.translated {
		transform: translateX(-300px);
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

	ul#tabs {
		list-style: none;
		position: fixed;
		/* top: 50%; */
		left: -300px;
		transition: left 0.5s;
		transition: transform 0.8s;
		animation: slide 0.5s ease-out 1s 1 normal forwards;

		& li {
			padding: 0.7rem 0;
			width: 155px;
			border: 1px solid;
			background-color: var(--grey3);
			margin-bottom: 5px;
			/* text-align: right; */
			border-radius: 25px;
			transition: width 0.3s;
			cursor: pointer;
		}

		& li:hover {
			width: 165px;
		}
	}

	@keyframes slide {
		from {
			left: -200px;
		}
		to {
			left: -100px;
		}
	}

	li.active {
		background-color: aquamarine;
	}

	#tabs li div {
		/* min-width: 120px; */
		margin-right: 1rem;
	}

	ul.timeline {
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
	}

	@media only screen and (max-width: 768px) {
		ul#tabs {
			display: none;
		}
	}
</style>
