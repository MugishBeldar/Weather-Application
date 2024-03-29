import { useNavigate } from "react-router-dom";
import { getWeatherData } from "../../../api";
import { useAppStore } from "../../../store";

const useLogoController = () => {
  const navigate = useNavigate()
    const {setWeatherData} = useAppStore()
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
          const response = await getWeatherData({
            lat: position.coords.latitude.toString(),
            lon: position.coords.longitude.toString(),
          });
          setWeatherData(response.data.data);
        },
        async (error) => {
          console.error("Error getting location:", error.message);
        }
      );
      navigate('/weather')
  };
  return {
    handleClick,
  };
};
export { useLogoController };
