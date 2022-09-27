import React, { useState, useEffect } from "react";
import axios from "axios";
import { Base_URL, options } from "../../constants";
import WeatherNow from "../weather-now/WeatherNow";
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
          setHistory(res.data.history);
        })
        .catch((err) => console.log(err));
  }, [weatherData]);

  useEffect(() => {
    weatherData &&
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
            humidity: weatherData.humidity,
            preciptation: weatherData.precip_in,
            user_id,
          },
          {
            headers: {
              authorization: token,
            },
          }
        )
        .catch((err) => console.log(err));
  }, [weatherData]);

  return (
    <div>
      <div className="mainpage">
        <div className="row d-flex justify-content-center pt-3 ">
          <div className="col-sm-10">
            <form onSubmit={submitHandler}>
              <div className="input-group ">
                <input
                  id="form1"
                  className="form-control rounded-2 border border-info col-md-3 px-2 mx-2"
                  name="city"
                  type="text"
                  placeholder="Enter City name"
                  value={form.city}
                  onChange={changeHandler}
                />

                <input
                  id="form2"
                  className="form-control border border-info col-sm-3 rounded-2  px-2 mx-2"
                  name="country"
                  type="text"
                  placeholder="Enter region or country"
                  value={form.country}
                  onChange={changeHandler}
                />
                <button
                  type="submit"
                  className="btn btn-secondary btn-block rounded-2 col-sm-1 mx-2">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container pt-2 ">
        <div className="row">
          <div className="col">
            {weatherData.country && <WeatherNow weatherData={weatherData} />}
            {message && (
              <div>
                <p>{message}</p>
              </div>
            )}
          </div>
          <div className="col">
            <WeatherHistories history={history} />
          </div>
        </div>
      </div>
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
