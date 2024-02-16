import sunnyOrClearSky from '../../assets/sunnyOrClearSky.png'
import fewClouds from '../../assets/fewClouds.png'
import cloud from '../../assets/overcastCloudScatterCloudsOrBrokenCloud.png'
import useCityWeatherDisplayController from './cityWeatherDisplay.controller'
import showerRain from '../../assets/showerRain.png'
import rain from '../../assets/rain.png'
import thunderStrom from '../../assets/thunderstorm.png'
import snow from '../../assets/snow.png';
import mist from '../../assets/mist.png';
import lightRain from '../../assets/lightRain.png';
import SearchCities from '../searchCities/searchCities'
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGrass } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { WeatherDetailsTypes } from '../../types'
import { useAppStore } from '../../store'

const CityWeatherDisplay = () => {

  const { getCountryNameFromContryCode } = useCityWeatherDisplayController();
  const { weatherData } = useAppStore();
  // console.log("weatherData: \n\n\n\n", weatherData);

  return (
    <>
      {weatherData && Object.keys(weatherData).length && <>
        <SearchCities/>
        <div className='grid grid-rows-3 h-[99.5%]'>
          <div className=' grid grid-cols-2 mx-4'>

            <div className='grid grid-rows-2 '>
              <div className='flex flex-col justify-center'>
                <p className='font-bold text-3xl sm:text-4xl'>{weatherData?.city?.name} <span className='text-sm text-customGray'>{weatherData && getCountryNameFromContryCode(weatherData?.city?.country)}</span></p>
                <p className='text-customGray'> {weatherData['today'][0]?.weather[0].description} </p>
              </div>
              <div className='flex items-center text-3xl sm:text-5xl'>
                {/* {weatherData[Object.keys(weatherData)[0]][0]?.main?.temp} */}
                {weatherData['today'][0]?.main?.temp} K
              </div>
            </div>
            <div className='grid place-items-center'>
              {
                weatherData['today'][0]?.weather[0]?.description === 'clear sky' || weatherData['today'][0]?.weather[0]?.description === "sunny" ?
                  <img src={sunnyOrClearSky} alt="" className='w-full sm:w-[200px]' /> :
                  weatherData['today'][0]?.weather[0]?.description === 'few clouds' ?
                    <img src={fewClouds} alt="" className='w-full sm:w-[200px]' /> :
                    weatherData['today'][0]?.weather[0]?.description === 'scattered clouds' || weatherData['today'][0]?.weather[0]?.description === "broken clouds" || weatherData['today'][0]?.weather[0]?.description === "overcast clouds" ?
                      <img src={cloud} alt="" className='w-full sm:w-[200px]' /> :
                      weatherData['today'][0]?.weather[0]?.description === 'shower rain' ?
                        <img src={showerRain} alt="" className='w-full sm:w-[200px]' /> :
                        weatherData['today'][0]?.weather[0]?.description === 'rain' ?
                          <img src={rain} alt="" className='w-full sm:w-[200px]' /> :
                          weatherData['today'][0]?.weather[0]?.description === 'thunderstorm' ?
                            <img src={thunderStrom} alt="" className='w-full sm:w-[200px]' /> :
                            weatherData['today'][0]?.weather[0]?.description === 'snow' || weatherData['today'][0]?.weather[0]?.description === 'light snow' ?
                              <img src={snow} alt="" className='w-full sm:w-[200px]' /> :
                              weatherData['today'][0]?.weather[0]?.description === 'mist' ?
                                <img src={mist} alt="" className='w-full sm:w-[200px]' /> :
                                <img src={lightRain} alt="" className='w-full sm:w-[200px]' />
              }
            </div>
          </div>

          <div className='mx-4 bg-customCharcolBlack rounded-xl mb-3'>
            <p className='text-customGray text-sm m-3'>TODAY'S FORECAST</p>
            <div className={`flex justify-evenly`}>
              {weatherData && weatherData['today'].map((obj: WeatherDetailsTypes, index: number) => {
                return (
                  <div className='grid place-items-center my-3' key={index}>
                    <p className='text-[10px] sm:text-[16px] md:my-1' key={index}>{obj.time}</p>
                    {
                      obj?.weather[0].description === 'clear sky' || obj?.weather[0].description === "sunny" ?
                        <img src={sunnyOrClearSky} alt="" className='md:h-[140px] pr-2' /> :
                        obj?.weather[0].description === 'few clouds' ?
                          <img src={fewClouds} alt="" className='md:h-[140px] pr-2' /> :
                          obj?.weather[0].description === 'scattered clouds' || obj?.weather[0].description === "broken clouds" || obj?.weather[0].description === "overcast clouds" ?
                            <img src={cloud} alt="" className='md:h-[140px] pr-2' /> :
                            obj?.weather[0].description === 'shower rain' ?
                              <img src={showerRain} alt="" className='md:h-[140px] pr-2' /> :
                              obj?.weather[0].description === 'rain' ?
                                <img src={rain} alt="" className='md:h-[140px] pr-2' /> :
                                obj?.weather[0].description === 'thunderstorm' ?
                                  <img src={thunderStrom} alt="" className='md:h-[140px] pr-2' /> :
                                  obj?.weather[0].description === 'snow' || obj?.weather[0].description === 'light snow' ?
                                    <img src={snow} alt="" className='md:h-[140px] pr-2' /> :
                                    obj?.weather[0].description === 'mist' ?
                                      <img src={mist} alt="" className='md:h-[140px] pr-2' /> :
                                      <img src={lightRain} alt="" className='md:h-[140px] pr-2' />
                    }
                    <p className='text-[10px] sm:text-[16px]'>{obj?.weather[0].description}</p>
                    <p className='text-[10px] sm:text-[16px]'>{obj?.main?.temp} K</p>
                  </div>
                )
              })}

            </div>
          </div>
          <div className='mx-4 bg-customCharcolBlack rounded-xl text-sm'>
            <p className='text-customGray text-sm m-3'>MORE INFO</p>
            {
              weatherData && <div className='grid grid-cols-3 justify-center place-items-center gap-y-10 sm:gap-y-20 sm:mt-10'>
                <div className='flex justify-center items-center'>
                  <div className=''>
                    <CiTempHigh size={30} color='#A1A7B3' className='mr-2' />
                  </div>
                  <div>
                    <p>Real Feel</p>
                    <p>{weatherData['today'][0].main.feels_like} K</p>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <div className="">
                    <FaWind size={30} color='#A1A7B3' className='mr-2' />
                  </div>
                  <div>
                    <p>Wind</p>
                    <p>{weatherData['today'][0].wind.speed} m/s</p>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <div className="">
                    <WiHumidity size={30} color='#A1A7B3' className='mr-2' />
                  </div>
                  <div>
                    <p>Humidity</p>
                    <p>{weatherData['today'][0].main.humidity} %</p>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <div className="" >
                    <IoIosSpeedometer size={30} color='#A1A7B3' className='mr-2' />
                  </div>
                  <div>
                    <p>Pressure</p>
                    <p>{weatherData['today'][0].main.pressure} hPa</p>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <div className="" >
                    <GiGrass size={30} color='#A1A7B3' className='mr-2' />
                  </div>
                  <div>
                    <p>Ground level</p>
                    <p>{weatherData['today'][0].main.grnd_level} hPa</p>
                  </div>
                </div>
                <div className='flex  justify-center items-center'>
                  <div className="">
                    <FaWater size={30} color='#A1A7B3' className='mr-2' />
                  </div>
                  <div>
                    <p>Sea level</p>
                    <p>{weatherData['today'][0].main.sea_level} hPa</p>
                  </div>
                </div>

              </div>
            }
          </div>
        </div></>}

    </>
  )
}

export default CityWeatherDisplay