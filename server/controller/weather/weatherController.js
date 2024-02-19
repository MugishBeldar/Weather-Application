const _ = require("lodash");
const {
  getWeatherDataUsingOpenApi,
} = require("../../external-api/getWeatherDataUsingOpenApi");

const getWeatherData = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ success: false, message: "Bad request" });
    }
    const weatherDetails = await getWeatherDataUsingOpenApi(lat, lon);
    // console.log("🚀 ~ getWeatherData ~ weatherDetails:", weatherDetails);

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
    let groupDataByDays = {};
    const daysKey = ["today", "tomorrow", "3rd", "4th", "5th", "6th"];
    for (let i = 0; i <= Object.keys(groupedDataByDate).length; i++) {
      groupDataByDays[daysKey[i]] =
        groupedDataByDate[Object.keys(groupedDataByDate)[i]];
    }
    groupDataByDays.city = weatherDetails.city;
    return res.status(200).json({ success: true, data: groupDataByDays });
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
