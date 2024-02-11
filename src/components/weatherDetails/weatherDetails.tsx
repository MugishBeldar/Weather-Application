import React from 'react'
import Sidebar from '../sidebar/sidebar'
import CityWeatherDisplay from '../cityWeatherDisplay/cityWeatherDisplay'
import SevenDaysForeCast from '../sevenDaysForecast/sevenDaysForeCast'

const WeatherDetails = () => {
    return (
        <div className='flex h-screen w-screen text-white'>
            <div className='border-2 mx-4'>
                <Sidebar />
            </div>
            <div className='border-2 mx-4 w-2/3'>
                <CityWeatherDisplay />
            </div>
            <div className='border-2 mx-4 w-1/3'>
                <SevenDaysForeCast />
            </div>
        </div>

    )
}

export default WeatherDetails