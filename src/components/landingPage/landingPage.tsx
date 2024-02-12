import React from 'react';
import umbrella from '../../assets/umbrella.png';
import { useLandingPageController } from './landingPage.controller';

const LandingPage = () => {

    const { handleGetStarted } = useLandingPageController();

    return (
        <div className='flex flex-col sm:flex-row justify-center items-center h-screen w-screen'>
            <div className='h-[80%] sm:w-1/3 bg-customCharcolBlack rounded-2xl hidden  sm:flex sm:justify-center sm:items-center sm:p-5'>
                <img src={umbrella} alt="" className='max-h-full max-w-full' />
            </div>
            <div className='h-[80%] sm:w-2/5 flex justify-center items-center text-center'>
                <div>
                    <img src={umbrella} alt="" height={50} width={50} className='mx-auto my-6' />
                    <p className='text-5xl text-white'>Breeze</p>
                    <p className='text-customGray mb-6'>Weather App</p>
                    <button onClick={handleGetStarted} className='px-4 py-2 bg-customBlue hover:bg-customBlueHover text-white rounded-full'>Get started</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
