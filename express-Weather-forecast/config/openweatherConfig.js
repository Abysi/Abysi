const getOpenWeatherUrl = (cityName, countryCode) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${process.env.OPENWEATHERAPI_KEY}`;
};
module.exports = getOpenWeatherUrl;
