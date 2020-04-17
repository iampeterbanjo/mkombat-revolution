import * as TonePlayer from 'tone';
import scribble from 'scribbletune';

export interface Browser extends Window {
	Tone: typeof TonePlayer;
	scribble: typeof scribble;
}
