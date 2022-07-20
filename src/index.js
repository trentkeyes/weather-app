import { fromUnixTime } from 'date-fns';

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

const getLatLon = async (input) => {
  const latLonResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=5a5e3111582419d8b091603e36061930`,
    { mode: 'cors' }
  );
  const latLonData = await latLonResponse.json();
  const [lat, lon] = [latLonData[0].lat, latLonData[0].lon];
  return [lat, lon];
};

const getCurrentWeather = async (location) => {
  const [lat, lon] = location;
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a5e3111582419d8b091603e36061930&units=metric`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return weatherData;
};

const getForecastWeather = async (location) => {
  const [lat, lon] = location;
  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5a5e3111582419d8b091603e36061930&units=metric`,
    { mode: 'cors' }
  );
  const forecastData = await forecastResponse.json();
  return forecastData;
};

const processWeatherData = async () => {
  const city = searchInput.value;
  const [lat, lon] = await getLatLon(city);
  const [currentWeatherData, forecastWeatherData] = await Promise.all([
    getCurrentWeather([lat, lon]),
    getForecastWeather([lat, lon]),
  ]).then((data) => data);

  console.log(currentWeatherData);
  console.log(forecastWeatherData);

  const currentWeather = {
    main: currentWeatherData.weather[0].main,
    description: currentWeatherData.weather[0].description,
    temp: currentWeatherData.main.temp,
    tempMin: currentWeatherData.main.temp_min,
    tempMax: currentWeatherData.main.temp_max,
    feelsLike: currentWeatherData.main.feels_like,
    humidity: currentWeatherData.main.humidity,
    windSpeed: currentWeatherData.wind.speed,
    time: fromUnixTime(currentWeatherData.dt + currentWeatherData.timezone)
      .toUTCString()
      .replace('GMT', ''),
    timezone: currentWeatherData.timezone,
  };

  console.log(currentWeather);
  console.log(`Local time: ${currentWeather.time}`);

  const forecastWeather = {};

  return [currentWeather, forecastWeather];
};

searchBtn.addEventListener('click', processWeatherData);
