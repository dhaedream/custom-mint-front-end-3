import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <div>
          <Link to="/" className="footer__links-item">
            Home
          </Link>
        </div>
        <div>
          <Link to="/mint" className="footer__links-item">
            Mint
          </Link>
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
