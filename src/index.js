/* eslint-disable implicit-arrow-linebreak */
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

const getWeather = async (location) => {
  const [lat, lon] = location;
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=5a5e3111582419d8b091603e36061930&units=metric`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return weatherData;
};

const adjustedForTimezone = (shiftedUnixTime) =>
  fromUnixTime(shiftedUnixTime).toUTCString().replace(' GMT', '');

const processWeatherData = async () => {
  const city = searchInput.value;
  const [lat, lon] = await getLatLon(city);
  const weatherData = await getWeather([lat, lon]);

  const [userUnixTime, shiftFromUTC] = [
    weatherData.current.dt,
    weatherData.timezone_offset,
  ];

  const weather = {
    main: weatherData.current.weather[0].main,
    description: weatherData.current.weather[0].description,
    temp: weatherData.current.temp,
    feelsLike: weatherData.current.feels_like,
    humidity: weatherData.current.humidity,
    windSpeed: weatherData.current.wind_speed,
    time: adjustedForTimezone(userUnixTime + shiftFromUTC),
    tempMin: weatherData.daily[0].temp.min,
    tempMax: weatherData.daily[0].temp.max,
    dailyForecasts: weatherData.daily,
  };

  console.log(weather);
  console.log(`Local time: ${weather.time}`);

  return weather;
};

// const renderWeatherData = () => {
//   //
// };

searchBtn.addEventListener('click', processWeatherData);
