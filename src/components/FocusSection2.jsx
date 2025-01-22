import React from 'react';
import './FocusSection.css';
import { Link } from 'react-router-dom';

const FocusSection2 = ({toggleFocusSection}) => {
  return (
    <>
    <div className='topdiv'></div>
    <div className="focus-master">
        <img src="expertise_heading.png" className="focus-master-img" alt="Focus Master" style={{height:"50px",width:"650px"}}/>
    </div>
    <div className="container">
        <div className="box-group top-left">
          <div className="small-box1">
            <img src="export1.png" alt="Export" style={{ height: "100px", width: "100px", left: "150px" }} />
          </div>
          <div className="rectangle-box2">
            <img src="exportframe.png" alt="Invest" style={{ height: "20px" }} />
          </div>
        </div>
        <div className="large-box center">
          <img src="INVEST VIDHI.jpg" alt="Focus Section" style={{ width: "240px", height: "350px" }} />
        </div>
        <div className="box-group top-right">
          <div className="small-box2">
            <img src="topstock.png" alt="Family Time" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="rectangle-box1">
            <img src="topframe.png" alt="Family" style={{ height: "20px" }} />
          </div>
        </div>
        <div className="box-group bottom-right">
          <div className="small-box3">
            <img src="addmore.png" alt="Vacation" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="rectangle-box1">
            <img src="addmoreframe.png" alt="Travel" style={{ height: "20px" }} />
          </div>
        </div>
      </div>

      <div className="bubble-slider">
                <img
                  src="bubble2.png"
                  className="bubblebutton"
                  style={{ width: '25px',height:'5px', cursor: 'pointer' }}
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

export default FocusSection2;
