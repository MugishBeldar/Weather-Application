import React from 'react'
import Logo from './logo/logo'
import Settings from './settings/settings'

const Sidebar = () => {
  return (
    <>
      <Logo />
      <div className='md:my-10 mr-4 text-customGray'>Settings
      </div>
    </>
  )
}

export default Sidebar