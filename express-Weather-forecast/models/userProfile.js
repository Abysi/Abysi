const axios = require('axios');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cities: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('UserProfile', userProfileSchema);















// const getOpenWeatherUrl = require('../config/openweatherConfig');
// const fillWeatherReport = require('../utils/reportCityWeather');

// class UserProfile {
//   constructor(login, password) {
//     this.login = login;
//     this.password = password;
//     this.cities = [];
//   }

//   getCityReport(cityName, cb) {
//     const url = getOpenWeatherUrl(cityName, '');
//     axios.get(url).then(data => {
//       const convertedData = fillWeatherReport(data.data);
//       this.cities.push(convertedData);
//       return cb(true);
//     });
//   }
// }

// module.exports = UserProfile;
