import { Features, Footer, Header, WhatSoundSurge } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>

			<WhatSoundSurge />
			<Features />

			<Footer />
		</div>
	);
};
export default App;
