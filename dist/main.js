/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const searchInput = document.getElementById('search');\nconst searchBtn = document.getElementById('searchBtn');\n\nasync function getWeatherData() {\n  const input = searchInput.value;\n  // get lat and lon from city entered\n  const latLonResponse = await fetch(\n    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=5a5e3111582419d8b091603e36061930`,\n    { mode: 'cors' }\n  );\n  const latLonData = await latLonResponse.json();\n  const [lat, lon] = [latLonData[0].lat, latLonData[0].lon];\n  // use lat and lon to find current city weather data (imperial units)\n  const weatherResponse = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a5e3111582419d8b091603e36061930&units=metric`,\n    { mode: 'cors' }\n  );\n  const weatherData = await weatherResponse.json();\n  // find city forecast (imperial units)\n  const forecastResponse = await fetch(\n    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5a5e3111582419d8b091603e36061930&units=metric`,\n    { mode: 'cors' }\n  );\n  const forecastData = await forecastResponse.json();\n\n  console.log(weatherData);\n  console.log(forecastData);\n}\n\nsearchBtn.addEventListener('click', getWeatherData);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;