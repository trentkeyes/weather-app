const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

async function getWeatherData() {
  const input = searchInput.value;
  // get lat and lon from city entered
  const latLonResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=5a5e3111582419d8b091603e36061930`,
    { mode: 'cors' }
  );
  const latLonData = await latLonResponse.json();
  const [lat, lon] = [latLonData[0].lat, latLonData[0].lon];
  // use lat and lon to find current city weather data (imperial units)
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a5e3111582419d8b091603e36061930&units=metric`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  // find city forecast (imperial units)
  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5a5e3111582419d8b091603e36061930&units=metric`,
    { mode: 'cors' }
  );
  const forecastData = await forecastResponse.json();

  console.log(weatherData);
  console.log(forecastData);
}

searchBtn.addEventListener('click', getWeatherData);
