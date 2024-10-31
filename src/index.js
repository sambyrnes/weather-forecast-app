function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city; // innerHTML: Replaces h1 with a user's inputed city
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  // Why do we create separate function? Separation of concerns
  // Make API call and update the interface
  let apiKey = "76c81b0fc1ef1c3538e03a284oa1t4b1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function activateSearchFunction(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", activateSearchFunction);

searchCity("Seattle"); // Shows Seattle by default until user inputs something else
