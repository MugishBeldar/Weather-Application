import { StateCreator } from "zustand";
import { WeatherDataTypes } from "../../types";

export interface WeatherSliceType {
    weatherData?: WeatherDataTypes
    setWeatherData: (data: WeatherDataTypes) => void;
}

const createWeatherSlice: StateCreator<WeatherSliceType> = (set, get) => ({
  weatherData: undefined,
  setWeatherData: (data: WeatherDataTypes) => {
    set({weatherData: data});
  },


});

export { createWeatherSlice };
