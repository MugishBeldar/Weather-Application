import React from 'react'
import umbrella from '../../../assets/umbrella.png';
import { useLogoController } from './logo.controller';
const Logo = () => {
  const {handleClick} =useLogoController();
  return (
    <div className='flex-1 ml-4'>
      <img onClick={handleClick} src={umbrella} alt="" height={40} width={40} className='my-3 md:mx-auto md:my-10' />
    </div>
  )
}

export default Logo