import React, { useState } from 'react'
import sunnyOrClearSky from '../../assets/sunnyOrClearSky.png'
import cloud from '../../assets/overcastCloudScatterCloudsOrBrokenCloud.png'
import useCityWeatherDisplayController from './cityWeatherDisplay.controller'
import { FilterCityTypes } from '../../types'
import { AutoComplete, ConfigProvider } from 'antd';
import { useAppStore } from '../../store'

const CityWeatherDisplay = () => {

  const [filterCity, setFilterCity] = useState<FilterCityTypes[]>([])
  const { handleSearch, handleSelect } = useCityWeatherDisplayController({ setFilterCity });
  const { weatherData } = useAppStore();
  // console.log("🚀 ~ CityWeatherDisplay ~ weatherData:", weatherData)

  return (
    <>
      {Object.keys(weatherData).length && <>
        <div className='h-[6%]'>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#202B3B',
                colorBorder: '#202B3B',
                colorBgContainer: '#202B3B',
                colorText: "geekblue-3",
                colorTextPlaceholder: '#A1A7B3'
              },
            }} >
            <AutoComplete
              style={{
                width: '100%',
              }}
              onSearch={handleSearch}
              placeholder="Enter City Name"
              options={filterCity}
              onSelect={handleSelect}
            />
          </ConfigProvider>
        </div>
        <div className='grid grid-rows-3 h-[94%]'>
          <div className='grid grid-cols-2 mx-4'>
            <div className='grid grid-rows-2'>
              <div className='flex flex-col justify-center'>
                <p className='font-bold text-3xl sm:text-4xl'>{weatherData?.city?.name}</p>
                {/* <p className='text-customGray'>{weatherData?.weather[0]?.description}</p> */}
              </div>
              <div className='flex items-center text-3xl sm:text-5xl'>
                {weatherData[Object.keys(weatherData)[0]][0]?.main?.temp}
              </div>
            </div>
            <div className='grid place-items-center'>
              {weatherData[Object.keys(weatherData)[0]][0]?.weather?.description === 'clear sky' || 'sunny' ?
                <img src={sunnyOrClearSky} alt="" className='w-full sm:w-[200px]' /> : null}
            </div>
          </div>

          <div className='mx-4 bg-customCharcolBlack rounded-xl mb-3'>
            <p className='text-customGray text-sm m-3'>TODAY'S FORECAST</p>
            <div className='grid place-items-center grid-cols-6'>
              {
                // weatherData && Object.keys(weatherData).map((date) => {
                // if (date !== 'city') {
                // console.log(weatherData[date], "><><>")
                weatherData[Object.keys(weatherData)[0]].map((obj: any) => {
                  console.log(obj)
                  return (
                    <div className='grid place-items-center my-3'>
                      <p className='text-[10px] sm:text-[16px] md:my-2'>{obj.time}</p>
                      <img src={cloud} alt="" className='w-[40px] md:w-[80px] my-3' />
                      <p className='text-[10px] sm:text-[16px] my-2'>31°</p>
                    </div>
                  )
                })
                // }
                // })
              }
            </div>
            {/* <div className='grid place-items-center grid-cols-6'>
            <div className='grid place-items-center my-3'>
              <p className='text-[10px] sm:text-[16px] md:my-2'>6:00 AM</p>
              <img src={cloud} alt="" className='w-[40px] md:w-[80px] my-3' />
              <p className='text-[10px] sm:text-[16px] my-2'>31°</p>
            </div>
            <div className='grid place-items-center my-3'>
              <p className='text-[10px] sm:text-[16px] md:my-2'>6:00 AM</p>
              <img src={cloud} alt="" className='w-[40px] md:w-[80px] my-3' />
              <p className='text-[10px] sm:text-[16px] my-2'>31°</p>
            </div>
            <div className='grid place-items-center my-3'>
              <p className='text-[10px] sm:text-[16px] md:my-2'>6:00 AM</p>
              <img src={cloud} alt="" className='w-[40px] md:w-[80px] my-3' />
              <p className='text-[10px] sm:text-[16px] my-2'>31°</p>
            </div>
            <div className='grid place-items-center my-3'>
              <p className='text-[10px] sm:text-[16px] md:my-2'>6:00 AM</p>
              <img src={cloud} alt="" className='w-[40px] md:w-[80px] my-3' />
              <p className='text-[10px] sm:text-[16px] my-2'>31°</p>
            </div>
            <div className='grid place-items-center my-3'>
              <p className='text-[10px] sm:text-[16px] md:my-2'>6:00 AM</p>
              <img src={cloud} alt="" className='w-[40px] md:w-[80px] my-3' />
              <p className='text-[10px] sm:text-[16px] my-2'>31°</p>
            </div>
            <div className='grid place-items-center my-3'>
              <p className='text-[10px] sm:text-[16px] md:my-2'>6:00 AM</p>
              <img src={cloud} alt="" className='w-[40px] md:w-[80px] my-3' />
              <p className='text-[10px] sm:text-[16px] my-2'>31°</p>
            </div>
          </div> */}
          </div>
          <div className='mx-4 bg-customCharcolBlack rounded-xl'>
            <p className='text-customGray text-sm m-3'>AIR CONDITION</p>
            <div className='grid grid-cols-3 justify-center place-items-center gap-y-10'>
              <div className=''>
                <p>Real Feel</p>
                <p>31°</p>
              </div>
              <div className=''>
                <p>Real Feel</p>
                <p>31°</p>
              </div>
              <div className=''>
                <p>Real Feel</p>
                <p>31°</p>
              </div>
              <div className=''>
                <p>Real Feel</p>
                <p>31°</p>
              </div>
              <div className=''>
                <p>Real Feel</p>
                <p>31°</p>
              </div>
              <div className=''>
                <p>Real Feel</p>
                <p>31°</p>
              </div>

            </div>
          </div>
        </div></>}

    </>
  )
}

export default CityWeatherDisplay