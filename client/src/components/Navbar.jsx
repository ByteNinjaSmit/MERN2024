import React from "react";
import { NavLink } from "react-router-dom"; 


const Navbar = () => {
  return (
    <>
      <Navbar>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>

            </ul>
          </nav>
        </div>
      </Navbar>
    </>
  );
};

export default Navbar;
