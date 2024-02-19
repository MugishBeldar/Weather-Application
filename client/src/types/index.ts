export type FilterCityTypes = {
  value: string;
};
export type CitiesTypes = {
  name: string;
  lat: string;
  lng: string;
  country: string;
  admin1: string;
  admin2: string;
};
export type searchCityCordTypes = {
  name: string;
  lat: string;
  lng: string;
  country: string;
  admin1: string;
  admin2: string;
};

export type WeatherDataTypes = {
  today: WeatherDetailsTypes[];
  tomorrow: WeatherDetailsTypes[];
  "3rd": WeatherDetailsTypes[];
  "4th": WeatherDetailsTypes[];
  "5th": WeatherDetailsTypes[];
  "6th": WeatherDetailsTypes[];
  city: CityTypes;
};
export type WeatherDetailsTypes = {
  date: string;
  time: string;
  dt: number;
  main: MainTypes;
  weather: WeatherTypes[];
  clouds: CloudsTypes;
  wind: WindTypes;
  visibility: number;
  pop: number;
  snow?: SnowOrRainTypes;
  sys: SysTypes;
  dt_txt: string;
  rain?: SnowOrRainTypes;
};
export type MainTypes = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};
export type WeatherTypes = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
export type CloudsTypes = {
  all: number;
};
export type WindTypes = {
  speed: number;
  deg: number;
  gust: number;
};
export type SnowOrRainTypes = {
  "3h": number;
};
export type SysTypes = {
  pod: string;
};
export type CityTypes = {
  id: number;
  name: string;
  coord: CoordTypes;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};
export type CoordTypes = {
  lat: number;
  lon: number;
};

export type SettingTypes = {
  temperature: string;
  windSpeed: string;
  pressure: string;
};
