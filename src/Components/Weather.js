//7c206eea4a416664649e7ec4cfac7dd8

import React, { useState, useEffect } from "react";
import { WiDayCloudy } from "react-icons/wi";
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

  console.log(lat);
  console.log(lon);
  const date = new Date();
  console.log(date);
  console.log(date.toISOString().split("T")[0]);
  const month = date.toLocaleString("default", { month: "long" });
  console.log(month);

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
  return (
    <div className="d-flex justify-content-between">
      <div className=" upper-head">
        <WiDayCloudy className="weather-logo" />
        <div className="temp">
          {temp} c, {weather}
        </div>
      </div>

      <div className="date">24 June, 2020</div>
    </div>
  );
}

export default Weather;
