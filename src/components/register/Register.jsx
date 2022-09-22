/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";

const initialForm = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  email: "",
};

const Register = ({ setIsRegisterOn, setMessage }) => {
  const [form, setForm] = useState(initialForm);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://weatherappback.herokuapp.com/auth/register", form)
      .then((res) => {
        setMessage(res.data.message);
        setIsRegisterOn(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>sign up</h3>
      <form onSubmit={registerSubmitHandler}>
        <div>
          <label>
            First Name &nbsp;
            <input
              type="text"
              name="firstName"
              placeholder="enter your First Name"
              value={form.firstName}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name &nbsp;
            <input
              type="text"
              name="lastName"
              placeholder="enter your Last Name"
              value={form.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Username &nbsp;
            <input
              type="text"
              name="userName"
              placeholder="enter a username"
              value={form.userName}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Password &nbsp;
            <input
              type="password"
              name="password"
              placeholder="enter a new password"
              value={form.password}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Email &nbsp;
            <input
              type="email"
              name="email"
              placeholder="enter your email address"
              value={form.email}
              onChange={changeHandler}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div>
        <p>
          do you have an account &nbsp;
          <span>
            <button onClick={() => setIsRegisterOn()}>log in </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
