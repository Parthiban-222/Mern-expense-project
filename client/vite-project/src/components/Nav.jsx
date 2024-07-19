import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/navImg/home.jpg";
import contactIcon from "../assets/navImg/contact.jpg";
import aboutIcon from "../assets/navImg/about.jpg";
import logo from "../assets/navImg/logo.jpg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="navbar-center">
        <Link to="/">
          <img src={homeIcon} className="navbar-icon" alt="Home" />
        </Link>
        <Link to="/about">
          <img src={aboutIcon} className="navbar-icon" alt="About" />
        </Link>
        <Link to="/contact">
          <img src={contactIcon} className="navbar-icon" alt="Contact" />
        </Link>
      </div>
      <div className="navbar-right">
        <h4>Login</h4>
      </div>
    </div>
  );
};

export default Nav;