import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <header className="header">
      <div className="logo">CogniMuse</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><Link to="/loading" className="nav-button">Get Started</Link></li>
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

    <div className="focus-header">
        <img src="aboutmastercontent.png" style={{width:"80%"}}/>
    </div>
  
    <div className="bubble-slider">
      <Link to="/loading" className="learnmore-link">
        <img src="learnmore.png" className="learnmorebutton" />
      </Link>
    </div>

  </>
  );
};

export default About;