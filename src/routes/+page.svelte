<script lang="ts">
	import type { PageData } from './$types';
	import { drawerOpen } from './store';
	// import EditorJS from '@editorjs/editorjs';
	export let data: PageData;

	// function increment() {
	// 	count.update(n => n + 1);
	// }
	// data.showDrawer = true
	console.log(data.showDrawer);

	const toggleDrawer = () => {
		// data.showDrawer = !data.showDrawer
		drawerOpen.set(!$drawerOpen);
		console.log(drawerOpen);
	};
</script>

<svelte:head>
	<title>Home | JePense</title>
	<meta name="description" content="Je Pense" />
</svelte:head>

<div class="row jusitfy jc">
	<div class="col-m-10 col-s-11 col-l-9 f-lll">
		<div class="t">
			<h3>Salut au Monde</h3>
			<div cite="https://genius.com/Walt-whitman-salut-au-monde-annotated">
				You whoever you are! <br />
				You daughter or son of England! <br />
				You of the mighty Slavic tribes and empires! you Russ in Russia! <br />
				You dim-descended, black, divine-soul'd African, large, fine-headed, <br />
				nobly-form'd, superbly destin'd, on equal terms with me! <br />
				You Norwegian! Swede! Dane! Icelander! you Prussian! <br />
				You Spaniard of Spain! you Portuguese! <br />
				You Frenchwoman and Frenchman of France! <br />
				You Belge! you liberty-lover of the Netherlands! (you stock whence I myself have descended;)
				<br />
				You sturdy Austrian! you Lombard! Hun! Bohemian! farmer of Styria! <br />
				You neighbor of the Danube! <br />
				You working-man of the Rhine, the Elbe, or the Weser! you working-woman too! <br />
				You Sardinian! you Bavarian! Swabian! Saxon! Wallachian! Bulgarian! <br />
				You Roman! Neapolitan! you Greek! <br />
				You lithe matador in the arena at Seville! <br />
				You mountaineer living lawlessly on the Taurus or Caucasus! <br />
				You Bokh horse-herd watching your mares and stallions feeding! <br />
				You beautiful-bodied Persian at full speed in the saddle shooting arrows to the mark! <br />
				You Chinaman and Chinawoman of China! you Tartar of Tartary! <br />
				You women of the earth subordinated at your tasks! <br />
				You Jew journeying in your old age through every risk to stand once on Syrian ground! <br />
				You other Jews waiting in all lands for your Messiah! <br />
				You thoughtful Armenian pondering by some stream of the Euphrates! <br />
				you peering amid the ruins of Nineveh! you ascending mount Ararat! <br />
				You foot-worn pilgrim welcoming the far-away sparkle of the minarets of Mecca! <br />
				You sheiks along the stretch from Suez to Bab-el-mandeb ruling your families and tribes!
				<br />
				You olive-grower tending your fruit on fields of Nazareth, Damascus, or lake Tiberias!
				<br />
				You Thibet trader on the wide inland or bargaining in the shops of Lassa! <br />
				You Japanese man or woman! you liver in Madagascar, Ceylon, Sumatra, Borneo! <br />
				All you continentals of Asia, Africa, Europe, Australia, indifferent of place! <br />
				All you on the numberless islands of the archipelagoes of the sea! <br />
				And you of centuries hence when you listen to me! <br />
				And you each and everywhere whom I specify not, but include just the same! <br />
				Health to you! good will to you all, from me and America sent! <br />

				Each of us inevitable, Each of us limitless—each of us with his or her right upon the earth,
				Each of us allow'd the eternal purports of the earth, Each of us here as divinely as any is
				here.
			</div>

			<h3>Welcome to Je Pense.</h3>
			<button on:click={toggleDrawer}>hope</button>
			<p>
				This is a personal space I use to share ideas, ideals, and stuff I like. <br />
				Hope you can find something useful here. <br />
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	p {
		font-size: large;
	}

	blockquote {
		font-size: larger;
		margin-top: 3rem;
		text-align: justify;

		&::first-letter {
			font-size: laerger;
		}
	}
</style>
