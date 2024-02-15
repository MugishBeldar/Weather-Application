import React from "react";
import sunnyOrClearSky from "../../assets/sunnyOrClearSky.png";
import fewClouds from "../../assets/fewClouds.png";
import cloud from "../../assets/overcastCloudScatterCloudsOrBrokenCloud.png";
import showerRain from "../../assets/showerRain.png";
import rain from "../../assets/rain.png";
import thunderStrom from "../../assets/thunderstorm.png";
import snow from "../../assets/snow.png";
import mist from "../../assets/mist.png";
import lightRain from "../../assets/lightRain.png";
import moment from "moment-timezone";
import { useAppStore } from "../../store";
import { WeatherDetailsTypes } from "../../types";

const SevenDaysForeCast = () => {
  const { weatherData } = useAppStore();

  return (
    <div className=" bg-customCharcolBlack m-4 rounded-xl text-sm p-4">
      <p className="text-sm text-customGray p-4">6-DAYS FORECAST</p>
      <div>
        {weatherData &&
          Object.keys(weatherData).map((day: string, index: number) => {
            if (day !== "city") {
              const dayWeather: WeatherDetailsTypes[] = (weatherData as any)[
                day
              ];
              const weekDay = moment(dayWeather[0]?.date).format("dddd");

              return (
                <div
                  className={`flex items-center w-full py-4 ${
                    index !== 5 ? "border-b border-slate-600" : null
                  }`}
                  key={index}
                >
                  <p className="w-[30%] text-customGray">
                    {day.toLocaleLowerCase() === "today" ? "Today" : weekDay}
                  </p>

                  <div className="w-[70%]">
                    {dayWeather[0]?.weather[0]?.description === "clear sky" ||
                    dayWeather[0]?.weather[0]?.description === "sunny" ? (
                      <p className="flex items-center ">
                        <img
                          src={sunnyOrClearSky}
                          alt=""
                          className="w-[70px] mr-3"
                        />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : dayWeather[0]?.weather[0]?.description ===
                      "few clouds" ? (
                      <p className="flex items-center ">
                        <img src={fewClouds} alt="" className="w-[70px] mr-3" />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : dayWeather[0]?.weather[0]?.description ===
                        "scattered clouds" ||
                      dayWeather[0]?.weather[0]?.description ===
                        "broken clouds" ||
                      dayWeather[0]?.weather[0]?.description ===
                        "overcast clouds" ? (
                      <p className="flex items-center ">
                        <img src={cloud} alt="" className="w-[70px] mr-3" />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : dayWeather[0]?.weather[0]?.description ===
                      "shower rain" ? (
                      <p className="flex items-center ">
                        <img
                          src={showerRain}
                          alt=""
                          className="w-[70px] mr-3"
                        />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : dayWeather[0]?.weather[0]?.description === "rain" ? (
                      <p className="flex items-center ">
                        <img src={rain} alt="" className="w-[70px] mr-3" />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : dayWeather[0]?.weather[0]?.description ===
                      "thunderstorm" ? (
                      <p className="flex items-center ">
                        <img
                          src={thunderStrom}
                          alt=""
                          className="w-[70px] mr-3"
                        />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : dayWeather[0]?.weather[0]?.description === "snow" ||
                      dayWeather[0]?.weather[0]?.description ===
                        "light snow" ? (
                      <p className="flex items-center ">
                        <img src={snow} alt="" className="w-[70px] mr-3" />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : dayWeather[0]?.weather[0]?.description === "mist" ? (
                      <p className="flex items-center ">
                        <img src={mist} alt="" className="w-[70px] mr-3" />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    ) : (
                      <p className="flex items-center ">
                        <img src={lightRain} alt="" className="w-[70px] mr-3" />
                        <p className="w-[50%]">
                          {dayWeather[0]?.weather[0]?.description}
                        </p>
                        <p className="ml-2">{dayWeather[0]?.main?.temp}k</p>
                      </p>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default SevenDaysForeCast;
