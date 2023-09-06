const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", () => {
    console.log(input.value);
    wiem = input.value;
    input.value = "";

    checkWeather(wiem);
});

const API_KEY = "53522ab6c9e4a4f6ed4f713d97ca6bed";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

async function checkWeather(city) {
    const response = await fetch(API_URL + `&q=${city}` + `&appid=${API_KEY}`);
    let data = await response.json();

    console.log(data);

    console.log(data.main.temp);
    console.log(data.weather[0].main);
    console.log(data.wind.speed);
}
