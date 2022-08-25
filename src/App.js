import { useState } from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

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
					<div className='location'>{data.name}</div>
					<div className='temp'>
						{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
					</div>
					<div className='description'>
						{data.weather ? <p>{data.weather[0].main}</p> : null}
					</div>
				</div>
				{data.name !== undefined && (
					<div className='bottom'>
						<div className='feels'>
							{data.main ? (
								<p className='bold'>{data.main.feels_like.toFixed()}°C</p>
							) : null}
							<p>Feels Like</p>
						</div>
						<div className='humidity'>
							{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
							<p>Humidity</p>
						</div>
						<div className='wind'>
							{data.wind ? (
								<p className='bold'>{data.wind.speed.toFixed()} m/s</p>
							) : null}
							<p>Wind Speed</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
