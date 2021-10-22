const https = require("https");
const api = require("./api.json");

function printWeather(weatherData) {
  const message = `The temperature in ${weatherData.name} right now is ${weatherData.main.temp}.`;

  console.log(message);
}

function getWeatherData(zipCode) {
  // api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=metric&appid=
  // API Key:
  try {
    const request = https.get(
      `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=metric&appid=${api.key}`,
      (response) => {
        if (response.statusCode === 200) {
          let responseBody;

          response.on("data", (dataChunk) => {
            responseBody += dataChunk.toString();
          });

          response.on("end", () => {
            try {
              const weatherData = JSON.parse(responseBody);

              printWeather(weatherData);
            } catch (error) {
              console.error(error.message);
            }
          });
        }
      }
    );
  } catch (error) {
    console.error(error.message);
  }
}

getWeatherData(97203);
