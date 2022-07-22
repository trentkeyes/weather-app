/* eslint-disable import/no-cycle */
/* eslint-disable implicit-arrow-linebreak */
import displayWeatherData from './dom';

let unitSystem = 'metric';
export function getUnitSystem() {
  return unitSystem;
}
export function setUnitSystem(unit) {
  unitSystem = unit;
}

let activeCity = 'Querétaro';
export function getActiveCity() {
  return activeCity;
}
export function setActiveCity(city) {
  activeCity = city;
}

displayWeatherData('Querétaro');

// add error message for city not in the database, server issue
// 870
