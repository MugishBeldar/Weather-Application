module.exports = function makeGetWeatherDetails({axios, constants}) {
  return async function getWeatherDetails({params}) {  // lat, lon
    try {
      const headers = {
        'Content-Type': 'application/json',
      }

      const config = {
        method: 'GET',
        url: `${constants.prefix}/data/2.5/forecast`,
        params,
        headers,
      }
      
      const response = await axios.request(config);
      return response.data;
      
    } catch (error) {
      throw error;
    }
  }
}