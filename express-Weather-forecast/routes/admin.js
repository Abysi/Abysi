const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.post('/login', adminController.postStartData);

router.get('/weatherForecast', adminController.getForecastPage);

router.post('/getCityReport', adminController.getCityWeather);

module.exports = router;
