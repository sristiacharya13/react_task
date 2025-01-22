import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Team</li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <ul>
            <li>Research</li>
            <li>AI Platform</li>
            <li>Webinar</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section socials">
            <ul>
                <li>Socials</li>
                <li>Join Us</li>
                <li><div className="social-icons">
                    <li><img src="youtube.png" alt="YouTube" className="social-icon" /></li>
                    <li><img src="facebook.png" alt="Facebook" className="social-icon" /></li>
                    <li><img src="twitter.png" alt="Twitter" className="social-icon" /></li>
                    <li><img src="instagram.png" alt="Instagram" className="social-icon" /></li>
                    <li><img src="linkedin.png" alt="LinkedIn" className="social-icon" /></li>
          </div>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;