const _ = require("lodash");
const {
  getWeatherDataUsingOpenApi,
} = require("../../external-api/getWeatherDataUsingOpenApi");

const getWeatherData = async (req, res) => {
  try {
    const { lat, lon } = req.body;
    if (!lat || !lon) {
      return res.status(400).json({ success: false, message: "Bad request" });
    }
    const weatherDetails = await getWeatherDataUsingOpenApi(lat, lon);
    console.log("🚀 ~ getWeatherData ~ weatherDetails:", weatherDetails);

    let groupedDataByDateTime = _.groupBy(weatherDetails.list, "dt_txt");
    let consolidatedData = [];
    for (let dateTime of Object.keys(groupedDataByDateTime)) {
      let [date, time] = dateTime.split(" ");
      let consolidatedObject = {
        date,
        time,
        ...groupedDataByDateTime[dateTime][0],
      };
      consolidatedData.push(consolidatedObject);
    }

    let groupedDataByDate = _.groupBy(consolidatedData, "date");
    groupedDataByDate.city = weatherDetails.city;
    return res.status(200).json({ success: true, data: groupedDataByDate });
  } catch (error) {
    console.log("🚀 ~ getWeatherData ~ error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getWeatherData,
};
