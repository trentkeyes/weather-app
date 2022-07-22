/* eslint-disable import/no-cycle */
import processWeatherData from './handleData';
import {
  getUnitSystem,
  getActiveCity,
  setActiveCity,
  setUnitSystem,
} from './index';

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const unitToggle = document.getElementById('unitToggle');
const loading = document.querySelectorAll('.loading');
const currentWeather = document.querySelector('.currentWeather');
const forecastWeather = document.querySelectorAll('.dayForecast');

const addWeatherData = (data) => {
  const unitSystem = getUnitSystem();
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

export default async function displayWeatherData(city) {
  const data = await processWeatherData(city);
  addWeatherData(data);
  showContent();
}

const inputWeatherData = async () => {
  const city = searchInput.value;
  setActiveCity(city);
  searchInput.value = '';
  showSpinners();
  displayWeatherData(city);
};

const inputWithEnterKey = (e) => {
  if (e.key === 'Enter') {
    inputWeatherData();
  }
};

const toggleUnits = () => {
  const unitSystem = getUnitSystem();
  if (unitSystem === 'metric') {
    setUnitSystem('imperial');
    unitToggle.textContent = 'Display °C';
  } else {
    setUnitSystem('metric');
    unitToggle.textContent = 'Display °F';
  }
  const activeCity = getActiveCity();
  showSpinners();
  displayWeatherData(activeCity);
};

searchInput.addEventListener('keypress', inputWithEnterKey);
searchBtn.addEventListener('click', inputWeatherData);
unitToggle.addEventListener('click', toggleUnits);
