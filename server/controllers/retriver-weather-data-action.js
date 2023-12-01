module.exports = function makeRetriveWeatherDataAction({
  retriveWeatherData,
}) {
  return async function retriveWeatherDataAction(req, res) {
    try {
      console.log('retriveWeatherDataAction:----',req.body);
      const weatherData = await retriveWeatherData({lat: req.body.lat, lon: req.body.lon});
      res.status(200).send({
        status: 'success',
        data: weatherData,
      })
    } catch (error) {
      console.log('error in retriveWeatherDataAction:---', error.message);
      res.status(500).send({
        status: 'error',
        message: error.response.message || error.message || error,
      })
    }
  }
}