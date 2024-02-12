const axios = require("axios");

const getWeatherDataUsingOpenApi = async (lat, lon) => {
  try {
    const params = {
      lat,
      lon,
      appid: process.env.APPID,
    };
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.openweathermap.org/data/2.5/forecast",
      headers: {},
      params,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getWeatherDataUsingOpenApi,
};
