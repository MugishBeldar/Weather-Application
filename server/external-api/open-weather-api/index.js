const axios = require('axios');
const constants = require('../../constant');

const makeGetWeatherDetails = require('./get-weather-details');
const getWeatherDetails = makeGetWeatherDetails({axios,constants});

module.exports = {
  getWeatherDetails,
}