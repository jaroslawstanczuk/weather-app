import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard, { WeatherCardProps } from './components/WeatherCard';

const App: React.FC = () => {
    const [ weather, setWeather ] = useState<WeatherCardProps | null>(null);
    const [ error, setError ] = useState('');
    // const [ searchResults, setSearchResults ] = useState<Array<Object>>([]);

    const fetchWeather = async (city: string) => {
        try {
            const key = '77ad5d969f014d0754d523f797cf177f';
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pl`);
            const data = res.data;
            console.log(data);
            setWeather({weather: {
                place: `${data.name}, ${data.sys.country}`,
                temperature : data.main.temp,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                description: data.weather[0].description,
                image: data.weather[0].icon
            }});
            setError('');
        } catch(err) {
            console.log(err);
            setError('Nie znaleziono miasta.');
        }
    };

    return (
        <div className="main">
            <div className="container">
                <SearchBar onSearch={fetchWeather} />
                {error && <p>{error}</p>}
                {!error && weather && <WeatherCard weather={weather.weather} />}
            </div>
        </div>
    )
}

export default App;