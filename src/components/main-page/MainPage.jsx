import React, { useState, useEffect } from "react";
import axios from "axios";
import { Base_URL, options } from "../../constants";
import WeatherNow from "../../weather-now/WeatherNow";
import WeatherHistories from "../weather_histories/WeatherHistories";

const initialForm = {
  city: "",
  country: "",
};

const initalWeatherData = {
  country: "",
  region: "",
  name: "",
  localtime: "",
  conditionText: "",
  conditionIcon: "",
  temp_f: 0,
  feelslike_f: 0,
  wind_mph: 0,
  gust_mph: 0,
  wind_dir: "",
  humidity: 0,
  precip_in: 0,
};
// eslint-disable-next-line react/prop-types
const MainPage = ({ message, setMessage, user_id }) => {
  const [weatherData, setWeatherData] = useState(initalWeatherData);
  const [form, setForm] = useState(initialForm);
  const [history, setHistory] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let weather = await axios.get(`${Base_URL}?q=${form.city} ${form.country}`, options);
      setWeatherData({
        country: weather.data.location.country,
        region: weather.data.location.region,
        name: weather.data.location.name,
        localtime: weather.data.location.localtime,
        conditionText: weather.data.current.condition.text,
        conditionIcon: weather.data.current.condition.icon,
        temp_f: weather.data.current.temp_f,
        feelslike_f: weather.data.current.feelslike_f,
        wind_mph: weather.data.current.wind_mph,
        gust_mph: weather.data.current.gust_mph,
        wind_dir: weather.data.current.wind_dir,
        humidity: weather.data.current.humidity,
        precip_in: weather.data.current.precip_in,
      });
    } catch (err) {
      console.log(err);
    }
  };

  setTimeout(() => {
    setMessage(null);
  }, 3000);

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    user_id &&
      axios
        .get(`https://weatherappback.herokuapp.com/history/userHistory/${user_id}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          // console.log(res);
          setHistory(res.data.history);
        })
        .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    weatherData.country &&
      axios
        .post(
          `https://weatherappback.herokuapp.com/history/addToHistory`,
          {
            country: weatherData.country,
            region: weatherData.region,
            city_name: weatherData.name,
            local_time: weatherData.localtime,
            condition_text: weatherData.conditionText,
            feels_like: weatherData.feelslike_f,
            gust_mph: weatherData.gust_mph,
            temp_f: weatherData.temp_f,
            wind_dir: weatherData.wind_dir,
            wind_mph: weatherData.wind_mph,
            user_id,
          },
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
  }, [weatherData]);

  return (
    <div>
      <h2>this is the main page where all the magic happens</h2>
      <form onSubmit={submitHandler}>
        <label>
          city: &nbsp;
          <input
            name="city"
            type="text"
            placeholder="please enter a city name"
            value={form.city}
            onChange={changeHandler}
          />
        </label>
        <label>
          Country: &nbsp;
          <input
            name="country"
            type="text"
            placeholder="please enter a city name"
            value={form.country}
            onChange={changeHandler}
          />
        </label>
        &nbsp;
        <button type="submit">submit</button>
      </form>
      {weatherData.country && <WeatherNow weatherData={weatherData} />}
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
      <WeatherHistories history={history} />
    </div>
  );
};

export default MainPage;

// country: weatherData.country,
// region: weatherData.region,
// city_name: weatherData.name,
// local_time: weatherData.localtime,
// condition_text: weatherData.conditionText,
// feels_like: weatherData.feelslike_f,
// gust_mph: weatherData.gust_mph,
// temp_f: weatherData.temp_f,
// wind_dir: weatherData.wind_dir,
// wind_mph: weatherData.wind_mph,
