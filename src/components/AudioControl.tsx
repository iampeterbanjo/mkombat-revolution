import React from 'react';
import { Browser } from '../@types';
import { startBreakBeat } from '../lib';

interface Props {
	context: AudioContext;
}

const { Tone }: Browser = window;

const AudioControl: React.FC<Props> = (props) => {
	startBreakBeat();

	const handlePlayTransport = () => {
		Tone.Transport.start();
	};

	const handleStopTransport = () => {
		Tone.Transport.stop();
	};

	return (
		<>
			<button onClick={handleStopTransport}>Stop scribble</button>
			<button onClick={handlePlayTransport}>Play scribble</button>
		</>
	);
};

export default AudioControl;
