import { useEffect } from "react";
import { getWeatherData } from "../../api";
import { useAppStore } from "../../store/store";

const useWeatherDetailsController = () => {
  const { setWeatherData } = useAppStore();
  useEffect(() => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useWeatherDetailsController };
