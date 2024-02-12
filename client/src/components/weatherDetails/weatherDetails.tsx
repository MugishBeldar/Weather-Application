import React from 'react'
import Sidebar from '../sidebar/sidebar'
import CityWeatherDisplay from '../cityWeatherDisplay/cityWeatherDisplay'
import SevenDaysForeCast from '../sevenDaysForecast/sevenDaysForeCast'

const WeatherDetails = () => {
    return (
        <div className=' text-white md:flex md:h-screen md:w-screen'>
            <div className='flex justify-evenly items-center bg-customCharcolBlack rounded-xl m-2 md:flex-col md:justify-center md:m-4 md:p-0 md:text-sm'>
                <Sidebar />
            </div>
            <div className='md:border-2 md:m-4 md:w-2/3'>
                <CityWeatherDisplay />
            </div>
            <div className='md:border-2 md:m-4 md:w-1/3'>
                <SevenDaysForeCast />
            </div>
        </div>

    )
}

export default WeatherDetails