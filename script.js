searchButton.addEventListener("click", () => {
  searchWeather(searchInput.value);
});

function searchWeather(str) {
  if (str.trim().length == 0) {
    return alert("Please enter a city name");
  } else {
    const url = `${base}/weather?q=${str}&units=metric&appid=${key}`;
    http.open("GET", url);
    http.onreadystatechange = function () {
      if (http.readyState === XMLHttpRequest.DONE && http.status == 200) {
        var data = JSON.parse(http.responseText);
        var weatherData = new Weather(
          str,
          data.weather[0].description.toUpperCase()
        );
        weatherData.temperature = data.main.temp;
        updateWeather(weatherData);
      } else if (http.readyState === XMLHttpRequest.DONE) {
        return alert("Error on comunication");
      }
    };
    http.send();
  }
}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;
}
