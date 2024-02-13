import { FilterCityTypes, CitiesTypes } from "../../types";
import cities from "cities.json";
import citiesNames from "../../utils/cities-name.json";

interface useCityWeatherDisplayControllerProps {
  setFilterCity: React.Dispatch<React.SetStateAction<FilterCityTypes[]>>;
}

const useCityWeatherDisplayController = ({
  setFilterCity,
}: useCityWeatherDisplayControllerProps) => {

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

  const handleSelect = (cityName:string)=>{
    // @ts-ignore
    const searchCityCord = cities.find((city:CitiesTypes)=>city.name===cityName);
    console.log("🚀 ~ handleSelect ~ searchCityCord:", searchCityCord)
  }

  return {
    handleSearch,
    handleSelect
  };
};
export default useCityWeatherDisplayController;
