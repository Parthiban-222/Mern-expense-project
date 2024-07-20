import React from "react";
import { Link, useNavigate } from "react-router-dom";
import homeIcon from "../assets/navImg/home.jpg";
import contactIcon from "../assets/navImg/contact.jpg";
import aboutIcon from "../assets/navImg/about.jpg";
import loginIcon from "../assets/navImg/login.jpg";
import logo from "../assets/navImg/logo.jpg";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

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
      <Link to="/login">
          <img src={loginIcon} className="navbar-icon" alt="Login" />
        </Link>
      
    </div>
  );
};

export default Nav;
