import {
	Blog,
	Features,
	Footer,
	Header,
	Possibility,
	WhatSoundSurge,
} from './containers';
import { Navbar, Article, Feature, Brand, CTA } from './components';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatSoundSurge />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};
export default App;
