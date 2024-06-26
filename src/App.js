import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-6xl p-4">
        <Header />
        <CurrentWeather />
        <Forecast />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
      <h1 className="text-lg font-bold">Current Weather</h1>
      <div className="flex items-center">
        <div className="relative mr-4">
          <select className="bg-gray-600 text-white py-1 px-2 rounded-lg">
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
          
        </div>
        <input
          type="text"
          placeholder="Search city..."
          className="bg-gray-600 text-white py-1 px-2 rounded-lg"
        />
        <button className="bg-gray-600 text-white py-1 px-2 rounded-lg ml-2">
          Search
        </button>
      </div>
    </header>
  );
};

const CurrentWeather = () => {
  return (
    <main className="p-4">
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center p-4">
          <img src="weather-icon.png" alt="Weather Icon" className="h-24 w-24" />
          <div className="text-5xl font-bold">49°C</div>
          <div className="text-lg mb-4">Hazy Sunlight</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="bg-gray-700 p-2 rounded-lg text-center">Humidity: 30%</div>
            <div className="bg-gray-700 p-2 rounded-lg text-center">Temperature: 49°C</div>
            <div className="bg-gray-700 p-2 rounded-lg text-center">Dew Point: 24°C</div>
            <div className="bg-gray-700 p-2 rounded-lg text-center">Visibility: 10 km</div>
          </div>
        </div>
      </div>
    </main>
  );
};

const ForecastCard = ({ day, details }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h3 className="font-bold">{day}</h3>
      <div>{details}</div>
    </div>
  );
};

const Forecast = () => {
  const forecastData = [
    { day: 'Today', details: 'Sunny, 45°C' },
    { day: 'Tomorrow', details: 'Partly Cloudy, 42°C' },
    // Add more forecast data as needed
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-2">Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecastData.map((forecast, index) => (
          <ForecastCard key={index} day={forecast.day} details={forecast.details} />
        ))}
      </div>
    </section>
  );
};

export default App;