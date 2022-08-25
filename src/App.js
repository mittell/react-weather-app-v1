import { useState } from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`;

	const handleSearch = (event) => {
		if (event.key === 'Enter') {
			axios.get(url).then((res) => {
				setData(res.data);
			});

			setLocation('');
		}
	};

	return (
		<div className='app'>
			<div className='search'>
				<input
					type='text'
					value={location}
					placeholder='Enter Location...'
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={handleSearch}
				/>
			</div>
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
						<p className='bold'>36°C</p>
						<p>Feels Like</p>
					</div>
					<div className='humidity'>
						<p className='bold'>20%</p>
						<p>Humidity</p>
					</div>
					<div className='wind'>
						<p className='bold'>12MPH</p>
						<p>Wind Speed</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
