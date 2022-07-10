import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="logo" />
      </div>
      <div className="navbar__links-container">
        <div>
          <Link to="/" className="navbar__links-item">
            Home
          </Link>
        </div>
        <div>
          <Link to="/mint" className="navbar__links-item">
            Mint
          </Link>
        </div>
        <div>
          <Link to="/community" className="navbar__links-item">
            Community
          </Link>
        </div>
        <button className="navbar__button">Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
