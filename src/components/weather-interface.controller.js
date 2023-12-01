import moment from 'moment';
import {handleGetWeatherDetails} from '../api/weather-api';

const weatherInterfaceController = (setDisplayCurrentDayData) => {
  
  const getWeatherDetails = async  (location) => {
    try {
      const data = location;
      const response = await handleGetWeatherDetails(data);
      Object.keys(response.data.data).map((data)=>{
        const currentTime = moment().format("HH:mm:ss");
        const currentData = moment().format('YYYY-MM-DD');
        if(data !== 'city') {
          const time = response.data.data[data].filter((obj)=>{
          return obj.time<=currentTime && obj.date === currentData});
          if(time && time.length) {
            setDisplayCurrentDayData(time[time.length-1]);
          }
        }
      })
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  return {
    getWeatherDetails,
  }
}
export default weatherInterfaceController;