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
  const dateTime = adjustedForTimezone(userUnixTime + shiftFromUTC);
  const date = dateTime.substring(0, 16);
  const time = dateTime.substring(17, 22);
  const descLower = weatherData.current.weather[0].description;
  const description = descLower[0].toUpperCase() + descLower.substring(1);
  const temp = Math.round(weatherData.current.temp);
  const feelsLike = Math.round(weatherData.current.temp);
  const windSpeed = Math.round(weatherData.current.temp);
  const weather = {
    description,
    temp,
    feelsLike,
    humidity: weatherData.current.humidity,
    windSpeed,
    city,
    time,
    date,
    dailyForecasts: weatherData.daily,
  };
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

  city.textContent = data.city;
  temp.textContent = `${data.temp} °${tempUnit}`;
  desc.textContent = data.description;
  date.textContent = data.date;
  time.textContent = data.time;
  feelsLike.textContent = `Feels Like: ${data.feelsLike} °${tempUnit}`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.windSpeed} ${speedUnit}`;
};

const showContentHideSpinners = () => {
  const loading = document.querySelectorAll('.loading');
  const currentWeather = document.querySelector('.currentWeather');
  const forecastWeather = document.querySelectorAll('.dayForecast');
  loading.forEach((element) => element.classList.add('hidden'));
  currentWeather.classList.remove('hidden');
  forecastWeather.forEach((element) => element.classList.remove('hidden'));
};

const displayWeatherData = async (city) => {
  const data = await processWeatherData(city);
  addWeatherData(data);
  showContentHideSpinners();
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

// add icon
// add error handlers

// add the ability to search when user hits enter

// add min width to daily divs

// add error message for bad input

displayWeatherData('Hell');
