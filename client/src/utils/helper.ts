import { useAppStore } from "../store";

const useHelper = () => {
  const { settings } = useAppStore();

  const getTemperature = (temp: number) => {
    switch (settings.temperature) {
      case "celsius":
        return `${(temp - 273.15).toFixed(2)} °C`;
      case "fahrenheit":
        return `${((temp - 273.15) * 1.8 + 32).toFixed(2)} °F`;
      case "kelvin":
        return `${temp} K`;
      default:
        return `${temp} K`;
    }
  };

  const getWindSpeed = (windSpeed: number) => {
    switch (settings.windSpeed) {
      case "km/h":
        return `${(windSpeed * 3.6).toFixed(2)} km/h`;
      case "m/s":
        return `${windSpeed.toFixed(2)} m/s`;
      case "knots":
        return `${(windSpeed * 1.94).toFixed(2)} knots`;
      default:
        return `${(windSpeed * 3.6).toFixed(2)} km/h`;
    }
  };

  const getPressure = (pressure: number) => {
    switch (settings.pressure) {
      case "hPa":
        return `${pressure.toFixed(2)} hPa`;
      case "inches":
        return `${(pressure * 0.02953).toFixed(2)} inches`;
      case "kPa":
        return `${(pressure * 0.1).toFixed(2)} kPa`;
      case "mm":
        return `${(pressure * 0.750062).toFixed(2)} mm`;
      default:
        return `${pressure.toFixed(2)} hPa`;
    }
  };
  return {
    getTemperature,
    getWindSpeed,
    getPressure,
  };
};

export default useHelper;
