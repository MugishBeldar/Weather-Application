import { Routes, Route } from "react-router-dom";
import { WeatherDetails, Home } from '../pages'

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="weather" element={<WeatherDetails />} />
      </Routes>
    </>

  );
};

export default MainRouting;
