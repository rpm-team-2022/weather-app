import React, { useState } from "react";

const initalForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initalForm);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
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
