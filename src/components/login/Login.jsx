/* eslint-disable react/prop-types */
import React from "react";

const Login = () => {
  return (
    <div>
      <h5>SIGN IN</h5>
      <form action="submit" onSubmit={() => console.log("submitted")}>
        <div className="form-outline">
          <input type="text"  className="form-control" name="username" placeholder="Username"/>
        </div>
        <br />
        <div className="form-outline mb-3">
            <input type="password" className="form-control" name="password" placeholder="Password"/>
        </div>
        <div className="text-center pt-1 mb-4 pb-1">
        <button className="btn btn-success px-4">Login</button>
        </div>
      </form>
    </div>

  );
};

export default Login;
