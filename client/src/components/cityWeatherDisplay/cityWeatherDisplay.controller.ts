import { FilterCityTypes, CitiesTypes, searchCityCordTypes } from "../../types";
import cities from "cities.json";
import citiesNames from "../../utils/cities-name.json";
import { useAppStore } from "../../store/store";
import { getWeatherData } from "../../api";
interface useCityWeatherDisplayControllerProps {
  setFilterCity: React.Dispatch<React.SetStateAction<FilterCityTypes[]>>;
}

const useCityWeatherDisplayController = ({
  setFilterCity,
}: useCityWeatherDisplayControllerProps) => {
  const { setWeatherData } = useAppStore();

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
      // @ts-ignore
      const searchCityCord: searchCityCordTypes = cities.find(
        (city: CitiesTypes) => city.name === cityName
      );
      const response = await getWeatherData({
        lat: searchCityCord.lat,
        lon: searchCityCord.lng,
      });
      setWeatherData(response.data.data);
    } catch (error) {
      console.log("Error while getting weatherdata:--", error);
    }
  };

  const getCountryNameFromContryCode = (code: string) => {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code);
  };

  return {
    handleSearch,
    handleSelect,
    getCountryNameFromContryCode,
  };
};
export default useCityWeatherDisplayController;
