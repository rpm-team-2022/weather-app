import React from "react";
import { Link } from "react-router-dom";
import navLogo from '../images/logo2.png'
import './nav.css'
// eslint-disable-next-line react/prop-types
const Nav = ({ setIsLoggedIn, isLoggedIn }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link className="mx-4" to={"/"}><img src={navLogo} style={{ width: "40px" }}></img></Link>
          <div className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-inline-flex px-3">
            {isLoggedIn ? (<li className="nav-item py-3 px-1">
            <Link className="link" to={"/"}>Home &nbsp;</Link>
            </li> ) : ""}
            <li className="nav-item py-3 px-1">
            <Link className="link" to={"/about"}>About &nbsp;</Link>
            </li>
            <li  className="nav-item py-3">
            {isLoggedIn && (
              <a href="" onClick={() => setIsLoggedIn(false)}>
                Log Out
              </a>
            )}
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
