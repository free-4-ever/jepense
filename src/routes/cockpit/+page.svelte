<script lang="ts">
   
	import { onMount } from 'svelte';
	import EditorJS from '@editorjs/editorjs';
	import ImageTool from '@editorjs/image';
	import Header from '@editorjs/header';
	import List from '@editorjs/list';
	import Delimiter from '@editorjs/delimiter';
	import Code from '@editorjs/code';
	import Link from '@editorjs/link';
	import Embed from '@editorjs/embed';
	import { json } from '@sveltejs/kit';
   let edHandle : EditorJS;


	onMount(async () => {
		var editor = new EditorJS({
			// Other configuration properties
			tools: {
				image: {
					class: ImageTool,
					config: {
						endpoints: {
							byFile: `${window.location.origin}/api/upload-file`, // Your backend file uploader endpoint
							byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url
						}
					}
				},
				header: {
					class: Header,
					inlineToolbar: true,
				},
				list: List,
				delimiter: Delimiter,
				code: Code,
				link: Link,
				embed: Embed
			},

			/**
			 * This Tool will be used as default
			 */
			// defaultBlock: 'paragraph',

			/**
			 * Initial Editor data
			 */
			data: {
				blocks: [
					{
						type: 'header',
						data: {
							text: 'Editor.js',
							level: 2
						}
					},
					{
						type: 'paragraph',
						data: {
							text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.'
						}
					},
					{
						type: 'header',
						data: {
							text: 'Key features',
							level: 3
						}
					},
					{
						type: 'list',
						data: {
							items: [
								'It is a block-styled editor',
								'It returns clean data output in JSON',
								'Designed to be extendable and pluggable with a simple API'
							],
							style: 'unordered'
						}
					},
					{
						type: 'header',
						data: {
							text: 'What does it mean «block-styled editor»',
							level: 3
						}
					},
					{
						type: 'paragraph',
						data: {
							text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
						}
					},
					{
						type: 'paragraph',
						data: {
							text: `There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.`
						}
					},
					{
						type: 'header',
						data: {
							text: 'What does it mean clean data output',
							level: 3
						}
					},
					{
						type: 'paragraph',
						data: {
							text: 'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below'
						}
					},
					{
						type: 'paragraph',
						data: {
							text: `Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.`
						}
					},
					{
						type: 'paragraph',
						data: {
							text: 'Clean data is useful to sanitize, validate and process on the backend.'
						}
					},
					{
						type: 'delimiter',
						data: {}
					},
					{
						type: 'paragraph',
						data: {
							text: 'We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make its core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏'
						}
					},
					{
						type: 'image',
						data: {
							url: 'assets/codex2x.png',
							caption: '',
							stretched: false,
							withBorder: true,
							withBackground: false
						}
					}
				]
			},
			/**
			 * onReady callback
			 */
			onReady: () => {
				// console.log('Editor.js is ready to worck!');
            edHandle = editor;
			},
		});
	});

	const savePost = () => {
		edHandle
		.save()
		.then((outputData) => {
				// let data = new FormData();
				// data.append('post', outputData);
				console.log('Article data: ', outputData);
				fetch('/api', {
					method: 'POST',
					body: JSON.stringify(outputData),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			})
			.catch((error) => {
				console.log('Saving failed: ', error);
			});
	};
</script>

<div id="editorjs" />
<button on:click={savePost} type="submit">Save</button>

<style>
	div {
		padding: 1rem;
		border: 2px solid;
	}
	button {
		margin-top: 1rem;
	}
</style>
