import { Browser } from '../@types';

const { scribble }: Browser = window;

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
