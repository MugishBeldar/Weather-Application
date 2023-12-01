module.exports = function makeRetriveWeatherData({ _, openWeatherApi, config }) {
  return async function retriveWeatherData({ lat, lon }) {
    console.log('retriveWeatherData usecase:----', lat, lon);
    try {
      const params = {
        lat,
        lon,
        appid: config.openWeatherAppId,
      }
      const weatherDetails = await openWeatherApi.getWeatherDetails({ params })

      let groupedDataByDateTime = _.groupBy(weatherDetails.list, 'dt_txt');
      let consolidatedData = [];
      for (let dateTime of Object.keys(groupedDataByDateTime)) {
        let [date, time] = dateTime.split(' ');
        let consolidatedObject = { date, time, ...groupedDataByDateTime[dateTime][0] };
        consolidatedData.push(consolidatedObject);
      }

      let groupedDataByDate = _.groupBy(consolidatedData, 'date');
      groupedDataByDate.city = weatherDetails.city;
      return groupedDataByDate;
    } catch (error) {
      throw error;
    }
  }
}