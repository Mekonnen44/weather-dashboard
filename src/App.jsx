import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import Loader from './components/Loader';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setError(null);
      // Assume fetchWeather and fetchForecast are defined and fetching from an API
      const weather = await fetchWeather(city);
      const forecast = await fetchForecast(city);
      setWeatherData(weather);
      setForecastData(forecast);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Failed to fetch weather data');
    }
  };

  const handleSearch = (city) => {
    setCities((prev) => [...prev, city]);
    fetchWeatherData(city);
    setSelectedCity(city);
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
      {forecastData.length > 0 && <ForecastCard forecast={forecastData} />}
    </div>
  );
};

export default App;
