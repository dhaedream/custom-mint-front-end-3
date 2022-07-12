import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container gradient-container">
      <div className="footer-links-container gradient">
        <div>
          <Link to="/" className="footer__links-item">
            Home
          </Link>
        </div>
        <div>
          <a
            className="navbar__links-item"
            href="https://custom-mint-front-end-2.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Mint
          </a>
        </div>
        <div>
          <Link to="/community" className="footer__links-item">
            Community
          </Link>
        </div>
        <div className="footer__button-container">
          <button className="footer__button">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
