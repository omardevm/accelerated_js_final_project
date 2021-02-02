const searchButton = document.querySelector("#button");
const searchInput = document.querySelector("#city");
const weatherCity = document.querySelector("#weatherCity");
const weatherDescription = document.querySelector("#weatherDescription");
const weatherTemperature = document.querySelector("#weatherTemperature");
const http = new XMLHttpRequest();
const base = "http://api.openweathermap.org/data/2.5";
const key = "";

function Weather(cityName, description) {
  this.cityName = cityName;
  this.description = description;
  this._temperature = "";
}

Object.defineProperty(Weather.prototype, "temperature", {
  get: function () {
    return this._temperature;
  },
  set: function (value) {
    this._temperature = (value * 1.8 + 32).toFixed(2) + " F.";
  },
});
