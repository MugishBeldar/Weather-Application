import React, { useEffect, useState } from "react";
import { IoRainyOutline, IoSnowOutline } from "react-icons/io5";
import { BsClouds } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { AutoComplete } from 'antd'
import weatherInterfaceController from "./weather-interface.controller";
import airPressure from '../assets/icons8-air-pressure-64.png';
import humidity from '../assets/icons8-humidity-50.png';
import wind from '../assets/icons8-wind-50.png';
import cities from 'cities.json';
import citiesName from '../utils/cities-name.json';
import '../style/weather-interface.css'

const WeatherInterface = () => {
  const [displayCurrentDayData, setDisplayCurrentDayData] = useState();
  const [options, setOptions] = useState([]);
  const { getWeatherDetails } = weatherInterfaceController(setDisplayCurrentDayData);
  const [location, setLocation] = useState({ lat: undefined, lon: undefined });
  const [weatherDetail, setWeatherDetail] = useState({});
  console.log("🚀 ~ file: weather-interface.jsx:22 ~ WeatherInterface ~ weatherDetail:", weatherDetail)

  const handleSearch = (value) => {
    let res = [];
    if (!value) {
      res = [];
    } else {
      const cityNameArray = Object.values(citiesName).filter(city => city.toLowerCase().includes(value.toLowerCase()));
      res = cityNameArray.map((city) => ({
        value: city,
        label: city,
      }));
    }
    setOptions(res);
  };

  const handleSelect = (value)=>{
    const searchCityCord = cities.find((city)=>city.name===value);
    setLocation({lat: searchCityCord.lat, lon: searchCityCord.lng});
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      function (error) {
        console.error("Error getting location:", error.message);
      }
    );
  }, []);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      try {
        const weatherDetails = await getWeatherDetails(location);
        setWeatherDetail(weatherDetails.data.data);
      } catch (error) {
        console.error("Error fetching weather details:", error.message);
      }
    };
    if (location.lat && location.lon) {
      fetchWeatherDetails();
    }
  }, [location]);

  return (
    <div className="weather-primary">
      <div className="search">
        <AutoComplete
          style={{
            width: 400,
          }}
          className="AutoComplete"
          onSearch={handleSearch}
          placeholder="Enter City Name"
          options={options}
          onSelect={handleSelect}
          
        />
      </div>
      <div className="weather-primary-main">
        <div className="weather-primary-main__secondary-one">
          <div>
            {displayCurrentDayData &&
              displayCurrentDayData.weather.map((data) => {
                return (
                  data.main === "Rain" ?
                    <div key={data.id}>
                      <div>
                        <IoRainyOutline color="whiteSmoke " size={60} />
                      </div>
                      <div>
                        <p style={{ fontSize: '12px' }}>
                          <span className="main-weather" style={{ 'fontSize': '30px', marginRight: '3px', color: '#eb860c' }}>
                            {data.main}
                          </span>
                          {data.description}
                        </p>
                        {weatherDetail.city.name} <span style={{fontSize:'30px', color:'#ff8800'}}>{(displayCurrentDayData.main.feels_like - 273.15).toFixed(2)}°C</span>
                      </div>
                    </div>
                    : data.main === "Clouds" ?
                      <div key={data.id}>
                        <div>
                          <BsClouds color="whiteSmoke " size={60} />
                        </div>
                        <div>
                          <p style={{ fontSize: '12px' }}>
                            <span className="main-weather" style={{ 'fontSize': '30px', marginRight: '3px' }}>
                              {data.main}
                            </span>
                            {data.description}
                          </p>
                          {weatherDetail.city.name} <span style={{fontSize:'30px', color:'#ff8800'}}>{(displayCurrentDayData.main.feels_like - 273.15).toFixed(2)}°C</span>
                        </div>
                      </div>
                      : data.main === "Snow" ?
                        <div key={data.id}>
                          <div>
                            <IoSnowOutline color="whiteSmoke " size={60} />
                          </div>
                          <div>
                            <p style={{ fontSize: '12px' }}>
                              <span className="main-weather" style={{ 'fontSize': '30px', marginRight: '3px' }}>
                                {data.main}
                              </span>
                              {data.description}
                            </p>
                            {weatherDetail.city.name} <span style={{fontSize:'30px', color:'#ff8800'}}>{(displayCurrentDayData.main.feels_like - 273.15).toFixed(2)}°C</span>
                          </div>
                        </div>
                        :
                        <div key={data.id}>
                          <div>
                            <TiWeatherPartlySunny color="whiteSmoke " size={60} />
                          </div>
                          <div>
                            <p style={{ fontSize: '12px' }}>
                              <span className="main-weather" style={{ 'fontSize': '30px', marginRight: '3px' }}>
                                {data.main}
                              </span>
                              {data.description}
                            </p>
                            {weatherDetail.city.name} <span style={{fontSize:'30px', color:'#ff8800'}}>{(displayCurrentDayData.main.feels_like - 273.15).toFixed(2)}°C</span>
                          </div>
                        </div>)
              })}
          </div>
          {displayCurrentDayData &&
            <div className="secondary-one__temp">
              <div className="secondary-one__temp-sub">
                <p className="heading">Temp. Feels Like</p>
                <p><span>{displayCurrentDayData.main.feels_like}K</span> | <span>{(displayCurrentDayData.main.feels_like - 273.15).toFixed(2)}°C</span> | <span>{((displayCurrentDayData.main.feels_like - 273.15) * 9 / 5 + 32).toFixed(2)}°F</span></p>
              </div>
              <div className="vl" style={{ borderLeft: '2px solid white', height: '70px' }}></div>
              <div className="secondary-one__temp-sub">
                <p className="heading">Temperature</p>
                <p><span>{displayCurrentDayData.main.temp}K</span> | <span>{(displayCurrentDayData.main.temp - 273.15).toFixed(2)}°C</span> | <span>{((displayCurrentDayData.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)}°F</span></p>
              </div>
              <div className="vl" style={{ borderLeft: '2px solid white', height: '70px' }}></div>
              <div className="secondary-one__temp-sub">
                <p className="heading">Max Temp.</p>
                <p><span>{displayCurrentDayData.main.temp_max}K</span> | <span>{(displayCurrentDayData.main.temp_max - 273.15).toFixed(2)}°C</span> | <span>{((displayCurrentDayData.main.temp_max - 273.15) * 9 / 5 + 32).toFixed(2)}°F</span></p>
              </div>
              <div className="vl" style={{ borderLeft: '2px solid white', height: '70px' }}></div>
              <div className="secondary-one__temp-sub">
                <p className="heading">Min Temp.</p>
                <p><span>{displayCurrentDayData.main.temp_min}K</span> | <span>{(displayCurrentDayData.main.temp_min - 273.15).toFixed(2)}°C</span> | <span>{((displayCurrentDayData.main.temp_min - 273.15) * 9 / 5 + 32).toFixed(2)}°F</span></p>
              </div>
            </div>}
        </div>
        {
          displayCurrentDayData && (
            <div className="weather-primary-main__secondary-two">
              <div className="secondary-two__sub">
                <p className="sub__img"><img src={humidity} alt="humidityImg" width={30} height={25} /><span>Humidity</span></p>
                <p className="sub__value">{displayCurrentDayData.main.humidity}%</p>
              </div>
              <div className="secondary-two__sub">
                <p className="sub__img"><img src={airPressure} alt="airPressureImg" width={30} height={30} /><span>Air Pressure</span></p>
                <div>
                  <div>
                    <p className="sub__option">Ground Level</p>
                    <p className="sub__value"><span>{displayCurrentDayData.main.grnd_level}hPa</span> </p>
                  </div>
                  <div>
                    <p className="sub__option">Sea Level</p>
                    <p className="sub__value"><span>{displayCurrentDayData.main.sea_level}hPa</span></p>
                  </div>
                </div>
              </div>
              <div className="secondary-two__sub">
                <p className="sub__img"><img src={wind} alt="windImg" width={30} height={25} /><span>Wind</span></p>
                <div>
                  <div>
                    <p className="sub__option">Wind Speed</p>
                    <p className="sub__value"><span>{displayCurrentDayData.wind.speed}meter/sec</span> </p>
                  </div>
                  <div>
                    <p className="sub__option">Wind Direction</p>
                    <p className="sub__value"><span>{displayCurrentDayData.wind.deg}°</span> </p>
                  </div>
                  <div>
                    <p className="sub__option">Wind Gust</p>
                    <p className="sub__value"><span>{displayCurrentDayData.wind.gust}meter/sec</span> </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div className="prediction-main">
        {
          weatherDetail && 
          Object.keys(weatherDetail).map((day, index)=>{
            return (
              <div className="prediction-main_sub">
                {
                  index===0?
                  <p className="prediction-heading">Today</p> :
                  index===1?
                  <p className="prediction-heading">Tommorow</p> :
                  day.startsWith('city')?
                  <p className="prediction-heading">City & Country</p> :
                  <p className="prediction-heading">{day}</p>
                }
                {
                 day.startsWith('city')?
                 <div className="city-details">
                    <p><span className="place">{weatherDetail.city.name}, {weatherDetail.city.country}</span> </p>
                    <p><span className="place">Population {weatherDetail.city.population}</span> </p>
                  </div> :
                (<>
                  {
                  index===0?
                  <div className="sub_details">
                    <p><span className="key">Temerature  </span><span className="value">{(displayCurrentDayData.main.temp - 273.15).toFixed(2)}°C</span></p>
                    <p><span className="key">Max Temp.  </span><span className="value">{(displayCurrentDayData.main.temp_max - 273.15).toFixed(2)}°C</span></p>
                    <p><span className="key">Min Temp.  </span><span className="value">{(displayCurrentDayData.main.temp_min - 273.15).toFixed(2)}°C</span></p>
                  </div>
                  :
                  <div className="sub_details">
                    <p><span className="key">Temperature  </span><span className="value">{(weatherDetail[day][0].main.temp - 273.15).toFixed(2)}°C</span></p>
                    <p><span className="key">Max Temp.  </span><span className="value">{(weatherDetail[day][0].main.temp_max - 273.15).toFixed(2)}°C</span></p>
                    <p><span className="key">Min Temp.  </span><span className="value">{(weatherDetail[day][0].main.temp_min - 273.15).toFixed(2)}°C</span></p>
                  </div>
                  }
                  </>
                )
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default WeatherInterface;
