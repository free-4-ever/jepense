<script lang="ts">
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import EditorJS from '@editorjs/editorjs';
	import ImageTool from '@editorjs/image';
	import Header from '@editorjs/header';
	import List from '@editorjs/list';
	import Delimiter from '@editorjs/delimiter';
	import Code from '@editorjs/code';
	import Link from '@editorjs/link';
	import Embed from '@editorjs/embed';

	export let data: PageServerData;

	let ready = false;

	onMount(async () => {
		new EditorJS({
			readOnly: true,
			// Other configuration properties
			tools: {
				image: ImageTool,
				header: Header,
				list: List,
				delimiter: Delimiter,
				code: Code,
				link: Link,
				embed: Embed
			},

			/**
			 * Initial Editor data
			 */
			data: JSON.parse(data.post!.content!),
			holder: 'editorjs',
			onReady: () => {
				// alert()
				ready = true;
			}
		});
	});
</script>

<div class="row items-x-center">
	<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
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
</div>

<style>
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
