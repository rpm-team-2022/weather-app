import React, { useState } from "react";
import axios from "axios";

const initalForm = {
  userName: "",
  password: "",
};

// eslint-disable-next-line react/prop-types
const Login = ({ setIsLoggedIn, setMessage, setUser_id }) => {
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
        setIsLoggedIn(true);
        setUser_id(res.data.user.userId);
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  return (
    <div>
      <h2>Login</h2>
      <form action="submit" onSubmit={submitHandler}>
        <label>
          username &nbsp;
          <input type="text" name="userName" onChange={changeHandler} value={form.userName} />
        </label>
        <br />
        <label>
          password &nbsp;
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={form.password}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
