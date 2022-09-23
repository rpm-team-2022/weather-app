/* eslint-disable react/prop-types */
import React from "react";
import './weather-now.css'
import { useState } from 'react';

const WeatherNow = ({ weatherData }) => {
  const [scroll , setScroll] = useState(false);
  
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
      <h5 className="text-center my-4">CURRENT WEATHER</h5>
      <div className={scroll ?"show rounded-3" : "current rounded-3"}>
      <div className="container">
      <div className="d-flex justify-content-around" >
        <div>
        <img src={conditionIcon} alt="weather condition icon" style={{width:"60px"}}/> 
        <span>{conditionText}</span>
        </div>
        <div className="pt-2">
        <span className="title">Local time</span>
        <p>{localtime}</p>
        </div>
        <div className="scroll  my-sm-3 px-2" onClick={() => setScroll(!scroll)}>
        <i className={scroll  ? "fas fa-arrow-up" :"fas fa-arrow-down"}></i>
        </div>
      </div>
      </div>
      <div className="container ms-sm-3">
      <div className="row">
      <div className="col">
       <span className="title">City</span>
      <p>{name}</p>
      </div>
      <div className="col">
       <span className="title">Region</span>
      <p>{region}</p>
      </div>
      <div className="col">
       <span className="title">Country</span>
      <p>{country}</p>
      </div>
      </div>
  
      <div className="row">
      <div className="col">
       <span className="title">Temperature</span>
      <p>{temp_f} &#176;F</p>
      </div>
      <div className="col">
       <span className="title">Feels like</span>
      <p>{feelslike_f} &#176;F</p>
      </div>
      <div className="col">
       <span className="title">Humidity</span>
      <p>{humidity} %</p>
      </div>
      </div>
      <div className="row">
      <div className="col">
       <span className="title">Preciptation</span>
      <p>{precip_in} in</p>
      </div>
      <div className="col">
       <span className="title">Wind</span>
      <p>{wind_mph} mph</p>
      </div>
      <div className="col">
       <span className="title">Wind Direction</span>
      <p>{wind_dir}</p>
      </div>
      </div>
  
      <p>Gust: {gust_mph}</p>
    </div>
    </div>
    </div>
  );
};

export default WeatherNow;
