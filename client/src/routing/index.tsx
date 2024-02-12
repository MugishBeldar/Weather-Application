import { Routes, Route } from "react-router-dom";
import { WeatherDetails, LandingPage } from "../components";
// import { Cities, Logo, Settings} from "../components";
// import Chat from "../pages/chat";

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/weather" element={<WeatherDetails />} />
      </Routes>
    </>
  );
};

export default MainRouting;
