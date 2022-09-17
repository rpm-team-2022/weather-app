import React from "react";
import Login from "../login/Login";
import Register from "../register/Register";

const LandingPage = () => {
  return (
    <div>
      <h2>Welcome to the weather App</h2>
      <Login />
      <Register />
    </div>
  );
};

export default LandingPage;
