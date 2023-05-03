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
		<div class="">
			<h3>Salut au Monde</h3>
			<div class="salut">
				<p>You whoever you are!</p>
				<br />
				<p>You daughter or son of England!</p>
				<br />
				<p>You of the mighty Slavic tribes and empires! you Russ in Russia!</p>
				<br />
				<p>You dim-descended, black, divine-soul'd African, large, fine-headed,</p>
				<br />
				nobly-form'd, superbly destin'd, on equal terms with me! <br />
				<p>You Norwegian! Swede! Dane! Icelander! you Prussian!</p>
				<br />
				<span> You Spaniard of Spain! you Portuguese! </span> <br />
				<span> You Frenchwoman and Frenchman of France! </span> <br />
				<span>
					You Belge! you liberty-lover of the Netherlands! (you stock whence I myself hav
				</span>e descended;)
				<br />
				<span> You sturdy Austrian! you Lombard! Hun! Bohemian! farmer of Styria! </span> <br />
				<span> You neighbor of the Danube! </span> <br />
				<span> You working-man of the Rhine, the Elbe, or the Weser! you working-woman too! </span>
				<br />
				<span> You Sardinian! you Bavarian! Swabian! Saxon! Wallachian! Bulgarian! </span> <br />
				<span> You Roman! Neapolitan! you Greek! </span> <br />
				<span> You lithe matador in the arena at Seville! </span> <br />
				<span> You mountaineer living lawlessly on the Taurus or Caucasus! </span> <br />
				<span> You Bokh horse-herd watching your mares and stallions feeding! </span> <br />
				<span>
					You beautiful-bodied Persian at full speed in the saddle shooting arrows to the mark!
				</span> <br />
				<span> You Chinaman and Chinawoman of China! you Tartar of Tartary! </span> <br />
				<span> You women of the earth subordinated at your tasks! </span> <br />
				<span>
					You Jew journeying in your old age through every risk to stand once on Syrian ground!
				</span> <br />
				<span> You other Jews waiting in all lands for your Messiah! </span> <br />
				<span> You thoughtful Armenian pondering by some stream of the Euphrates! </span> <br />
				<span> you peering amid the ruins of Nineveh! you ascending mount Ararat! </span> <br />
				<span>
					You foot-worn pilgrim welcoming the far-away sparkle of the minarets of Mecca!
				</span> <br />
				<span> You sheiks along the stretch from Suez to Bab-el-mandeb ruling your familie </span>s
				and tribes!
				<br />
				<span> You olive-grower tending your fruit on fields of Nazareth, Damascus, o </span>r lake
				Tiberias!
				<br />
				<span> You Thibet trader on the wide inland or bargaining in the shops of Lassa! </span>
				<br />
				<span> You Japanese man or woman! you liver in Madagascar, Ceylon, Sumatra, Borneo! </span>
				<br />
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

	.salut {
		font-family: Noto;
	}
	.salut span::first-letter {
		font-size: large;
		color: red;
	}

	.salut p::first-letter {
		font-size: large;
		color: red;
	}

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
