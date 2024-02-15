import { Routes, Route } from "react-router-dom";
import { WeatherDetails, Home, Setting } from '../pages'

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="weather" element={<WeatherDetails />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </>

  );
};

export default MainRouting;
