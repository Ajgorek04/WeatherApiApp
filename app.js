const button = document.querySelector("#button");
const input = document.querySelector("#input");

const cityName = document.querySelector("#cityname");

button.addEventListener("click", () => {
    let city = input.value;
    cityName.textContent = city;

    input.value = "";

    checkWeather(city);
});

const API_KEY = "53522ab6c9e4a4f6ed4f713d97ca6bed";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

async function checkWeather(city) {
    const response = await fetch(API_URL + `&q=${city}` + `&appid=${API_KEY}`);

    if (response.status == 404) {
        cityName.textContent = "Wrong city name";
    }

    let data = await response.json();

    const temp = Math.round(data.main.temp);
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const weatherIcon = data.weather[0].main;
    console.log(weatherIcon);

    const tempIcon = document.querySelector("#tempIcon");
    const tempValue = document.querySelector("#tempValue");
    const humidityValue = document.querySelector("#humidityValue");
    const windValue = document.querySelector("#windValue");

    tempValue.textContent = `${temp}°C`;
    windValue.textContent = ` ${wind} km/h`;
    humidityValue.textContent = ` ${humidity} %`;

    if (weatherIcon === "Clear") {
        tempIcon.src = src = "https://openweathermap.org/img/wn/01d@2x.png";
    } else if (weatherIcon === "Clouds") {
        tempIcon.src = src = "https://openweathermap.org/img/wn/02d@2x.png";
    } else if (weatherIcon === "Rain") {
        tempIcon.src = src = "https://openweathermap.org/img/wn/09d@2x.png";
    } else if (weatherIcon === "Drizzle") {
        tempIcon.src = src = "https://openweathermap.org/img/wn/10d@2x.png";
    } else if (weatherIcon === "Mist") {
        tempIcon.src = src = "https://openweathermap.org/img/wn/50d@2x.png";
    } else if (weatherIcon === "Snow") {
        tempIcon.src = src = "https://openweathermap.org/img/wn/13d@2x.png";
    }

    console.log(data);
}
