import React, { useEffect, useRef } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import NavMenu from './components/NavMenu';
import triangle from './data/triangle.png';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
	const { options, ...rest } = props;
	const tilt = useRef(null);
  
	useEffect(() => {
	  VanillaTilt.init(tilt.current, options);
	}, [options]);
  
	return <div ref={tilt} {...rest} />;
  }

function App() {

const options = {
	scale: 1,
	speed: 1000,
	max: 10
};


	return (
		<div className="bg-white dark:bg-black text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<NavMenu />
			<div className="max-w-5xl w-11/12 mx-auto">
				<Intro />
				<Portfolio />
				<Timeline />
				<Contact />
				<Footer />
				{/* <Tilt className="box" options={options} data-tilt-full-page-listening>
					<img src={triangle} />
				</Tilt> */}
			</div>
		</div>
	)
}

export default App

