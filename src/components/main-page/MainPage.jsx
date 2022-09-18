import React, { useState } from "react";
import axios from "axios";
import { Base_URL, options } from "../../constants";

const initialForm = {
  city: "",
  country: "",
};
const MainPage = () => {
  // const [weatherData, setWeatherData] = useState(initialData);
  const [form, setForm] = useState(initialForm);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(name, value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let weather = await axios.get(`${Base_URL}?q=${form.city} ${form.country}`, options);
    console.log(weather);
  };

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
    </div>
  );
};

export default MainPage;
