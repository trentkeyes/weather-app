/* eslint-disable implicit-arrow-linebreak */
import { fromUnixTime } from 'date-fns';

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const unitToggle = document.getElementById('unitToggle');

let unitSystem = 'metric';
let activeCity = 'Hell';

const getLatLon = async (input) => {
  try {
    const latLonResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=5a5e3111582419d8b091603e36061930`,
      { mode: 'cors' }
    );
    const latLonData = await latLonResponse.json();
    const [lat, lon] = [latLonData[0].lat, latLonData[0].lon];
    return [lat, lon];
  } catch (error) {
    console.log(error);
  }
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

const formatData = (data) => {
  const city = data.city[0].toUpperCase() + data.city.substring(1);
  const shiftFromUTC = data.timezone_offset;
  const userUnixTime = data.current.dt;
  const currentDateTime = adjustedForTimezone(userUnixTime + shiftFromUTC);
  const date = currentDateTime.substring(0, 16);
  const time = currentDateTime.substring(17, 22);
  const descLower = data.current.weather[0].description;
  const description = descLower[0].toUpperCase() + descLower.substring(1);
  const temp = Math.round(data.current.temp);
  const feelsLike = Math.round(data.current.temp);
  const windSpeed = Math.round(data.current.temp);
  const currentIcon = data.current.weather[0].icon;

  const day1Unix = data.daily[1].dt;
  const day2Unix = data.daily[2].dt;
  const day3Unix = data.daily[3].dt;
  const day4Unix = data.daily[4].dt;
  const day5Unix = data.daily[5].dt;
  const day6Unix = data.daily[6].dt;
  const day7Unix = data.daily[7].dt;
  const day1 = adjustedForTimezone(day1Unix + shiftFromUTC).substring(0, 3);
  const day2 = adjustedForTimezone(day2Unix + shiftFromUTC).substring(0, 3);
  const day3 = adjustedForTimezone(day3Unix + shiftFromUTC).substring(0, 3);
  const day4 = adjustedForTimezone(day4Unix + shiftFromUTC).substring(0, 3);
  const day5 = adjustedForTimezone(day5Unix + shiftFromUTC).substring(0, 3);
  const day6 = adjustedForTimezone(day6Unix + shiftFromUTC).substring(0, 3);
  const day7 = adjustedForTimezone(day7Unix + shiftFromUTC).substring(0, 3);
  const day1Temp = Math.round(data.daily[1].temp.day);
  const day2Temp = Math.round(data.daily[2].temp.day);
  const day3Temp = Math.round(data.daily[3].temp.day);
  const day4Temp = Math.round(data.daily[4].temp.day);
  const day5Temp = Math.round(data.daily[5].temp.day);
  const day6Temp = Math.round(data.daily[6].temp.day);
  const day7Temp = Math.round(data.daily[7].temp.day);
  const day1Icon = data.daily[1].weather[0].icon;
  const day2Icon = data.daily[2].weather[0].icon;
  const day3Icon = data.daily[3].weather[0].icon;
  const day4Icon = data.daily[4].weather[0].icon;
  const day5Icon = data.daily[5].weather[0].icon;
  const day6Icon = data.daily[6].weather[0].icon;
  const day7Icon = data.daily[7].weather[0].icon;

  const weather = {
    description,
    temp,
    feelsLike,
    humidity: data.current.humidity,
    windSpeed,
    city,
    time,
    date,
    currentIcon,
    day1,
    day1Temp,
    day1Icon,
    day2,
    day2Temp,
    day2Icon,
    day3,
    day3Temp,
    day3Icon,
    day4,
    day4Temp,
    day4Icon,
    day5,
    day5Temp,
    day5Icon,
    day6,
    day6Temp,
    day6Icon,
    day7,
    day7Temp,
    day7Icon,
  };
  return weather;
};

const processWeatherData = async (city) => {
  const [lat, lon] = await getLatLon(city);
  const weatherData = await getWeather([lat, lon]);
  weatherData.city = city;
  const weather = formatData(weatherData);
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
  const currentIcon = document.getElementById('currentIcon');
  const feelsLike = document.getElementById('feelsLike');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('windSpeed');

  city.textContent = data.city;
  temp.textContent = `${data.temp}°${tempUnit}`;
  desc.textContent = data.description;
  date.textContent = data.date;
  time.textContent = data.time;
  feelsLike.textContent = `Feels Like: ${data.feelsLike}°${tempUnit}`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.windSpeed} ${speedUnit}`;
  currentIcon.src = `http://openweathermap.org/img/wn/${data.currentIcon}@2x.png`;

  const day1 = document.getElementById('day1');
  const day1Temp = document.getElementById('day1Temp');
  const day1Icon = document.getElementById('day1Icon');

  day1.textContent = data.day1;
  day1Temp.textContent = `${data.day1Temp}°${tempUnit}`;
  day1Icon.src = `http://openweathermap.org/img/wn/${data.day1Icon}@2x.png`;

  const day2 = document.getElementById('day2');
  const day2Temp = document.getElementById('day2Temp');
  const day2Icon = document.getElementById('day2Icon');

  day2.textContent = data.day2;
  day2Temp.textContent = `${data.day2Temp}°${tempUnit}`;
  day2Icon.src = `http://openweathermap.org/img/wn/${data.day2Icon}@2x.png`;

  const day3 = document.getElementById('day3');
  const day3Temp = document.getElementById('day3Temp');
  const day3Icon = document.getElementById('day3Icon');

  day3.textContent = data.day3;
  day3Temp.textContent = `${data.day3Temp}°${tempUnit}`;
  day3Icon.src = `http://openweathermap.org/img/wn/${data.day3Icon}@2x.png`;

  const day4 = document.getElementById('day4');
  const day4Temp = document.getElementById('day4Temp');
  const day4Icon = document.getElementById('day4Icon');

  day4.textContent = data.day4;
  day4Temp.textContent = `${data.day4Temp}°${tempUnit}`;
  day4Icon.src = `http://openweathermap.org/img/wn/${data.day4Icon}@2x.png`;

  const day5 = document.getElementById('day5');
  const day5Temp = document.getElementById('day5Temp');
  const day5Icon = document.getElementById('day5Icon');

  day5.textContent = data.day5;
  day5Temp.textContent = `${data.day5Temp}°${tempUnit}`;
  day5Icon.src = `http://openweathermap.org/img/wn/${data.day5Icon}@2x.png`;

  const day6 = document.getElementById('day6');
  const day6Temp = document.getElementById('day6Temp');
  const day6Icon = document.getElementById('day6Icon');

  day6.textContent = data.day6;
  day6Temp.textContent = `${data.day6Temp}°${tempUnit}`;
  day6Icon.src = `http://openweathermap.org/img/wn/${data.day6Icon}@2x.png`;

  const day7 = document.getElementById('day7');
  const day7Temp = document.getElementById('day7Temp');
  const day7Icon = document.getElementById('day7Icon');

  day7.textContent = data.day7;
  day7Temp.textContent = `${data.day7Temp}°${tempUnit}`;
  day7Icon.src = `http://openweathermap.org/img/wn/${data.day7Icon}@2x.png`;
};

const loading = document.querySelectorAll('.loading');
const currentWeather = document.querySelector('.currentWeather');
const forecastWeather = document.querySelectorAll('.dayForecast');

const showSpinners = () => {
  currentWeather.classList.add('hidden');
  forecastWeather.forEach((element) => element.classList.add('hidden'));
  loading.forEach((element) => element.classList.remove('hidden'));
};

const showContent = () => {
  loading.forEach((element) => element.classList.add('hidden'));
  currentWeather.classList.remove('hidden');
  forecastWeather.forEach((element) => element.classList.remove('hidden'));
};

const displayWeatherData = async (city) => {
  const data = await processWeatherData(city);
  addWeatherData(data);
  showContent();
};

const inputWeatherData = async () => {
  const city = searchInput.value;
  activeCity = city;
  searchInput.value = '';
  showSpinners();
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
  showSpinners();
  displayWeatherData(activeCity);
};

const inputWithEnterKey = (e) => {
  if (e.key === 'Enter') {
    inputWeatherData();
  }
};

searchInput.addEventListener('keypress', inputWithEnterKey);
searchBtn.addEventListener('click', inputWeatherData);
unitToggle.addEventListener('click', toggleUnits);

// add error message for city not in the database, server issue

displayWeatherData('Hell');
