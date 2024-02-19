import React from 'react'
import { Sidebar, CityWeatherDisplay, SevenDaysForeCast } from '../../components'
import { useWeatherDetailsController } from './weatherDetails.controller'
import { Outlet } from 'react-router-dom';
import { useAppStore } from '../../store';
import Loader from '../../components/loader/loader';

const WeatherDetails = () => {
    useWeatherDetailsController();
    const { loader } = useAppStore();
    return (
        <div className=' text-white md:flex md:h-screen md:w-screen'>
            {loader ? <Loader /> : null}
            <div className='flex items-center bg-customCharcolBlack rounded-xl m-2 md:flex-col md:justify-center md:m-4 md:p-0 md:text-sm'>
                <Sidebar />
            </div>
            <div className=' md:m-4 md:w-2/3'>
                <CityWeatherDisplay />
            </div>
            <div className='md:m-4 md:w-1/3'>
                <SevenDaysForeCast />
            </div>
            <Outlet />
        </div>

    )
}

export default WeatherDetails