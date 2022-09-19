import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Nav = ({ setIsLoggedIn, isLoggedIn }) => {
  return (
    <div>
      <h3>RPM team Weather app</h3>
      <Link to={"/"}>Home &nbsp;</Link>
      <Link to={"/about"}>About &nbsp;</Link>

      {isLoggedIn && (
        <a href="" onClick={() => setIsLoggedIn(false)}>
          Log Out
        </a>
      )}
    </div>
  );
};

export default Nav;
