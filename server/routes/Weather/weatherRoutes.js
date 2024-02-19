const express = require("express");
const {
  getWeatherData,
} = require("../../controller/weather/weatherController");

const weatherRouter = express.Router();

// Post/api/v1/retriveweatherdata
weatherRouter.get("/retriveweatherdata", getWeatherData);

module.exports = weatherRouter;
