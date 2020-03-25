const UserProfile = require('../models/userProfile');

const city = {
  name: 'Test',
  countryCode: 'Test',
  id: 123,
  temperature: 12,
  icon: 'icons sunny',
  tomorrowTemperature: 13,
  tomorrowIcon: 'icons rainy',
  dayAfterTomorrowTemperature: 14,
  dayAfterTomorrowIcon: 'icons snowy'
};

// const user = new UserProfile('admin', 'admin');

// user.cities.push(city);

exports.getCityWeather = (req, res, next) => {
  const cityName = req.body.cityName;

  const userProfile = new UserProfile({
    login: 'admin',
    password: 'admin',
    cities: ['Kiev', 'Lviv', 'Dnipro']
  });
  userProfile.save().then(result=>{
      console.log('UserCreated')
  }).catch(err=>{
  })

  //   user.getCityReport(req.body.cityName, cb => {
  //     res.redirect('/weatherForecast');
  //   });
};

exports.getIndex = (req, res, next) => {
  res.render('indexPage');
};

exports.postStartData = (req, res, next) => {
  user.login = req.body.userName;
  user.password = req.body.password;
  console.log(user);
  res.redirect('/weatherForecast');
};

exports.getForecastPage = (req, res, next) => {
  res.render('forecastPage', {
    cities: user.cities
  });
};
