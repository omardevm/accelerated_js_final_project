searchButton.addEventListener("click", () => {
  searchWeather(searchCity.value);
});

function searchWeather(str) {
  if (str.trim().length == 0) {
    return alert("Please enter a city name");
  } else {
    const url = `${base}/weather?q=${str}`;
    http.open("GET", url);
    http.onreadystatechange = function () {
      if (http.readyState === XMLHttpRequest.DONE && http.status == 200) {
          var data = JSON.parse(http.responseText);
          console.log(data);
      } else if (http.readyState === XMLHttpRequest.DONE) {
        return alert("Error on comunication");
      }
    };
  }
}
