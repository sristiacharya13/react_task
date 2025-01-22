import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-content">
          <img src="future.png" className="futureheading" style={{width:"400px"}}/>
          <Link to="/loading" className="get-started">
            <img src="getstartedw.png" style={{width:"100px"}}/>
          </Link>
        </div>
        <img src="mobframe.png" className="mobile-frame" style={{width:"200px"}}/>
        <img src="futuregoals.png"className='future-goals-frame' style={{width:"150px"}}/>
      </div>
      <img className="hero-image" src="hero-image.jpg" alt="Financial Future" />
    </div>
  );
};

export default HeroSection;
