import { useEffect } from "react";
import { getWeatherData } from "../../api";
import { useAppStore } from "../../store/store";

const useWeatherDetailsController = () => {
  const { setWeatherData, setLoader } = useAppStore();
  useEffect(() => {
    setLoader(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const response = await getWeatherData({
          lat: position.coords.latitude.toString(),
          lon: position.coords.longitude.toString(),
        });
        setWeatherData(response.data.data);
        setLoader(false);
      },
      async (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  }, []);
};

export { useWeatherDetailsController };
