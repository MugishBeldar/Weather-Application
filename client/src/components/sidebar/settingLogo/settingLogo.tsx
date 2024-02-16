import React from 'react'
import { IoMdSettings } from "react-icons/io";
import useSettingLogoController from './settingLogo.controller';
import UnitSetting from '../../unitSetting/unitSetting';

const SettingLogo = () => {
  const { handleClick } = useSettingLogoController()
  return (
    <>
      <div onClick={handleClick} className="p-4 text-customGray flex flex-col items-center cursor-pointer">
        <IoMdSettings />
        Setting
      </div>
      <UnitSetting />
    </>
  )
}

export default SettingLogo