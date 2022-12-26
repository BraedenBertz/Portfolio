import React from 'react';
import Contact from './components/Landing Page/Contact';
import Footer from './components/Landing Page/Footer';
import Intro from './components/Landing Page/Intro';
import Portfolio from './components/Landing Page/Portfolio';
import Timeline from './components/Landing Page/Timeline';
import NavMenu from './components/Landing Page/NavMenu';
import ControlledCarousel from './components/Landing Page/ControlledCarousel'

export default function App() {
	return (
		<div className="bg-white dark:bg-black text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<NavMenu />
			<div className="max-w-7xl w-11/12 mx-auto">
				<Intro />
				<Portfolio />
				<ControlledCarousel />
				<Timeline />
				<Contact />
				<Footer />
			</div>
		</div>
	)
}