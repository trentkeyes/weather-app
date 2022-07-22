/* eslint-disable import/no-cycle */
import { fromUnixTime } from 'date-fns';
import { getUnitSystem } from './index';

const getLatLon = async (input) => {
  try {
    const latLonResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=5a5e3111582419d8b091603e36061930`,
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
  const unit = getUnitSystem();
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=5a5e3111582419d8b091603e36061930&units=${unit}`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return weatherData;
};

const adjustedForTimezone = (shiftedUnixTime) =>
  // eslint-disable-next-line implicit-arrow-linebreak
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
    unitSystem: data.unitSystem,
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

export default async function processWeatherData(city) {
  const [lat, lon] = await getLatLon(city);
  const weatherData = await getWeather([lat, lon]);
  weatherData.city = city;
  const weather = formatData(weatherData);
  return weather;
}
