import { StateCreator } from "zustand";

export interface WeatherSliceType {
    weatherData: any;
    setWeatherData: (data: any) => void;
}

const createWeatherSlice: StateCreator<WeatherSliceType> = (set, get) => ({
  weatherData: [],
  setWeatherData: (data: any) => {
    set({weatherData: data});
  },


});

export { createWeatherSlice };
