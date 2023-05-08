<script lang="ts">
	import type { PageData } from './$types';
	// import { drawerOpen } from './store';
	import { page } from '$app/stores';
	// import EditorJS from '@editorjs/editorjs';
	export let data: PageData;

	// function increment() {
	// 	count.update(n => n + 1);
	// }
	// data.showDrawer = true
	// console.log(data.showDrawer);

	// const toggleDrawer = () => {
	// 	// data.showDrawer = !data.showDrawer
	// 	drawerOpen.set(!$drawerOpen);
	// 	console.log(drawerOpen);
	// };
</script>

<svelte:head>
	<title>Home | JePense</title>
	<meta name="description" content="Je Pense" />
</svelte:head>

<div class="row jusitfy jc">
	<div class="col-m-11 col-s-12 col-l-10">
		<div class="">
			<p class="">
				This is a personal space I use to share ideas, ideals, and stuff I like. <br />
				Hope you can find something useful here. <br />
			</p>
			<!-- <h2>Welcome {$page.data.user.username}</h2> -->
			<h2>
				Salut au Monde <span class="hint">(extended hello world! 😉)</span> <br />
				<span class="credit">By: Walt Whitman</span>
			</h2>
			<div class="salut">
				<span>Y</span>ou whoever you are!
				<br />
				<span>Y</span>ou daughter or son of England!
				<br />
				<span>Y</span>ou of the mighty Slavic tribes and empires! you Russ in Russia!
				<br />
				<span>Y</span>ou dim-descended, black, divine-soul'd African, large, fine-headed,
				nobly-form'd, superbly destin'd, on equal terms with me! <br />
				<span>Y</span>ou Norwegian! Swede! Dane! Icelander! you Prussian!
				<br />
				<span> Y</span>ou Spaniard of Spain! you Portuguese! <br />
				<span> Y</span>ou Frenchwoman and Frenchman of France! <br />
				<span> Y</span>ou Belge! you liberty-lover of the Netherlands! (you stock whence I myself
				have descended;)
				<br />
				<span> Y</span>ou sturdy Austrian! you Lombard! Hun! Bohemian! farmer of Styria! <br />
				<span> Y</span>ou neighbor of the Danube! <br />
				<span> Y</span>ou working-man of the Rhine, the Elbe, or the Weser! you working-woman too!
				<br />
				<span> Y</span>ou Sardinian! you Bavarian! Swabian! Saxon! Wallachian! Bulgarian! <br />
				<span> Y</span>ou Roman! Neapolitan! you Greek! <br />
				<span> Y</span>ou lithe matador in the arena at Seville! <br />
				<span> Y</span>ou mountaineer living lawlessly on the Taurus or Caucasus! <br />
				<span> Y</span>ou Bokh horse-herd watching your mares and stallions feeding! <br />
				<span> Y</span>ou beautiful-bodied Persian at full speed in the saddle shooting arrows to
				the mark!
				<br />
				<span> Y</span>ou Chinaman and Chinawoman of China! you Tartar of Tartary! <br />
				<span> Y</span>ou women of the earth subordinated at your tasks! <br />
				<span> Y</span>ou Jew journeying in your old age through every risk to stand once on Syrian
				ground!
				<br />
				<span> Y</span>ou other Jews waiting in all lands for your Messiah! <br />
				<span> Y</span>ou thoughtful Armenian pondering by some stream of the Euphrates! <br />
				<span> y</span>ou peering amid the ruins of Nineveh! you ascending mount Ararat! <br />
				<span> Y</span>ou foot-worn pilgrim welcoming the far-away sparkle of the minarets of Mecca!
				<br />
				<span> Y</span>ou sheiks along the stretch from Suez to Bab-el-mandeb ruling your familie s
				and tribes!
				<br />
				<span> Y</span>ou olive-grower tending your fruit on fields of Nazareth, Damascus, o r lake
				Tiberias!
				<br />
				<span> Y</span>ou Thibet trader on the wide inland or bargaining in the shops of Lassa!
				<br />
				<span> Y</span>ou Japanese man or woman! you liver in Madagascar, Ceylon, Sumatra, Borneo!
				<br />
				All you continentals of Asia, Africa, Europe, Australia, indifferent of place! <br />
				All you on the numberless islands of the archipelagoes of the sea! <br />
				And you of centuries hence when you listen to me! <br />
				And you each and everywhere whom I specify not, but include just the same! <br />
				<span class="predicate">
					Health to you! good will to you all, from me and America sent!
				</span> <br />

				Each of us inevitable, Each of us limitless—each of us with his or her right upon the earth,
				Each of us allow'd the eternal purports of the earth, Each of us here as divinely as any is
				here.
			</div>
			<!-- <button on:click={toggleDrawer}>hope</button> -->
		</div>
	</div>
	<!-- <div id="rightCol">
		<div class="imageWrapper">
			<img src="https://art-sheep.com/wp-content/uploads/2015/07/Whitman_at_about_fifty-677x1024.jpg" alt="Walt Whitman">
			<caption>WW</caption>
		</div>
		<p>
			American's national poet
		</p>
	</div> -->
</div>

<style lang="postcss">
	.row {
		position: relative;
	}

	/* #rightCol {
		position: absolute;
		right: 10%;
		top: 5%;
		width: 200px;
		p {
			font-size: small;
		}
		
		.imageWrapper {
			position: relative;
		}
		img {
			border-radius: 10px;
		}
	} */

	.hint {
		font-size: small;
	}

	.credit {
		font-size: small;
		font-weight: bolder;
	}

	.predicate {
		/* background-color: green; */
		/* border-bottom: 2px solid green; */
		margin-bottom: 1rem;
		display: inline-block;
		font-size: larger;
		font-weight: bold;
		color: green;
	}

	.salut {
		font-family: Noto;
	}

	.salut span:not(.predicate) {
		font-size: x-large;
		color: var(--first);
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
