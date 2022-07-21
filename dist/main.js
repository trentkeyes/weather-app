/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n/* eslint-disable implicit-arrow-linebreak */\n\n\nconst searchInput = document.getElementById('search');\nconst searchBtn = document.getElementById('searchBtn');\nconst unitToggle = document.getElementById('unitToggle');\n\nlet unitSystem = 'metric';\nlet activeCity = 'Hell';\n\nconst getLatLon = async (input) => {\n  try {\n    const latLonResponse = await fetch(\n      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=5a5e3111582419d8b091603e36061930`,\n      { mode: 'cors' }\n    );\n    const latLonData = await latLonResponse.json();\n    const [lat, lon] = [latLonData[0].lat, latLonData[0].lon];\n    return [lat, lon];\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst getWeather = async (location) => {\n  const [lat, lon] = location;\n  const weatherResponse = await fetch(\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=5a5e3111582419d8b091603e36061930&units=${unitSystem}`,\n    { mode: 'cors' }\n  );\n  const weatherData = await weatherResponse.json();\n  return weatherData;\n};\n\nconst adjustedForTimezone = (shiftedUnixTime) =>\n  (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shiftedUnixTime).toUTCString().replace(' GMT', '');\n\nconst formatData = (data) => {\n  const city = data.city[0].toUpperCase() + data.city.substring(1);\n  const shiftFromUTC = data.timezone_offset;\n  const userUnixTime = data.current.dt;\n  const currentDateTime = adjustedForTimezone(userUnixTime + shiftFromUTC);\n  const date = currentDateTime.substring(0, 16);\n  const time = currentDateTime.substring(17, 22);\n  const descLower = data.current.weather[0].description;\n  const description = descLower[0].toUpperCase() + descLower.substring(1);\n  const temp = Math.round(data.current.temp);\n  const feelsLike = Math.round(data.current.temp);\n  const windSpeed = Math.round(data.current.temp);\n  const currentIcon = data.current.weather[0].icon;\n\n  const day1Unix = data.daily[1].dt;\n  const day2Unix = data.daily[2].dt;\n  const day3Unix = data.daily[3].dt;\n  const day4Unix = data.daily[4].dt;\n  const day5Unix = data.daily[5].dt;\n  const day6Unix = data.daily[6].dt;\n  const day7Unix = data.daily[7].dt;\n  const day1 = adjustedForTimezone(day1Unix + shiftFromUTC).substring(0, 3);\n  const day2 = adjustedForTimezone(day2Unix + shiftFromUTC).substring(0, 3);\n  const day3 = adjustedForTimezone(day3Unix + shiftFromUTC).substring(0, 3);\n  const day4 = adjustedForTimezone(day4Unix + shiftFromUTC).substring(0, 3);\n  const day5 = adjustedForTimezone(day5Unix + shiftFromUTC).substring(0, 3);\n  const day6 = adjustedForTimezone(day6Unix + shiftFromUTC).substring(0, 3);\n  const day7 = adjustedForTimezone(day7Unix + shiftFromUTC).substring(0, 3);\n  const day1Temp = Math.round(data.daily[1].temp.day);\n  const day2Temp = Math.round(data.daily[2].temp.day);\n  const day3Temp = Math.round(data.daily[3].temp.day);\n  const day4Temp = Math.round(data.daily[4].temp.day);\n  const day5Temp = Math.round(data.daily[5].temp.day);\n  const day6Temp = Math.round(data.daily[6].temp.day);\n  const day7Temp = Math.round(data.daily[7].temp.day);\n  const day1Icon = data.daily[1].weather[0].icon;\n  const day2Icon = data.daily[2].weather[0].icon;\n  const day3Icon = data.daily[3].weather[0].icon;\n  const day4Icon = data.daily[4].weather[0].icon;\n  const day5Icon = data.daily[5].weather[0].icon;\n  const day6Icon = data.daily[6].weather[0].icon;\n  const day7Icon = data.daily[7].weather[0].icon;\n\n  const weather = {\n    description,\n    temp,\n    feelsLike,\n    humidity: data.current.humidity,\n    windSpeed,\n    city,\n    time,\n    date,\n    currentIcon,\n    day1,\n    day1Temp,\n    day1Icon,\n    day2,\n    day2Temp,\n    day2Icon,\n    day3,\n    day3Temp,\n    day3Icon,\n    day4,\n    day4Temp,\n    day4Icon,\n    day5,\n    day5Temp,\n    day5Icon,\n    day6,\n    day6Temp,\n    day6Icon,\n    day7,\n    day7Temp,\n    day7Icon,\n  };\n  return weather;\n};\n\nconst processWeatherData = async (city) => {\n  const [lat, lon] = await getLatLon(city);\n  const weatherData = await getWeather([lat, lon]);\n  weatherData.city = city;\n  const weather = formatData(weatherData);\n  return weather;\n};\n\nconst addWeatherData = (data) => {\n  let tempUnit;\n  let speedUnit;\n  if (unitSystem === 'metric') {\n    tempUnit = 'C';\n    speedUnit = 'km/h';\n  } else {\n    tempUnit = 'F';\n    speedUnit = 'mp/h';\n  }\n  const temp = document.getElementById('temp');\n  const desc = document.getElementById('desc');\n  const city = document.getElementById('city');\n  const date = document.getElementById('date');\n  const time = document.getElementById('time');\n  const currentIcon = document.getElementById('currentIcon');\n  const feelsLike = document.getElementById('feelsLike');\n  const humidity = document.getElementById('humidity');\n  const windSpeed = document.getElementById('windSpeed');\n\n  city.textContent = data.city;\n  temp.textContent = `${data.temp}°${tempUnit}`;\n  desc.textContent = data.description;\n  date.textContent = data.date;\n  time.textContent = data.time;\n  feelsLike.textContent = `Feels Like: ${data.feelsLike}°${tempUnit}`;\n  humidity.textContent = `Humidity: ${data.humidity}%`;\n  windSpeed.textContent = `Wind Speed: ${data.windSpeed} ${speedUnit}`;\n  currentIcon.src = `http://openweathermap.org/img/wn/${data.currentIcon}@2x.png`;\n\n  const day1 = document.getElementById('day1');\n  const day1Temp = document.getElementById('day1Temp');\n  const day1Icon = document.getElementById('day1Icon');\n\n  day1.textContent = data.day1;\n  day1Temp.textContent = `${data.day1Temp}°${tempUnit}`;\n  day1Icon.src = `http://openweathermap.org/img/wn/${data.day1Icon}@2x.png`;\n\n  const day2 = document.getElementById('day2');\n  const day2Temp = document.getElementById('day2Temp');\n  const day2Icon = document.getElementById('day2Icon');\n\n  day2.textContent = data.day2;\n  day2Temp.textContent = `${data.day2Temp}°${tempUnit}`;\n  day2Icon.src = `http://openweathermap.org/img/wn/${data.day2Icon}@2x.png`;\n\n  const day3 = document.getElementById('day3');\n  const day3Temp = document.getElementById('day3Temp');\n  const day3Icon = document.getElementById('day3Icon');\n\n  day3.textContent = data.day3;\n  day3Temp.textContent = `${data.day3Temp}°${tempUnit}`;\n  day3Icon.src = `http://openweathermap.org/img/wn/${data.day3Icon}@2x.png`;\n\n  const day4 = document.getElementById('day4');\n  const day4Temp = document.getElementById('day4Temp');\n  const day4Icon = document.getElementById('day4Icon');\n\n  day4.textContent = data.day4;\n  day4Temp.textContent = `${data.day4Temp}°${tempUnit}`;\n  day4Icon.src = `http://openweathermap.org/img/wn/${data.day4Icon}@2x.png`;\n\n  const day5 = document.getElementById('day5');\n  const day5Temp = document.getElementById('day5Temp');\n  const day5Icon = document.getElementById('day5Icon');\n\n  day5.textContent = data.day5;\n  day5Temp.textContent = `${data.day5Temp}°${tempUnit}`;\n  day5Icon.src = `http://openweathermap.org/img/wn/${data.day5Icon}@2x.png`;\n\n  const day6 = document.getElementById('day6');\n  const day6Temp = document.getElementById('day6Temp');\n  const day6Icon = document.getElementById('day6Icon');\n\n  day6.textContent = data.day6;\n  day6Temp.textContent = `${data.day6Temp}°${tempUnit}`;\n  day6Icon.src = `http://openweathermap.org/img/wn/${data.day6Icon}@2x.png`;\n\n  const day7 = document.getElementById('day7');\n  const day7Temp = document.getElementById('day7Temp');\n  const day7Icon = document.getElementById('day7Icon');\n\n  day7.textContent = data.day7;\n  day7Temp.textContent = `${data.day7Temp}°${tempUnit}`;\n  day7Icon.src = `http://openweathermap.org/img/wn/${data.day7Icon}@2x.png`;\n};\n\nconst loading = document.querySelectorAll('.loading');\nconst currentWeather = document.querySelector('.currentWeather');\nconst forecastWeather = document.querySelectorAll('.dayForecast');\n\nconst showSpinners = () => {\n  currentWeather.classList.add('hidden');\n  forecastWeather.forEach((element) => element.classList.add('hidden'));\n  loading.forEach((element) => element.classList.remove('hidden'));\n};\n\nconst showContent = () => {\n  loading.forEach((element) => element.classList.add('hidden'));\n  currentWeather.classList.remove('hidden');\n  forecastWeather.forEach((element) => element.classList.remove('hidden'));\n};\n\nconst displayWeatherData = async (city) => {\n  const data = await processWeatherData(city);\n  addWeatherData(data);\n  showContent();\n};\n\nconst inputWeatherData = async () => {\n  const city = searchInput.value;\n  activeCity = city;\n  searchInput.value = '';\n  showSpinners();\n  displayWeatherData(city);\n};\n\nconst toggleUnits = () => {\n  if (unitSystem === 'metric') {\n    unitSystem = 'imperial';\n    unitToggle.textContent = 'Display °C';\n  } else {\n    unitSystem = 'metric';\n    unitToggle.textContent = 'Display °F';\n  }\n  showSpinners();\n  displayWeatherData(activeCity);\n};\n\nconst inputWithEnterKey = (e) => {\n  if (e.key === 'Enter') {\n    inputWeatherData();\n  }\n};\n\nsearchInput.addEventListener('keypress', inputWithEnterKey);\nsearchBtn.addEventListener('click', inputWeatherData);\nunitToggle.addEventListener('click', toggleUnits);\n\n// add error message for city not in the database, server issue\n\ndisplayWeatherData('Hell');\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;