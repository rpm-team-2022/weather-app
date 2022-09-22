/* eslint-disable react/prop-types */
import React from "react";
import WeatherHistory from "../weather_history/WeatherHistory";

const WeatherHistories = ({ history }) => {
  return (
    <div>
      <h2>Recent Search History</h2>
      {typeof history === "string" ? (
        <p>{history}</p>
      ) : (
        history
          .sort((a, b) => b.id - a.id)
          .map((el, idx) => {
            if (el.country && idx <= 5) return <WeatherHistory key={el.id} query={el} />;
          })
      )}
    </div>
  );
};

export default WeatherHistories;
