<script lang="ts">
	import type { PageServerData } from './$types';
	// import EditorJS from '@editorjs/editorjs';
	import { onMount } from 'svelte';
	import EditorJS from '@editorjs/editorjs';
	import ImageTool from '@editorjs/image';
	import Header from '@editorjs/header';
	import List from '@editorjs/list';
	import Delimiter from '@editorjs/delimiter';
	import Code from '@editorjs/code';
	import Link from '@editorjs/link';
	import Embed from '@editorjs/embed';
	import { afterNavigate } from '$app/navigation';
	// let edHandle : EditorJS;

	export let data: PageServerData;

	// new EditorJS({
	// 	readOnly: true,
	// 	// Other configuration properties
	// 	tools: {
	// 		image: ImageTool,
	// 		header: Header,
	// 		list: List,
	// 		delimiter: Delimiter,
	// 		code: Code,
	// 		link: Link,
	// 		embed: Embed
	// 	},

	// 	/**
	// 	 * Initial Editor data
	// 	 */
	// 	data: JSON.parse(data.post!.content!),
   //    onReady() {
         
   //    },
	// });
   afterNavigate(() => {
      console.log('after nav');
		const edit = new EditorJS({
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
         onReady() {
            
         },
		});
   })
	onMount( () => {
      console.log('ho');
		// const edit = new EditorJS({
	   //    readOnly: true,
		// 	// Other configuration properties
		// 	tools: {
      //       image: ImageTool,
		// 		header: Header,
		// 		list: List,
		// 		delimiter: Delimiter,
		// 		code: Code,
		// 		link: Link,
		// 		embed: Embed
		// 	},

		// 	/**
		// 	 * Initial Editor data
		// 	 */
		// 	data: JSON.parse(data.post!.content!),
      //    holder: 'editorjs',
      //    onReady() {
            
      //    },
		// });
	});
</script>

<div class="col-m-9 col-s-10 col-l-8 text-center f-lll">
	<div id="editorjs" />
</div>
