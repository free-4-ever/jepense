import type { PageLoad } from './$types';

export const load: PageLoad = ({fetch}) => {
	// async function createFile(url: string, mime = 'audio/mpeg') {
	// 	let response = await fetch(`music/${url}`);
	// 	let data = await response.blob();
	// 	let metadata = {
	// 		type: mime
	// 	};
	// 	let file = new File([data], 'test.jpg', metadata);
	// 	return URL.createObjectURL(file)
	// }
	let music = [
		{
			title: 'Siccar point',
			desc: "Siccar Point is a rocky promontory in the county of Berwickshire on the east coast of Scotland. It is famous in the history of geology for Hutton's Unconformity found in 1788, which James Hutton regarded as conclusive proof of his uniformitarian theory of geological development. Music by Karine Polwart and Dave Milligan.",
			src: 'SiccarPoint.mp3',
		},
		{
			title: 'Braveheart Theme (piano)',
			desc: "The beautiful theme from the motion picture Braveheart (1995). The piece is originally composed by James Horner (1953-2015). Taken from Jacob Ladegaard's (Jacob's Piano ) YouTube page.",
			src: 'Braveheart.mp3',
		},
		{
			title: 'Intouchables | Una Mattina - Ludovico Einaudi',
			desc: " is a 2011 French buddy comedy-drama film written and directed by Olivier Nakache & Éric Toledano. Taken from Jacob Ladegaard's (Jacob's Piano ) YouTube page.",
			src: 'Intouchables.mp3',
		},
		{
			title: 'Javad Maroufi (piano)',
			desc: 'Javad Maroufi (1912-1993) was an Iranian composer and pianst. He started learning music at an early age under his father, Mousa Maroufi, who was also a musician and pianist. Javad Maroufi remains among the top Iranian pianists to date.',
			src: 'JavadMaroufi.mp3',
		},
		{
			title: 'Pleasant Spring (piano)',
			desc: 'is a song orignially composed by Darvish Khan (1872-1926), a renowned Iranian traditional musician. This is a solo piano rendition of the famous masterpiece by Javad Maroufi.',
			src: 'PleasantSpring.mp3',
		},
		{
			title: 'Rain of Love',
			desc: 'is a solo play by Iranian composer Naser Cheshmazar (1950-2018).',
			src: 'RainOfLove.mp3',
		}
	];

	return {
		title: 'Media',
		claimDrawer: true,
		music: music
	};
};
