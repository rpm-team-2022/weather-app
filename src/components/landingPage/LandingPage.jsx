/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";
import logo from '../images/LOGO.png'


const LandingPage = () => {
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return !isLoggedIn ? (
    <div>
    <div className="back-pg h-100">
        {isRegisterOn ? (
          <Register setIsRegisterOn={setIsRegisterOn} />
        ) : (
          <>
            <div className="container  h-50 ">
              <div className="row d-flex justify-content-center align-items-center h-75 p-5">
                <div className="col-xl-10 ">
                  <div className="card rounded-3 text-black main-box">
                    <div className="row g-0">
                      <div className="col-lg-6" >
                        <div className="card-body p-md-5 mx-md-4">
                          <div className="text-center">
                            <img src={logo} alt="logo" className="logo mt-1 mb-5 pb-1" />
                          </div>
                          <Login />
                          <br />
                          <div className="d-flex align-items-center justify-content-center pb-2">
                            New user? &nbsp;
                            <button className="btn btn-outline-secondary" onClick={() => setIsRegisterOn(true)}>Sign up</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 className="mb-4">Welcome to the weather App</h4>
                          <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
           
          </>
        )}
      </div>
    </div>
  ) : (
    <div>You are Logged in</div>

  );
};

export default LandingPage;
