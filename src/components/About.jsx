{/*
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
    <div className='focusmater'>
        <h1 className='h1f' style={{color: "orangered"}}>Master the Mindset</h1>
        <p className='para'>Unlock the power of an abundance mindset to navigate financial stress and market uncertainties. We help you break free from emotional decision-making, overcome financial fears, and build confidence with proven strategies.</p>
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
{/*-----------------------------------------------------------------

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

    <div className='focusmater'>
        <h1 className='h1f' style={{color: "orangered"}}>Master the Mindset</h1>
        <p className='para'>Unlock the power of an abundance mindset to navigate financial stress and market uncertainties. We help you break free from emotional decision-making, overcome financial fears, and build confidence with proven strategies.</p>
    </div>

    <div className="container">
        <div className="box-group top-left">
          <div className="rectangle-box2">
          <div className="upskill-button">
                <div className="graph-icon"><img src="up1.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>More Time to Upskill:</b> Invest in yourself</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
          </div>
          </div>
        </div>
        <div className="large-box center">
          <img src="man.png" alt="Focus Section" style={{ width: "200px", height: "300px" }} />
        </div>
        <div className="box-group top-right">
          <div className="rectangle-box1">
          <div className="upskill-button">
                <div className="graph-icon"><img src="up2.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>Spend More Time with Family:</b> Prioritize what matters</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
          </div>
          </div>
        </div>
        <div className="box-group bottom-right">
          <div className="rectangle-box1">
          <div className="upskill-button">
                <div className="graph-icon"><img src="up3.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>Achieve Your Dream Vacation:</b> Make it a reality</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
          </div>
          </div>
        </div>
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
{/*

-------------------------------------------------
*/}

{/*
  ---------------------------------------------------------------------
import React from 'react';
import './About.css';
import AboutHeader from './AboutHeader';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <AboutHeader/>
    {/*
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
    *

    <div className='focusmater'>
        <h1 className='h1f' style={{color: "orangered"}}>Master the Mindset</h1>
        <p className='para'>Unlock the power of an abundance mindset to navigate financial stress and market uncertainties. We help you break free from emotional decision-making, overcome financial fears, and build confidence with proven strategies.</p>
    </div>

    <div className="container">
        <div className='topleft'>
          <div className="upskill-button">
                <div className="graph-icon"><img src="abt1.png" alt="abt1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'>How confident are you in your ability to manage financial stress?</span>
          </div>
        </div>
        <div className='bottomleft'>
          <div className="upskill-button">
                <div className="graph-icon"><img src="abt3.png" alt="abt3" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'>How can you focus on your job/business and compound wealth stress free?</span>
          </div>

        </div>
        <div className="large-box center">
          <img src="man.png" alt="Focus Section" style={{ width: "200px", height: "300px" }} />
        </div>
        <div className="topright">
          <div className="upskill-button">
                <div className="graph-icon"><img src="abt2.png" alt="abt2" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'>Are you spending countless hours on day trading and DIY investing with little to no impact on your financial growth?</span>
          </div>
        </div>
          <div className="bottomright">
          <div className="upskill-button">
                <div className="graph-icon"><img src="abt4.png" alt="abt4" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'>How do you handle emotions of greed and fear in your financial life?</span>
          </div>
          </div>
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
------------------------------------------------
*/}
// About.jsx
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutHeader from './AboutHeader';

const About = () => {
  return (
    <>
    <AboutHeader/>
      <div className='focusmater'>
        <h1 className='h1f' style={{fontSize:"40px"}}>Master the Mindset</h1>
        <p className='para' style={{fontSize:"20px"}}>Unlock the power of an abundance mindset to navigate financial stress and market uncertainties. We help you break free from emotional decision-making, overcome financial fears, and build confidence with proven strategies.</p>
      </div>

      <div className="container">
        <div className='topleft'>
          <div className="upskill-button" style={{height:"20px"}}>
            <div className="graph-icon"><img src="abt1.png" alt="abt1" style={{width:"12px",height:"12px"}}/></div>
            <span className='txt' style={{fontSize:"11.5px"}}>How confident are you in your ability to manage financial stress?</span>
          </div>
        </div>
        <div className='bottomleft'>
          <div className="upskill-button" style={{height:"20px"}}>
            <div className="graph-icon"><img src="abt3.png" alt="abt3" style={{width:"12px",height:"12px"}}/></div>
            <span className='txt' style={{fontSize:"11.5px"}}>How can you focus on your job/business and compound wealth stress free?</span>
          </div>

        </div>
        <div className="large-box center">
          <img src="man.png" alt="Focus Section" />
        </div>
        <div className="topright">
          <div className="upskill-button" style={{height:"20px",width: "350px"}}>
            <div className="graph-icon"><img src="abt2.png" alt="abt2" style={{width:"12px",height:"12px"}}/></div>
            <span className='txt' style={{fontSize:"11.5px"}}>Are you spending countless hours on day trading and DIY investing with little to no impact on your financial growth?</span>
          </div>
        </div>
        <div className="bottomright">
          <div className="upskill-button" style={{height:"20px"}}>
            <div className="graph-icon"><img src="abt4.png" alt="abt4" style={{width:"12px",height:"12px"}}/></div>
            <span className='txt' style={{fontSize:"11.5px"}}>How do you handle emotions of greed and fear in your financial life?</span>
          </div>
        </div>
      </div>
      <div className="bubble-slider">
        {/*
        <Link to="/loading" className="learnmore-link">
          <img src="learnmore.png" className="learnmorebutton" />
        </Link>
        */}
        <Link to="/loading" className="try-now-link">
           {/*<img src="trynow.png" className="trynowbutton" alt="Try Now" style={{width:"80px"}}/>*/}
           <div className='try-now-button' style={{width:"100px",padding:"3px",backgroundColor:" #ffffff",color:" #ff6600"}}>Learn Now
              <img src="arrow-insert.png" style={{width:"15px",height:"15px"}}/>
            </div>
        </Link>
    </div>
    </>
  );
};

export default About;