<script lang="ts">
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageServerData;

	let ready = false;

	onMount(async () => {
		const EJ = await import('@editorjs/editorjs');
		const ImageTool = await import('@editorjs/image');
		const Header = await import('@editorjs/header');
		const List = await import('@editorjs/list');
		const Delimiter = await import('@editorjs/delimiter');
		const Code = await import('@editorjs/code');
		const Link = await import('@editorjs/link');
		const Embed = await import('@editorjs/embed');
		new EJ.default({
			readOnly: true,
			// Other configuration properties
			tools: {
				image: ImageTool.default,
				header: Header.default,
				list: List.default,
				delimiter: Delimiter.default,
				code: Code.default,
				link: Link.default,
				embed: Embed.default
			},

			/**
			 * Initial Editor data
			 */
			data: JSON.parse(data.post!.content!),
			holder: 'editorjs',
			onReady: () => {
				// alert()
				ready = true;
			},
			minHeight: 100
		});
	});

	function castVote(vote: 1 | -1) {
		console.log(devicePixelRatio)
		console.log(InputDeviceInfo)
		console.log(navigator)
		fetch('/api/vote', {
			method: 'PATCH',
			body: JSON.stringify({vote: vote, post: data.post?.id}),
			// headers: {
			// 	'Content-Type': 'application/json'
			// }
		});
		return null;
	};
</script>

<div class="row jc">
	<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
		<div id="editorjs">
			<div class="statsOverview"></div>
			{#if !ready}
				<div class="skeleton-loader wrapper">
					<div class="header skeleton-loader" />
					<div class="line skeleton-loader" />
					<div class="line skeleton-loader" />
					<div class="line skeleton-loader" />
					<div class="line skeleton-loader" />
					<div class="line skeleton-loader" />
					<div class="box skeleton-loader" />
				</div>
			{/if}
		</div>
		<div class="row items-x-center p-1">
			<div class="col">
				1
				<button on:click={castVote(1)}>👍Up</button>
			</div>
			<div class="col">
				<span>
					<iconify-icon icon="mdi:home" />
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"
						><path
							d="M80.7 123.2c-7.5 6.3-16.7 16.1-16.7 31.4 0 13.7 5.7 22.8 10.9 29.1.6 1.2 1.1 2.3 1.6 3.4l.2 1.1c.7 3.5 0 7.1-2 10-3.4 5-5.8 12.3-5.8 25.7 0 11.6 4.8 18.4 9.7 23.2 4.4 4.3 6.1 12.5 4.1 18.3-4.8 13.9-.2 28.4 8.2 37.8 10.5 11.8 20.3 13.2 46.4 11.7 18-1.1 55.5-6.9 80.2-10.8 10.1-1.6 18.9-3 21.6-3.2 12.7-1.3 15.2 0 16.4 4.9.5 2.1-1.9 6.9-4.9 13-4 8.1-9.5 19.2-14.5 35.8-10.1 33.2-9 69.2 2.7 90.2 5.5 9.9 14.8 19.1 26.3 19.1s23.3-2.4 27.9-7.9c3.4-4 2.3-11.6 6.2-26.8 3.1-12.4 7-30.9 12-42 7.5-16.6 39.7-45.1 57-60.4 4.1-3.6 7.6-6.7 10.1-9.1 8.7-8.1 17.6-21.1 25.5-32.7 5.4-7.8 10.4-15.2 13.7-18.5 7.1-7.1 16.6-10.9 22.3-10.9 4.4 0 8-3.6 8-8V88.1c0-4.6-3.7-8.3-8.3-8.3C404 79.8 389 74 373.1 68c-12.2-4.7-24.9-9.5-46.4-12.1-32.4-4-74.2-8.1-112.6-8.1-20.4 0-39.9 2-56.6 3.9-31 3.6-64.2 10.8-75.2 37-4.1 9.7-2.2 17.6.5 23.7.4.8.7 1.7.8 2.6.6 3.3-.6 6.3-2.9 8.2z"
							fill="currentColor"
						/></svg
					>
				</span>
			</div>
		</div>
		<div class="column">
			<form action="">
				<label for="name">Name</label>
				<input type="text" />
				<label for="email">Email</label>
				<input type="email" name="email" id="email" /> <br />
				<label for="comment">Comment</label>
				<textarea name="comment" id="" />
			</form>
		</div>
	</div>
</div>

<style>

	#editorjs {
		position: relative;
	}

	.statsOverview {
		position: absolute;
		right: 0;
		top: 0;
		border: 2px solid;
		width: 100px;
		height: 400px;
	}
	.header {
		height: 40px;
		margin: 2rem 10rem;
	}
	.skeleton-loader:empty {
		display: block;
		background: linear-gradient(
				to right,
				rgba(255, 255, 255, 0),
				rgba(255, 255, 255, 0.5) 50%,
				rgba(255, 255, 255, 0) 80%
			),
			rgb(235, 233, 233);
		background-repeat: repeat-y;
		background-size: 50px 500px;
		background-position: 0 0;
		animation: shine 1s infinite;
	}

	.line {
		height: 15px;
		margin: 0.5rem 6rem;
	}

	.box {
		height: 300px;
		margin: 1rem 6rem;
	}

	.p-1 {
		padding: 1rem;
	}
	.row span:first-child {
		margin-right: 1rem;
		color: red;
	}

	@keyframes shine {
		to {
			background-position: 100% 0;
		}
	}

	@media only screen and (max-width: 600px) {
		.header {
			margin: 1rem 5rem;
		}

		.line {
			margin: 0.5rem 3rem;
		}
		.box {
			margin: 1rem 3rem;
		}
	}
</style>
