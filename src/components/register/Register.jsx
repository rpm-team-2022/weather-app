/* eslint-disable react/prop-types */
import React from "react";

const Register = ({ setIsRegisterOn }) => {
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    setIsRegisterOn(false);
  };

  return (
    <div>
      <h3>sign up</h3>
      <form onSubmit={registerSubmitHandler}>
        <div>
          <label>
            First Name &nbsp;
            <input type="text" name="firstName" placeholder="enter your First Name" />
          </label>
        </div>
        <div>
          <label>
            Last Name &nbsp;
            <input type="text" name="lastName" placeholder="enter your Last Name" />
          </label>
        </div>
        <div>
          <label>
            Username &nbsp;
            <input type="text" name="username" placeholder="enter a username" />
          </label>
        </div>
        <div>
          <label>
            Password &nbsp;
            <input type="password" name="password" placeholder="enter a new password" />
          </label>
        </div>
        <div>
          <label>
            Email &nbsp;
            <input type="email" name="email" placeholder="enter your email address" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
