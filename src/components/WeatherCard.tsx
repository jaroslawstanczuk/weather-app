import React from 'react';
import Indicator from './Indicator';
import './WeatherCard.css';

export interface WeatherCardProps {
    weather: {
        place: string,
        temperature: number,
        humidity: number,
        wind: number,
        description: string,
        image: string,
    }
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
    if (!weather) return null;

    const imgURL = `https://openweathermap.org/img/wn/${weather.image}@2x.png`;

    return (
        <div className="weather-info">
            <div className="weather-details">
            <h2>{weather.place}</h2>
            <img src={imgURL} title={weather.description} />
            <h1>{Math.round(weather.temperature)}°</h1>
            </div>
            <div className="weather-tiles">
                <div className="weather-tiles-row">
                    <Indicator indicator={
                        {
                            name: 'Wiatr',
                            value: Number(Math.round(weather.wind * 3.6)),
                            unit: 'kms'
                        }
                        }
                    />
                    <Indicator indicator={
                        {
                            name: 'Wilgotność',
                            value: Number(weather.humidity),
                            unit: 'percent'
                        }
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
