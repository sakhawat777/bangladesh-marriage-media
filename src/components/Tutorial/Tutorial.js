import React from 'react';
import Footer from '../Footer/Footer';
import TopNavigation from '../TopNavigation/TopNavigation';
import './Tutorial.css';
const Tutorial = () => {
	return (
		<div>
			<TopNavigation></TopNavigation>
			<section className='tutorial-section'>
				<h2>টিউটোরিয়াল</h2>

				<h2>বায়োডাটা পূরণ পদ্ধতি(ভিডিও)</h2>
				<iframe
					width='100%'
					height='600'
					src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>

				<br />

				<h2>বায়োডাটা দেখার পদ্ধতি(ভিডিও) </h2>

				<iframe
					width='100%'
					height='600'
					src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default Tutorial;
