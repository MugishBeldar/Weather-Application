import React from 'react'
import sunnyOrClearSky from '../../assets/sunny or clear sky.png'
const CityWeatherDisplay = () => {
  return (
    <>
      <div className='h-[6%]'>
        <label className="relative block m-2">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="w-5 h-5 fill-customGray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
          </span>
          <input className="placeholder:italic placeholder:text-customGray block bg-customCharcolBlack w-full border border-customCharcolBlack rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-customCharcolBlack focus:ring-customCharcolBlack focus:ring-1 sm:text-sm" placeholder="Search for cities" type="text" name="search" />
        </label>
      </div>
      <div className='grid grid-rows-3 h-[94%]'>
        <div className='grid grid-cols-2 mx-4'>
          <div className='grid grid-rows-2'>
            <div className='flex flex-col justify-center'>
              <p className='font-bold text-3xl sm:text-4xl'>Ahmedabad</p>
              <p className='text-customGray'>Chance of rain 0%</p>
            </div>
            <div className='flex items-center text-3xl sm:text-5xl'>
              31°
            </div>
          </div>
          <div className='grid place-items-center'>
            <img src={sunnyOrClearSky} alt="" className='w-full sm:w-[200px]' />
          </div>
        </div>

        <div>todays forecast</div>
        <div>air condition</div>
      </div>
    </>
  )
}

export default CityWeatherDisplay