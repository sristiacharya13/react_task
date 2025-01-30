{/*
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
*/}
import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-content">
          <div>
            <h1 className='h1f' style={{ color: "white",fontFamily: "'Kanit', serif",fontSize:"50px"}}>Take Control of Your</h1>
            <h1 className='h1s' style={{fontSize:"90px"}}>Financial Future</h1>
            <p className='para' style={{fontSize:"23px"}}>Investvidhi helps you take best financial decisions to achieve your goals</p>
            <div style={{height:"20px"}}></div>
          </div>
          <Link to="/loading" className="nav-button" style={{color:"#ff5722",backgroundColor: "white",borderRadius:"5px"}}>
            {/*<img src="getstartedw.png" style={{width:"100px"}}/>*/}Get Started
          </Link>
        </div>
        <img src="mobframe.png" className="mobile-frame" style={{width:"250px"}}/>
        <img src="futuregoals.png"className='future-goals-frame' style={{width:"150px"}}/>
      </div>
      <img className="hero-image" src="hero-image.jpg" alt="Financial Future" />
    </div>
  );
};

export default HeroSection;
