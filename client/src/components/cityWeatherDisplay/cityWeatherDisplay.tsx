import useCityWeatherDisplayController from './cityWeatherDisplay.controller'
import SearchCities from '../searchCities/searchCities'

import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGrass } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { WeatherDetailsTypes } from '../../types'
import { useAppStore } from '../../store'
import useHelper from '../../utils/helper';

const CityWeatherDisplay = () => {

  const { getCountryNameFromContryCode, getImageForWeatherDescription } = useCityWeatherDisplayController();
  const { weatherData } = useAppStore();
  const { getTemperature, getWindSpeed, getPressure } = useHelper();

  const generateWeatherInfoItem = (icon: React.ReactNode, title: string, value: string) => {
    return (
      <div className='flex justify-center items-center p-4 mb-2 '>
        <div >{icon}</div>
        <div>
          <p>{title}</p>
          <p>{value}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {
        weatherData && Object.keys(weatherData).length &&
        <>
          <div className='flex flex-col h-full'>
            <div >
              <SearchCities />
            </div>

            <div className='flex items-center m-4 h-[250px]'>
              <div className='flex-1'>
                <div className='mb-5'>
                  <p className='font-bold text-3xl sm:text-4xl'>{weatherData?.city?.name} <span className='text-sm text-customGray'>{getCountryNameFromContryCode(weatherData?.city?.country)}</span></p>
                  <p className='text-customGray'> {weatherData['today'][0]?.weather[0].description} </p>
                </div>
                <div className='text-3xl sm:text-5xl'>
                  {getTemperature(weatherData['today'][0]?.main?.temp)}
                </div>
              </div>
              <div>
                {weatherData['today'][0]?.weather[0]?.description &&
                  <img
                    src={getImageForWeatherDescription(weatherData['today'][0]?.weather[0]?.description)}
                    alt=""
                    className='w-[170px]'
                  />
                }
              </div>
            </div>

            <div className='flex-1 m-4 bg-customCharcolBlack rounded-xl mb-3'>
              <p className='text-customGray text-sm m-3'>TODAY'S FORECAST</p>
              <div className={`flex justify-evenly`}>
                {weatherData && weatherData['today'].map((obj: WeatherDetailsTypes, index: number) => {
                  return (
                    <div className='flex flex-col justify-center items-center my-3' key={index}>
                      <p className='text-[10px] sm:text-[16px] md:my-1' key={index}>{obj.time}</p>
                      {
                        <img
                          src={getImageForWeatherDescription(obj?.weather[0].description)}
                          alt=""
                          className='md:h-[140px] pr-2' />
                      }
                      <p className='text-[10px] sm:text-[16px]'>{obj?.weather[0].description}</p>
                      <p className='text-[10px] sm:text-[16px]'>{getTemperature(obj?.main?.temp)}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='m-4 bg-customCharcolBlack rounded-xl'>
              <p className='text-customGray text-sm m-3'>MORE INFO</p>
              {weatherData && (
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                  {generateWeatherInfoItem(
                    <CiTempHigh size={30} color='#A1A7B3' className='mr-2' />,

                    "Real Feel",
                    `${getTemperature(weatherData['today'][0].main.feels_like)}`
                  )}
                  {generateWeatherInfoItem(
                    <FaWind size={30} color='#A1A7B3' className='mr-2' />,
                    "Wind",
                    `${getWindSpeed(weatherData['today'][0].wind.speed)}`
                  )}
                  {generateWeatherInfoItem(
                    <WiHumidity size={30} color='#A1A7B3' className='mr-2' />,
                    "Humidity",
                    `${weatherData['today'][0].main.humidity} %`
                  )}
                  {generateWeatherInfoItem(
                    <IoIosSpeedometer size={30} color='#A1A7B3' className='mr-2' />,
                    "Pressure",
                    `${getPressure(weatherData['today'][0].main.pressure)}`
                  )}
                  {generateWeatherInfoItem(
                    <GiGrass size={30} color='#A1A7B3' className='mr-2' />,
                    "Ground level",
                    `${weatherData['today'][0].main.grnd_level} hPa`
                  )}
                  {generateWeatherInfoItem(
                    <FaWater size={30} color='#A1A7B3' className='mr-2' />,
                    "Sea level",
                    `${weatherData['today'][0].main.sea_level} hPa`
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      }
    </>
  )
}

export default CityWeatherDisplay