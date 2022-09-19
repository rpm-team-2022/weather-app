import React, { useState } from "react";

const initalForm = {
  username: "",
  password: "",
};

// eslint-disable-next-line react/prop-types
const Login = ({ setIsLoggedIn }) => {
  const [form, setForm] = useState(initalForm);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <form action="submit" onSubmit={submitHandler}>
        <label>
          username &nbsp;
          <input type="text" name="username" onChange={changeHandler} value={form.username} />
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
