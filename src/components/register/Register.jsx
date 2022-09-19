/* eslint-disable react/prop-types */
import React from "react";

const Register = ({ setIsRegisterOn }) => {
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    setIsRegisterOn(false);
  };

  return (
    <div>
      <div className="container  h-50 ">
        <div className="row d-flex justify-content-center align-items-center h-75 p-5">
          <div className="col-lg-6">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <h3 className="text-center mt-5">
                  <span className="text-success">Sign</span> up</h3>
                <form onSubmit={registerSubmitHandler} className="p-5">

                  <div className="form-outline d-inline-flex p-2">
                    <input type="text" className="form-control " name="firstName" placeholder="First Name" />
                    <input type="text" className="form-control mx-3" name="lastName" placeholder="Last Name" />
                  </div>

                  <div className="form-outline mt-3">
                    <input type="text" className="form-control" name="username" placeholder="Enter an username" />
                  </div>

                  <div className="form-outline mt-3">
                    <input type="password" className="form-control" name="password" placeholder="Enter a new Password" />
                  </div>

                  <div className="form-outline mt-3">
                    <input type="email" className="form-control" name="email" placeholder="E-mail address" />
                  </div>


                  <div className="text-center pt-1 mt-4 pb-1">
                    <button type="submit" className=" btn btn-success px-4">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
