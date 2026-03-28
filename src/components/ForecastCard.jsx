import React from 'react';

const ForecastCard = ({ forecast }) => {
  return (
    <div className="forecast-card">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <h3>{day.date}</h3>
          <p>Temp: {day.temperature}°C</p>
          <img src={day.icon} alt={day.description} />
          <p>{day.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
