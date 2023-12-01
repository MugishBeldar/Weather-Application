import axios from 'axios';
import { API_ROUTES } from '../utils/enums.js';

const handleGetWeatherDetails = async (data) => {
  const response = await axios.post(`${API_ROUTES.GET_WEATHER_DETAILS}`, data);
  return response;
}


export {handleGetWeatherDetails}