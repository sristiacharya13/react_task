import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CogniMuse</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/*<li><a href="#get-started" className="nav-button">Get Started</a></li>*/}
          <li><Link to="/loading" className="nav-button">Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;