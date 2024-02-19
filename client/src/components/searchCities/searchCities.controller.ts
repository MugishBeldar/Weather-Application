import cities from "cities.json";
import citiesNames from "../../utils/cities-name.json";
import { getWeatherData } from "../../api";
import { useAppStore } from "../../store";
import { CitiesTypes, FilterCityTypes } from "../../types";

interface useSearchCitiesControllerProps {
  setFilterCity: React.Dispatch<React.SetStateAction<FilterCityTypes[]>>;
  setInputFieldValue: React.Dispatch<React.SetStateAction<string>>;
}

const useSearchCitiesController = ({
  setFilterCity,
  setInputFieldValue,
}: useSearchCitiesControllerProps) => {
  const { setWeatherData, setLoader } = useAppStore();

  const handleChange = (value: string) => {
    setInputFieldValue(value);
  };

  const handleSearch = (cityName: string) => {
    let filteredCitiesNames: FilterCityTypes[];
    if (!cityName) {
      filteredCitiesNames = [];
    } else {
      const cityNameArray = Object.values(citiesNames).filter((city) =>
        city.toLowerCase().includes(cityName.toLowerCase())
      );
      filteredCitiesNames = cityNameArray.map((city) => ({
        value: city,
      }));
    }
    setFilterCity(filteredCitiesNames);
  };

  const handleSelect = async (cityName: string) => {
    try {
      setLoader(true);
      // @ts-ignore
      const searchCityCord: searchCityCordTypes = cities.find(
        (city: CitiesTypes) => city.name === cityName
      );
      const response = await getWeatherData({
        lat: searchCityCord.lat,
        lon: searchCityCord.lng,
      });
      setWeatherData(response.data.data);
      setInputFieldValue("");
      setLoader(false);
    } catch (error) {
      console.log("Error while getting weatherdata:--", error);
    }
  };
  return {
    handleChange,
    handleSearch,
    handleSelect,
  };
};

export default useSearchCitiesController;
