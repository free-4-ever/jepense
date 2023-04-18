<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';
	import { drawerOpen } from '../../store';

	export let data: PageServerData;

	let ready = false;
	let showComments = false;

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
		console.log(devicePixelRatio);
		console.log(InputDeviceInfo);
		console.log(navigator);
		fetch('/api/vote', {
			method: 'PATCH',
			body: JSON.stringify({ vote: vote, post: data.post?.id })
			// headers: {
			// 	'Content-Type': 'application/json'
			// }
		});
		return null;
	}
</script>

<div class="row jc">
	<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
		<div class="column article">
			<div class="statsOverview column">
				<button on:click={castVote(1)}>
					<div class="column">
						<Icon icon="material-symbols:music-note-rounded" width="24" />
						<span class="commentCount">12</span>
					</div>
				</button>
				<button on:click={castVote(-1)}>
					<div class="column">
						<Icon icon="material-symbols:music-note-rounded" width="24" />
						<span class="commentCount">12</span>
					</div>
				</button>
				<button on:click={() => drawerOpen.set(!$drawerOpen)}>
					<div class="column">
						<Icon icon="material-symbols:music-note-rounded" width="24" />
						<span class="commentCount">1</span>
					</div>
				</button>
			</div>
			<div id="editorjs">
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
		</div>
		<div class="">
			<h4>Anything to Add?</h4>
			<div class="formWrapper">
				<form action="">
					<div class="row">
						<div class="column">
							<label for="name">Name</label>
							<input type="text" required />
						</div>
						<div class="column">
							<label for="email">Email</label>
							<input type="email" name="email" id="email" required />
						</div>
					</div>
					<div class="row">
						<div class="column">
							<label for="comment">Comment</label>
							<textarea name="comment" id="" cols="70" rows="4" required minlength="10" />
						</div>
					</div>
					<div>
						<button type="submit"> Send </button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.formWrapper {
		margin: 0 auto;
		max-width: 650px;
		padding: 2rem 0.5rem;
		border: 4px dashed var(--first);
		border-radius: 10px;
		background: var(--gradient);
	}
	
	.commentCount {
		font-size: smaller;
	}

	form {
		& label {
			margin-bottom: 5px;
			font-weight: bold;
		}

		input {
			padding: 0.5rem;
			border: 2px solid var(--first);
			border-radius: 5px;
		}

		& > .row:not(:last-child) {
			margin-bottom: 1rem;
		}

		button[type=submit] {
			padding: .5rem;
			width: 80px;
			background-color: var(--green);
		}
	}

	.article {
		position: relative;
	}
	#editorjs {
		position: relative;
	}

	.statsOverview {
		padding: .3rem;
		background-color: var(--brown3);
		border-radius: 5px;
		position: absolute;
		right: 1rem;
		top: 6rem;
		/* border: 2px solid; */
		width: 45px;
		z-index: 2;
		/* opacity: .5; */

		& button {
			/* width: 40px; */
			height: 40px;
			border-radius: 5px;
			/* padding: .5rem 1rem; */
			background-color: unset;
			border: none;
			opacity: .8;
		}
		
		& button:not(:last-child) {
			margin-bottom: .5rem;
		}

		& button:hover {
			opacity: 1;
			background-color: var(--brown1);
		}
		/* height: 200px; */
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
		/* margin-right: 1rem; */
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
