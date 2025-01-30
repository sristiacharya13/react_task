{/*
import React from 'react'
import { Link } from 'react-router-dom';
import './AboutHeader.css';

const AboutHeader = () => {
  return (
    <div>
      <header className="header">
      <div className="logo">CogniMuse</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><Link to="/loading" className="nav-button" style={{color:"white"}}>Get Started</Link></li>
        </ul>
      </nav>
    </header>

    <div className="second-div">
    <nav>
        <ul className="nav-links1">
          <li><Link to="/"><img src="homelogo.png" style={{width:"40px"}}/></Link></li>
          <li><Link to="/about"><img src="aboutlogo.png" style={{width:"35px"}}/></Link></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default AboutHeader
*/}
// AboutHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHeader.css';

const AboutHeader = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">CogniMuse</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li>
              <Link to="/loading" className="nav-button" style={{ color: "white" }}>
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="second-div">
        <nav>
          <ul className="nav-links1">
            <li>
              <Link to="/" className="breadcrumb-link"> {/* Added class for styling */}
                <div className="breadcrumbs">
                  <img src="hm.png" style={{ width: "12px", height: "12px" }} alt="Home Icon" /> {/* Added alt attribute */}
                  <span className="htext"> Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about" className="breadcrumb-link"> {/* Added class for styling */}
                <div className="breadcrumbs">
                  <img src="arr.png" style={{ width: "12px", height: "15px" }} alt="Arrow Icon" /> {/* Added alt attribute */}
                  <span className="htext"> About</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AboutHeader;