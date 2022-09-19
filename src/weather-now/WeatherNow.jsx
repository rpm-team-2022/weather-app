/* eslint-disable react/prop-types */
import React from "react";

const WeatherNow = ({ weatherData }) => {
  const {
    country,
    region,
    name,
    localtime,
    conditionText,
    conditionIcon,
    temp_f,
    feelslike_f,
    wind_mph,
    gust_mph,
    wind_dir,
    humidity,
    precip_in,
  } = weatherData;
  return (
    <div>
      <h2>Current weather</h2>
      <br />
      <div>
        <img src={conditionIcon} alt="weather condition icon" /> &nbsp;
        <p>{conditionText}</p>
      </div>
      <p>City: {name}</p>
      <p>Region: {region}</p>
      <p>Country: {country}</p>
      <p>Local time: {localtime}</p>
      <p>Temperature: {temp_f} &#176;F</p>
      <p>Feels like: {feelslike_f} &#176;F</p>
      <p>Humidity: {humidity} %</p>
      <p>Preciptation: {precip_in} in</p>
      <p>Wind: {wind_mph} mph</p>
      <p>Wind Direction: {wind_dir}</p>
      <p>Gust: {gust_mph}</p>
    </div>
  );
};

export default WeatherNow;
