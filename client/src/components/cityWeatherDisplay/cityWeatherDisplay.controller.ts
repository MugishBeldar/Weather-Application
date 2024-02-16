const useCityWeatherDisplayController = () => {
  const getCountryNameFromContryCode = (code: string) => {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code);
  };

  return {
    getCountryNameFromContryCode,
  };
};
export default useCityWeatherDisplayController;
