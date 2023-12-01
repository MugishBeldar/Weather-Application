const controllers = require("./controllers");
const express = require("express");
const router = express.Router();

// ALL API
router.post('/retriveweatherdata', controllers.retriveWeatherDataAction );

module.exports = {router}