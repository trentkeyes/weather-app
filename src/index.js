/* eslint-disable implicit-arrow-linebreak */
import { fromUnixTime } from 'date-fns';

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const unitToggle = document.getElementById('unitToggle');

let unitSystem = 'metric';
let activeCity = 'Lisbon';

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
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=5a5e3111582419d8b091603e36061930&units=${unitSystem}`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return weatherData;
};

const adjustedForTimezone = (shiftedUnixTime) =>
  fromUnixTime(shiftedUnixTime).toUTCString().replace(' GMT', '');

const processWeatherData = async (city) => {
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
  //format and split up date and time
  // add city
  //icon
  //round decimals with Math.round(0.9)

  console.log(weather);
  console.log(`Local time: ${weather.time}`);
  return weather;
};

const addWeatherData = (data) => {
  let tempUnit;
  let speedUnit;
  if (unitSystem === 'metric') {
    tempUnit = 'C';
    speedUnit = 'km/h';
  } else {
    tempUnit = 'F';
    speedUnit = 'mp/h';
  }

  const temp = document.getElementById('temp');
  const desc = document.getElementById('desc');
  const city = document.getElementById('city');
  const date = document.getElementById('date');
  const time = document.getElementById('time');
  const feelsLike = document.getElementById('feelsLike');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('windSpeed');

  temp.textContent = `${data.temp} °${tempUnit}`;
  desc.textContent = data.description;
  //city.textContent = data.city
  date.textContent = data.time;
  time.textContent = data.time;
  feelsLike.textContent = `Feels Like: ${data.feelsLike} °${tempUnit}`;
  humidity.textContent = `Humidity: ${data.humidity}`;
  windSpeed.textContent = `Wind Speed: ${data.windSpeed} ${speedUnit}`;
  console.log('test');
  console.log(data);
};

const displayWeatherData = async (city) => {
  const data = await processWeatherData(city);
  addWeatherData(data);
};

const inputWeatherData = async () => {
  const city = searchInput.value;
  activeCity = city;
  searchInput.value = '';
  displayWeatherData(city);
};

const toggleUnits = () => {
  if (unitSystem === 'metric') {
    unitSystem = 'imperial';
    unitToggle.textContent = 'Display °C';
  } else {
    unitSystem = 'metric';
    unitToggle.textContent = 'Display °F';
  }
  displayWeatherData(activeCity);
};

searchBtn.addEventListener('click', inputWeatherData);
unitToggle.addEventListener('click', toggleUnits);

displayWeatherData('Lisbon');
