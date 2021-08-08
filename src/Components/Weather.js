//7c206eea4a416664649e7ec4cfac7dd8

import React, { useState, useEffect } from "react";
import { WiDayCloudy, WiDayRain } from "react-icons/wi";

import "../styles/weather.css";

function Weather() {
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  const date = new Date();

  const month = date.toLocaleString("default", { month: "long" });
  var weekday = date.toLocaleString("default", { weekday: "long" });

  const year = date.getFullYear();
  const day = date.getDate();

  useEffect(() => {
    if ((lat != null) & (lon != null)) {
      const fetchApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7c206eea4a416664649e7ec4cfac7dd8`;
        const response = await fetch(url);
        const resJson = await response.json();
        console.log("result is here");
        console.log(resJson);
        console.log(Math.round(resJson.main.temp - 273));
        console.log(resJson.weather[0].main);
        setTemp(Math.round(resJson.main.temp - 273));
        setWeather(resJson.weather[0].main);
      };
      fetchApi();
    }
  }, [lat, lon]);
  let renderHere;
  if (weather === "Clouds") {
    renderHere = <WiDayCloudy className="weather-logo" />;
  } else if (weather === "Rain") {
    renderHere = <WiDayRain className="weather-logo" />;
  }
  return (
    <div className="d-flex justify-content-between">
      <div className=" upper-head">
        {renderHere}
        <div className="temp">
          {temp} c, {weather}
        </div>
      </div>

      <div className="date">{weekday}</div>
      <div className="date">
        {day} {month}, {year}
      </div>
    </div>
  );
}

export default Weather;
