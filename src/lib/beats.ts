import { Browser } from '../@types';
// import breakbeats from './breakbeats.json';

const { scribble }: Browser = window;

// export const breaks = (beat: string) => {
// 	const tracks = breakbeats[beat];
// 	for (const p in tracks) {
// 		const pattern = tracks[p].repeat(4);
// 		console.log(pattern);

// 		scribble
// 			.clip({
// 				pattern, // Repeat the pattern to get 4 bars
// 				notes: 'c4',
// 				subdiv: '16n',
// 			})
// 			.start();
// 	}
// };

export const test = scribble.clip({
	synth: 'PolySynth', // new property: synth
	pattern: '[xx]',
	notes: 'C4 D4 C4 D#4 C4 D4 C4 Bb3',
});

const funkyDrummer = {
	kick: 'x-x---x---x--x-R',
	snare: '----x--x-[xR]-xx--[xR]',
	ch: 'xxxxxx[xR]-xxxxx-x[x[RR]]',
	oh: '-------[xR]-----x-R',
};

export const funkyBeat = () => {
	for (const p in funkyDrummer) {
		scribble
			.clip({
				pattern: funkyDrummer[p].repeat(4), // Repeat the pattern to get 4 bars
				notes: 'c4',
				subdiv: '16n',
			})
			.start();
	}
};

export const startSimpleDemo = () => {
	scribble
		.clip({
			synth: 'PolySynth',
			pattern: '[xx]',
			notes: 'C4 D4 C4 D#4 C4 D4 C4 Bb3',
		})
		.start();
};

export const startBreakBeat = () => {
	// kick
	scribble
		.clip({
			pattern: 'x',
			sample: 'https://scribbletune.com/sounds/kick.wav',
		})
		.start();

	// bass
	scribble
		.clip({
			pattern: '[-x]',
			sample: 'https://scribbletune.com/sounds/bass.wav',
		})
		.start();

	// closed hats
	scribble
		.clip({
			pattern: '[xx][xx][xxx][xx]', // add a triplet in there
			sample: 'https://scribbletune.com/sounds/ch.wav',
		})
		.start();

	// open hats
	scribble
		.clip({
			pattern: '[-x][-x][-x][xx]',
			sample: 'https://scribbletune.com/sounds/oh.wav',
		})
		.start();

	// clap/snare
	scribble
		.clip({
			pattern: '-x',
			sample: 'https://scribbletune.com/sounds/snare.wav',
		})
		.start();
};
