import { useState } from 'react';
import axios from 'axios';

function App() {
	// const url = `https://api.openweathermap.org/data/2.5/weather?q=nagoya&appid=${process.env.OPEN_WEATHER_API_KEY}`;

	return (
		<div className='app'>
			<div className='container'>
				<div className='top'>
					<div className='location'>Nagoya</div>
					<div className='temp'>
						<h1>32°C</h1>
					</div>
					<div className='description'>
						<p>Clouds</p>
					</div>
				</div>
				<div className='bottom'>
					<div className='feels'>
						<p>36°C</p>
					</div>
					<div className='humidity'>
						<p>20%</p>
					</div>
					<div className='wind'>12 MPH</div>
				</div>
			</div>
		</div>
	);
}

export default App;
