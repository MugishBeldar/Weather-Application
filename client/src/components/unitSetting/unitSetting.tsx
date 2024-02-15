import React from 'react'
import Sidebar from '../sidebar/sidebar'

const UnitSetting = () => {
    return (
        <div className=' text-white md:flex md:h-screen md:w-screen'>
            <div className='flex items-center bg-customCharcolBlack rounded-xl m-2 md:flex-col md:justify-center md:m-4 md:p-0 md:text-sm'>
                <Sidebar />
            </div>
        </div>
    )
}

export default UnitSetting