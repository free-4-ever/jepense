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
	
	onMount(async () => {
		if (browser) {
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
				holder: 'editorjs'
			});
		}
	});
</script>

{#if browser}
	<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
		<div id="editorjs" />
	</div>
{:else}
	<h1>W8</h1>
{/if}
