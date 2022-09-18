/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";

const LandingPage = () => {
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return !isLoggedIn ? (
    <div>
      <h2>Welcome to the weather App</h2>
      {isRegisterOn ? (
        <Register setIsRegisterOn={setIsRegisterOn} />
      ) : (
        <>
          <Login />
          <br />
          New User? &nbsp; <button onClick={() => setIsRegisterOn(true)}>sign up here</button>
        </>
      )}
    </div>
  ) : (
    <div>You are Logged in</div>
  );
};

export default LandingPage;