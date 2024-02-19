import sunnyOrClearSky from '../../assets/sunnyOrClearSky.png';
import fewClouds from '../../assets/fewClouds.png';
import cloud from '../../assets/overcastCloudScatterCloudsOrBrokenCloud.png';
import showerRain from '../../assets/showerRain.png';
import rain from '../../assets/rain.png';
import thunderStrom from '../../assets/thunderstorm.png';
import snow from '../../assets/snow.png';
import mist from '../../assets/mist.png';
import lightRain from '../../assets/lightRain.png';
import React from 'react'; // Import React

const useCityWeatherDisplayController = () => {
  const getCountryNameFromContryCode = (code: string) => {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code);
  };

  const getImageForWeatherDescription = (description: string) => {
    switch (description) {
      case 'clear sky':
      case 'sunny':
        return sunnyOrClearSky;
      case 'few clouds':
        return fewClouds;
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds':
        return cloud;
      case 'shower rain':
        return showerRain;
      case 'rain':
        return rain;
      case 'thunderstorm':
        return thunderStrom;
      case 'snow':
      case 'light snow':
        return snow;
      case 'mist':
        return mist;
      default:
        return lightRain;
    }
  };



  return {
    getCountryNameFromContryCode,
    getImageForWeatherDescription,
  };
};

export default useCityWeatherDisplayController;
