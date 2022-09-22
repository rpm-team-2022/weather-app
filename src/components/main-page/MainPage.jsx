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
    <div className="mainpage">
    <div className="row d-flex justify-content-center pt-5 ">
      <div className="col-md-10">
        <form onSubmit={submitHandler} >
          <div className="input-group ">
            <input
              id="form1" className="form-control rounded-2 border border-info col-md-3 px-2 mx-2"
              name="city"
              type="text"
              placeholder="City"
              value={form.city}
              onChange={changeHandler}
            />

            <input
              id="form2" className="form-control border border-info col-md-3 rounded-2  px-2 mx-2"
              name="country"
              type="text"
              placeholder="Country"
              value={form.country}
              onChange={changeHandler}
            />


            <button type="submit" className="btn btn-secondary btn-block rounded-2 col-md-1 mx-2">
              <i className="fas fa-search"></i>
            </button>
          </div>

        </form>
      </div>
    </div >
    </div>
  );
};

export default MainPage;
