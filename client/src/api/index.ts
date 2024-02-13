import axios from "axios";
import { API_ROUTE } from "../utils/enum";

interface getWeatherParamsTypes {
  lat: string;
  lon: string;
}

export const getWeatherData = async (params: getWeatherParamsTypes) => {
  try {
    return await axios.get(API_ROUTE.GET_WEATHERDETAILS, { params });
  } catch (error) {
    throw error;
  }
};
