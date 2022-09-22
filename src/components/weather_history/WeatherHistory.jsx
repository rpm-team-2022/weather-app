/* eslint-disable react/prop-types */
import React from "react";

const WeatherHistory = ({ query }) => {
  console.log(query);
  return (
    <div style={{ border: "2px solid black" }}>
      <p>Local time: {query.local_time}</p>
      <p>Condition: {query.condition_text}</p>
      <p>City Name: {query.city_name}</p>
      <p>Region: {query.region}</p>
      <p>Temp: {query.temp_f} &#176;F</p>
      <p>Feels like: {query.feels_like} &#176;F</p>
      <p>Wind speed: {query.wind_mph} mph</p>
      <p>Wind Direction: {query.wind_dir}</p>
    </div>
  );
};

export default WeatherHistory;
