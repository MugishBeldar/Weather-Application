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

// export interface WeatherTypes {
//   cod: string;
//   message: number;
//   cnt: number;
//   list?: (ListEntityTypes)[] | null;
//   city: CityTypes;
// }
// export interface ListEntityTypes {
//   dt: number;
//   main: MainTypes;
//   weather?: (WeatherEntityTypes)[] | null;
//   clouds: CloudsTypes;
//   wind: WindTypes;
//   visibility: number;
//   pop: number;
//   sys: SysTypes;
//   dt_txt: string;
// }
// export interface MainTypes {
//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   pressure: number;
//   sea_level: number;
//   grnd_level: number;
//   humidity: number;
//   temp_kf: number;
// }
// export interface WeatherEntityTypes {
//   id: number;
//   main: string;
//   description: string;
//   icon: string;
// }
// export interface CloudsTypes {
//   all: number;
// }
// export interface WindTypes {
//   speed: number;
//   deg: number;
//   gust: number;
// }
// export interface SysTypes {
//   pod: string;
// }
// export interface CityTypes {
//   id: number;
//   name: string;
//   coord: CoordTypes;
//   country: string;
//   population: number;
//   timezone: number;
//   sunrise: number;
//   sunset: number;
// }
// export interface CoordTypes {
//   lat: number;
//   lon: number;
// }
