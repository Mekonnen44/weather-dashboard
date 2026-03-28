import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Feels like: {weather.feelsLike}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
      <img src={weather.icon} alt={weather.description} />
      <p>{weather.description}</p>
    </div>
  );
};

export default WeatherCard;
