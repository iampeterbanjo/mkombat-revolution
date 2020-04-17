import React from 'react';
import './App.scss';

interface State {
	started: boolean;
}
const AudioControl = React.lazy(() => import('./components/AudioControl'));

export const App: React.FC = () => {
	const defaultState = {
		started: false,
	};
	const context = new AudioContext();
	const [state, setState] = React.useState<State>(defaultState);

	const handleStart = () => {
		setState({ ...state, started: true });
	};

	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			{state.started && <AudioControl context={context} />}
			{!state.started && (
				<button onClick={handleStart}>Press me to start</button>
			)}
		</React.Suspense>
	);
};
