const convertCalvinToCel = require('./convertTemp');
const getWeatherIcon = require('./convertHumidity');

function fillWeatherReport(data) {
  const city = {
    name: data.city.name,
    countryCode: data.city.country,
    id: data.city.id,
    temperature: convertCalvinToCel(data.list[0].main.temp),
    icon: getWeatherIcon(data.list[0].main.humidity),
    tomorrowTemperature: convertCalvinToCel(data.list[8].main.temp),
    tomorrowIcon: getWeatherIcon(data.list[8].main.humidity),
    dayAfterTomorrowTemperature: convertCalvinToCel(data.list[16].main.temp),
    dayAfterTomorrowIcon: getWeatherIcon(data.list[16].main.humidity)
  };
  return city;
}

module.exports = fillWeatherReport;
