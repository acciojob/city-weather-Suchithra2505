
// import React, { useState } from "react";
// import axios from "axios";
// import 'regenerator-runtime/runtime'

// const API_KEY = "2d19741fec5e1ebbce4e4b02007b3734";

// function App() {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState(null);

//   const search = async (e) => {
//     if (e.key === "Enter") {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
//       );
//       setWeather(response.data);
//       setQuery("");
//     }
//   };

//   const kelvinToFahrenheit = (k) => ((k - 273.15) * 9) / 5 + 32;

//   return (
//     <div className="app">
//       <input
//         type="text"
//         className="search"
//         placeholder="Enter a city"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyPress={search}
//       />
//       {weather && (
//         <div className="weather">
//           <div className="city">{weather.name}</div>
//           <div className="temperature">
//             {Math.round(kelvinToFahrenheit(weather.main.temp))}°F
//           </div>
//           <div className="description">{weather.weather[0].description}</div>
//           <div className="icon">
//             <img
//               src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
//               alt={weather.weather[0].description}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '2d19741fec5e1ebbce4e4b02007b3734';

const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Unable to fetch weather data. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
          className="search"
        />
        <button type="submit">Search</button>
      </form>
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Add logic to display appropriate weather icon */}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
