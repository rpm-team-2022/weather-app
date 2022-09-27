import React, { useState } from "react";
import axios from "axios";

const initalForm = {
  userName: "",
  password: "",
};

// eslint-disable-next-line react/prop-types
const Login = ({ setMessage, setUser_id }) => {
  const [form, setForm] = useState(initalForm);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://weatherappback.herokuapp.com/auth/login", form)
      .then((res) => {
        setMessage(res.data.message);
        setUser_id(res.data.user.userId);
        window.localStorage.setItem("user_id", res.data.user.userId);
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  return (
    <div>
      <h5>LOGIN</h5>
      <form action="submit" onSubmit={submitHandler}>
        <div className="form-outline mb-3">
          <input
            type="text"
            className="form-control"
            name="userName"
            placeholder="Username"
            onChange={changeHandler}
            value={form.userName}
          />
        </div>
        <div className="form-outline mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
            value={form.password}
          />
        </div>
        <div className="text-center pt-1 mb-4 pb-1">
          <button className="btn btn-success px-4">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
