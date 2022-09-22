/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";

const LandingPage = (props) => {
  const { setIsLoggedIn, message, setMessage, setUser_id } = props;

  const [isRegisterOn, setIsRegisterOn] = useState(false);

  return (
    <div>
      <h2>Welcome to the weather App</h2>
      {isRegisterOn ? (
        <Register
          setIsRegisterOn={setIsRegisterOn}
          message={message}
          setMessage={setMessage}
        />
      ) : (
        <>
          <Login
            setIsLoggedIn={setIsLoggedIn}
            message={message}
            setMessage={setMessage}
            setUser_id={setUser_id}
          />
          <br />
          New User? &nbsp; <button onClick={() => setIsRegisterOn(true)}>sign up here</button>
        </>
      )}
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
