/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../weather-now/weather-now.css";

const WeatherHistory = ({ query }) => {
  const [scroll, setScroll] = useState(false);
  return (
    <div>
      <div className={scroll ? "show rounded-3 mb-3" : "current rounded-3 mb-3"}>
        <div className="container">
          <div className="d-flex justify-content-around">
            <div className="pt-2">
              <span>Condition</span>
              <p>{query.condition_text}</p>
            </div>
            <div className="pt-2">
              <span className="title">Local time</span>
              <p>{query.local_time}</p>
            </div>
            <div className="scroll  my-sm-3 px-2" onClick={() => setScroll(!scroll)}>
              <i className={scroll ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i>
            </div>
          </div>
        </div>
        <div className="container ms-sm-3">
          <div className="row">
            <div className="col">
              <span className="title">City</span>
              <p>{query.city_name}</p>
            </div>
            <div className="col">
              <span className="title">Region</span>
              <p>{query.region}</p>
            </div>
            <div className="col">
              <span className="title">Country</span>
              <p>{query.country}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="title">Temperature</span>
              <p>{query.temp_f} &#176;F</p>
            </div>
            <div className="col">
              <span className="title">Feels like</span>
              <p>{query.feels_like} &#176;F</p>
            </div>
            <div className="col">
              <span className="title">Humidity</span>
              <p> {query.humidity} %</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="title">Preciptation</span>
              <p>{query.preciptation} in</p>
            </div>
            <div className="col">
              <span className="title">Wind</span>
              <p>{query.wind_mph} mph</p>
            </div>
            <div className="col">
              <span className="title">Wind Direction</span>
              <p>{query.wind_dir}</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <span className="title">Gust</span>
              <p>{query.gust_mph}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHistory;
