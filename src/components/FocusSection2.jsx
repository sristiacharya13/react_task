import React from 'react';
import './FocusSection2.css';
import { Link } from 'react-router-dom';

const FocusSection2 = ({toggleFocusSection}) => {
  return (
    <>
    <div className='topdiv'></div>
    <div className='focusmater'>
        <h1 className='h1f' style={{color:"black"}}>Your Future, Our Expertise</h1>
        <p className='para'>With InvestVidhi, take advantage of <span className='heighlight'>personalized</span> strategies,<span className='heighlight'>AI-driven</span> insights, and <span className='heighlight'>smarter</span> tools to grow your wealth effortlessly.</p>
    </div>
    <div className="container">
        <div className="box-group top-left">
          <div className="small-box1">
            <img src="export1.png" alt="Export" style={{ height: "100px", width: "100px", left: "150px" }} />
          </div>
          <div className="rectangle-box2">
          <div className="upskill-button" style={{width:"180px"}}>
                <div className="graph-icon"><img src="f1.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>Exit Strategy:</b> Simplified exit signals</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
            </div>
          </div>
        </div>
        <div className="large-box center">
          <img src="focusframeImage.png" alt="Focus Section" style={{ width: "240px", height: "350px" }} />
        </div>
        <div className="box-group top-right">
          <div className="small-box2">
            <img src="topstock.png" alt="Family Time" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="rectangle-box1">
          <div className="upskill-button" style={{width:"240px"}}>
                <div className="graph-icon"><img src="f2.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>Top Stocks to Buy:</b> Clear picks with buy amounts</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
            </div>
          </div>
        </div>
        <div className="box-group bottom-right">
          <div className="small-box3">
            <img src="addmore.png" alt="Vacation" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="rectangle-box1">
          <div className="upskill-button" style={{width:"200px"}}>
                <div className="graph-icon"><img src="f3.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>Add More:</b>Timely prompts for scaling up</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
            </div>
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
