/* eslint-disable react/prop-types */
import React, { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
};

const Register = ({ setIsRegisterOn }) => {
  const [form, setForm] = useState(initialForm);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    setIsRegisterOn(false);
    console.log(form);
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
              name="username"
              placeholder="enter a username"
              value={form.username}
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
    </div>
  );
};

export default Register;
