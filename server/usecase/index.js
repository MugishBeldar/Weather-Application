const openWeatherApi = require('../external-api/open-weather-api');
const config = require('../config');
const _ = require('lodash');

const makeRetriveWeatherData = require('./retrive-weather-data');
const retriveWeatherData = makeRetriveWeatherData({_, openWeatherApi, config}) ;

module.exports = Object.freeze({
  retriveWeatherData,
})