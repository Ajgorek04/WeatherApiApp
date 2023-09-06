const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", () => {
    console.log(input.value);
    let city = input.value;
    const cityName = document.querySelector("#cityname");
    cityName.innerHTML = city;

    input.value = "";

    checkWeather(city);
});

const API_KEY = "53522ab6c9e4a4f6ed4f713d97ca6bed";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

async function checkWeather(city) {
    const response = await fetch(API_URL + `&q=${city}` + `&appid=${API_KEY}`);
    let data = await response.json();

    console.log(data);
}
