/* eslint-disable react/prop-types */
import React from "react";
import WeatherHistory from "../weather_history/WeatherHistory";

const WeatherHistories = ({ history }) => {
  return (
    <div>
      <h2>previous Weather Search history</h2>
      {typeof history === "string" ? (
        <p>{history}</p>
      ) : (
        history
          .sort((a, b) => b.id - a.id)
          .map((el) => {
            if (el.country) return <WeatherHistory key={el.id} query={el} />;
          })
      )}
    </div>
  );
};

export default WeatherHistories;
