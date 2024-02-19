import { create } from "zustand";
import { createWeatherSlice } from "./slices";
import { WeatherSliceType } from "./slices/weather-slice";

export const useAppStore = create<WeatherSliceType>()((...a) => ({
  ...createWeatherSlice(...a),
}));
