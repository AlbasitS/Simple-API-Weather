const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector(".search-input");

function searchWeather() {
  // request API
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=4ef29b4cff8fe867c30aad73221687a9&units=metric")
    .then((response) => response.json()) //mengubah data pengembalian dari fetch(promise) menjadi json
    .then((response) => {
      let weatherList = document.querySelector(".weather-list");

      weatherList.innerHTML = `<div class="card shadow-lg mt-4" style="width: 20rem;">
      <div class="card-body">
        <h4 class="card-title">${response.name} - ${response.sys.country}</h4>
        <h4 class="card-title"> ${response.weather[0].main} </h4>
        <h5 class="card-subtitle mb-2 text-muted">${response.weather[0].description}</h5>
        <h6 class="card-subtitle mb-2 text-muted">wind speed: ${response.wind.speed} m/s</h6>
        <hr>
        <h6 class="card-subtitle mb-2 text-muted">Temperature: ${response.main.temp}°С</h6>
        <p class="card-text">Min: ${response.main.temp_min}°С <br> Max: ${response.main.temp_max}°С</p>
      </div>
    </div>`;
    });
}

// membuat event/action saat tombol search di klik
searchButton.addEventListener("click", () => {
  searchWeather();
});

// membuat event/action saat input ditekan enter
searchInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    searchWeather();
  }
});
