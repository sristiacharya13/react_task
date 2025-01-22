{/*
import React from 'react';
import './FocusSection.css';
import { Link } from 'react-router-dom';

const FocusSection = ({ toggleFocusSection }) => {
  return (
    <>
      {/* Top Spacing *
      <div className="topdiv"></div>

      {/* Main Content *
      <div className="focus-section">
        <div className="focus-header">
          <img src="Section 1.1.png" alt="Focus Section 1" />
        </div>

        <div className="bubble-slider">
          <img
            src="bubble2.png"
            className="bubblebutton"
            alt="Switch to FocusSection2"
            onClick={toggleFocusSection}
          />
          <Link to="/loading" className="try-now-link">
            <img src="trynow.png" className="trynowbutton" alt="Try Now" />
          </Link>
        </div>
      </div>

      {/* Bottom Spacing 
      <div className="bottomdiv"></div>
    </>
  );
};

export default FocusSection;
*/}
{/*
import React from 'react';
import './FocusSection.css';
import { Link } from 'react-router-dom';

const FocusSection = ({toggleFocusSection}) => {
  return (
    <>
    <div className='topdiv'></div>
    <div className="focus-header">
        <img src="Section 1.1.png" style={{width:"80%"}}/>
    </div>
  
      <div className='bottomdiv'></div>
  </>
  );
};

export default FocusSection;
*/}

import React from 'react';
import './FocusSection.css';
import { Link } from 'react-router-dom';

const FocusSection = ({toggleFocusSection}) => {
  return (
    <>
    <div className='topdiv'></div>
    <div className="focus-master">
        <img src="focusmasterimg.png" className="focus-master-img" alt="Focus Master" style={{height:"50px",width:"650px"}}/>
    </div>
    <div className="container">
        <div className="box-group top-left">
          <div className="small-box1">
            <img src="upskill-image.png" alt="Upskill" style={{ height: "100px", width: "100px", left: "150px" }} />
          </div>
          <div className="rectangle-box2">
            <img src="invest.png" alt="Invest" style={{ height: "20px" }} />
          </div>
        </div>
        <div className="large-box center">
          <img src="heroimage.png" alt="Focus Section" style={{ width: "240px", height: "350px" }} />
        </div>
        <div className="box-group top-right">
          <div className="small-box2">
            <img src="family-time.png" alt="Family Time" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="rectangle-box1">
            <img src="family.png" alt="Family" style={{ height: "20px" }} />
          </div>
        </div>
        <div className="box-group bottom-right">
          <div className="small-box3">
            <img src="vacation.png" alt="Vacation" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="rectangle-box1">
            <img src="travel.png" alt="Travel" style={{ height: "20px" }} />
          </div>
        </div>
      </div>

      <div className="bubble-slider">
                <img
                  src="bubble1.png"
                  className="bubblebutton"
                  style={{ width: '20px',height:'5px', cursor: 'pointer' }}
                  alt="Switch to FocusSection2"
                  onClick={toggleFocusSection}
                />
                <Link to="/loading" className="try-now-link">
                  <img src="trynow.png" className="trynowbutton" alt="Try Now" style={{width:"80px"}}/>
                </Link>
      </div>
      <div className='bottomdiv'></div>
    </>
  );
};

export default FocusSection;
