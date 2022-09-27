/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";

const initialForm = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  email: "",
};

const Register = ({ setIsRegisterOn, setMessage }) => {
  const [form, setForm] = useState(initialForm);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://weatherappback.herokuapp.com/auth/register", form)
      .then((res) => {
        setMessage(res.data.message);
        setIsRegisterOn(false);
      })
      .catch((err) => console.log(err));
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

                  <div className="form-outline d-inline-flex ">
                    <input type="text" className="form-control me-3" name="firstName" placeholder="First Name"
                      value={form.firstName}
                      onChange={changeHandler} />
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name"
                      value={form.lastName}
                      onChange={changeHandler} />
                  </div>
                  <div className="form-outline mt-3">
                    <input type="text" className="form-control" name="userName" placeholder="Enter an username"
                      value={form.userName}
                      onChange={changeHandler} />
                  </div>

                  <div className="form-outline mt-3">
                    <input type="password" className="form-control" name="password" placeholder="Enter a new Password"
                      value={form.password}
                      onChange={changeHandler} />
                  </div>
                  <div className="form-outline mt-3">
                    <input type="email" className="form-control" name="email" placeholder="E-mail address"
                      value={form.email}
                      onChange={changeHandler} />
                  </div>


                  <div className="text-center pt-1 mt-4 pb-1">
                    <button type="submit" className=" btn btn-success px-4">Submit</button>
                  </div>
                </form>
              </div>
              <div className="d-flex justify-content-center align-items-center" >
                <p className="mx-3">Do you have an account  </p>
                <button onClick={() => setIsRegisterOn()} className=" btn btn-dark px-4 mb-3">log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Register;
