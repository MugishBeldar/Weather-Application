const useCases = require('../usecase');

const makeRetriveWeatherDataAction = require('./retriver-weather-data-action');
const retriveWeatherDataAction = makeRetriveWeatherDataAction({
  retriveWeatherData: useCases.retriveWeatherData
}) ;

module.exports = Object.freeze({
  retriveWeatherDataAction,
})