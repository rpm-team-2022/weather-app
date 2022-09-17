import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form action="submit" onSubmit={console.log("submitted")}>
        <label>
          username &nbsp;
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          password &nbsp;
          <input type="password" name="password" />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
