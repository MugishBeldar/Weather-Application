import { StateCreator } from "zustand";
import { WeatherDataTypes } from "../../types";

export interface WeatherSliceType {
    weatherData?: WeatherDataTypes
    setWeatherData: (data: WeatherDataTypes) => void;
    openModal?: boolean;
    setOpenModal: (data: boolean) => void;
    loader?: boolean;
    setLoader: (data: boolean) => void;
}

const createWeatherSlice: StateCreator<WeatherSliceType> = (set, get) => ({
  weatherData: undefined,
  setWeatherData: (data: WeatherDataTypes) => {
    set({weatherData: data});
  },

  openModal: false,
  setOpenModal: (open: boolean) => {
    set({openModal: open});
  },

  loader: false,
  setLoader: (loader: boolean) => {
    set({loader: loader});
  },
});

export { createWeatherSlice };
