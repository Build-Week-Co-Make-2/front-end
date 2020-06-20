import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routes from './utils/Routes';
import Footer from './components/Footer';

function App() {
	console.log('Time for Smokey');

	return (
		<section className="App">
			<div>
				<NavBar />
				<Routes />
			</div>

			<Footer />
		</section>
	);
}

export default App;
