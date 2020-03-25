const weatherIcons = require('../config/config');
function getWeatherIcon(humidity) {
  let icon = 'icons ';
  humidity <= 25
    ? (icon += weatherIcons[0])
    : humidity <= 50
    ? (icon += weatherIcons[1])
    : humidity <= 75
    ? (icon += weatherIcons[2])
    : (icon += weatherIcons[3]);
  return icon;
}
module.exports = getWeatherIcon;
