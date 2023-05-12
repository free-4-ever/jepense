<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageServerData, ActionData } from './$types';
	import { onMount } from 'svelte';
	// import { drawerOpen } from '../../store';
	// import {headerHeight} from '../../store'
	import { enhance } from '$app/forms';
	import Comments from './Comments.svelte';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';

	export let data: PageServerData;
	export let form: ActionData;

	let ready = false,
		drawer = false,
		voted = 0,
		tw = 0;
	// $: voteColor = voted != 0 ? (voted == 1 ? 'var(--green)' : 'var(--red)') : '';

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
				ready = true;
			},
			minHeight: 100
		});
	});


	async function castVote(vote: 1 | -1) {
		voted = vote;
		const res = await fetch('/api/vote', {
			method: 'POST',
			body: JSON.stringify({ vote: vote, post: data.post?.id })
			// headers: {
			// 	'Content-Type': 'application/json'
			// }
		});
		res.json().then((resData) => {
			data.post.up = resData.up;
			data.post.down = resData.down;
		});
		return null;
	}

	function comments() {
		drawer = !drawer;
		if (drawer && tw < 992) {
			setTimeout(() => {
				goto('#drawer');
			}, 500);
		}
	}

	// console.log(data.post.comments?.length)
</script>

<svelte:window bind:innerWidth={tw} />
<div class="row jc">
	<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
		<div class="terrain">
			<!-- <button on:click={() => drawer = !drawer}>click</button> -->
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
			<div class="actionBar">
				<div class="statsOverview">
					<button on:click={() => castVote(1)}>
						<div class="column align-center">
							<Icon
								icon="zondicons:thumbs-up"
								hFlip={true}
								color={voted == 1 ? 'var(--green)' : 'var(--emplDS)'}
							/>
							<span class="commentCount">{data.post.up}</span>
						</div>
					</button>
					<button on:click={() => castVote(-1)}>
						<div class="column align-center">
							<Icon
								icon="zondicons:thumbs-up"
								hFlip={true}
								vFlip={true}
								color={voted == -1 ? 'var(--red)' : 'var(--emplDS)'}
							/>
							<span class="commentCount">{data.post.down}</span>
						</div>
					</button>
					<button on:click={comments} disabled={data.post.commentCount == 0}>
						<div class="column align-center">
							<Icon icon="ic:round-comment" hFlip={true} color="var(--emplDS)" />
							<span class="commentCount">{data.post.commentCount}</span>
						</div>
					</button>
				</div>
			</div>
		</div>
		<div class="commentSection">
			<h3>🤔 Something to Add?</h3>
			{#if form?.success}
				<p class="success">Comment received. Will be visible once approved.</p>
			{/if}

			{#if form?.errors}
				<ul class="error">
					{#if form.errors.name}
						{#each form.errors.name as err}
							<li>
								{err}
							</li>
						{/each}
					{/if}
					{#if form.errors.comment}
						{#each form.errors.comment as err}
							<li>
								{err}
							</li>
						{/each}
					{/if}
				</ul>
			{/if}
			<div class="formWrapper">
				<form action="?/comment" method="post" use:enhance>
					<div class="row">
						<div class="column">
							<label for="name">Name</label>
							<input type="text" name="name" required />
						</div>
						<div class="column">
							<label for="email">Email</label>
							<input type="email" name="email" id="email" required />
						</div>
					</div>
					<div class="row">
						<div class="column">
							<label for="comment">Comment</label>
							<textarea
								name="comment"
								cols={tw > 992 ? 64 : null}
								rows="4"
								required
								minlength="10"
							/>
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

{#if drawer}
	<div id="drawer" class="drawer" in:slide={{ duration: tw >= 992 ? 2000 : 500 }}>
		<Comments comments={data.post.comments} />
	</div>
{/if}

<style lang="postcss">

	.drawer {
		position: absolute;
		right: 0;
		top: 0;
		width: 25%;
		height: 100%;
		/* background-color: aqua; */
		z-index: 2;
		box-shadow: 0px 9px 20px rgb(0 0 0 / 12%);
	}

	.terrain {
		position: relative;
		display: grid;
		grid-template-areas: 'article actionBar';
		grid-template-columns: 100% 5%;
		/* gap: 1rem; */
	}

	#editorjs {
		position: relative;
		grid-area: article;
	}

	.actionBar {
		grid-area: actionBar;
		position: relative;
		right: 2rem;
		margin-top: 5rem;
	}

	.statsOverview {
		padding: 0.3rem;
		background-color: var(--brown3);
		border-radius: 5px;
		position: sticky;
		display: flex;
		flex-flow: column;
		/* right: 3rem; */
		top: 3rem;
		/* border: 2px solid; */
		width: 40px;
		z-index: 2;
		/* visibility: hidden; */
		/* transition: visibility 2s; */
		opacity: 0;
		animation: appear 2s ease-out 1s 1 normal forwards;
		/* opacity: .5; */

		& button {
			color: var(--emplDS);
			height: 40px;
			border-radius: 5px;
			background-color: unset;
			border: none;
			opacity: 0.8;
		}

		@keyframes appear {
			from {
				opacity: 0;
			}

			to {
				opacity: 1;
			}
		}

		& button:hover {
			opacity: 1;
			background-color: var(--brown1);
		}
		/* height: 200px; */
	}

	/* #thumbsup {
		animation: tup 1.5s linear;
		transition: all 1s;
	}

	@keyframes tup {
		20% {
			transform: scale(1.5) rotate(20deg);
		}

		50% {
			transform: scale(1.5) rotate(10deg);
		}
	} */

	.commentSection {
		margin: 0 auto;
		max-width: 650px;
		/* padding: 2rem 0.5rem; */
	}
	.formWrapper {
		padding: 1rem 0.5rem;
		border: 5px dashed var(--first);
		border-radius: 10px;
		/* background: var(--grey2); */
	}

	.commentCount {
		font-size: smaller;
	}

	form {
		& label {
			margin-bottom: 5px;
			font-weight: bold;
		}

		input,
		textarea {
			padding: 0.5rem;
			border: 2px solid var(--first);
			border-radius: 5px;
		}

		& > .row:not(:last-child) {
			margin-bottom: 1rem;
		}

		button[type='submit'] {
			padding: 0.5rem;
			width: 80px;
			background-color: var(--first);
			border-radius: 5px;
			color: white;
			&:hover {
				background-color: green;
			}
		}
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

	/* .p-1 {
		padding: 1rem;
	} */
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

	@media only screen and (max-width: 992px) {
		.terrain {
			grid-template-columns: auto;
			grid-template-areas: 'article' 'actionBar';
		}

		.actionBar {
			position: static;
			margin: unset;
		}

		.statsOverview {
			display: grid;
			grid-template-columns: auto auto auto;
			column-gap: 1rem;
			justify-content: center;
			margin: 0 auto;
			width: min-content;
			/* background-color: unset; */

			& button {
				margin-bottom: 0;
				height: unset;
			}
		}

		.drawer {
			position: static;
			width: unset;
			height: min-content;
			margin-top: 1rem;
			/* right: 0;
			top: 0;
			width: 25%;
			height: 100%; */
			/* background-color: aqua; */
			/* z-index: 2; */
			/* box-shadow: 0px 9px 20px rgb(0 0 0 / 12%); */
		}

		.formWrapper {
			border-style: solid;
			border-width: 3px;
		}
	}

	@media only screen and (min-width: 992px) {
		.statsOverview button:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}
</style>
