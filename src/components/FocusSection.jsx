{/*
  import React from 'react';
import './FocusSection.css';
import { Link } from 'react-router-dom';

const FocusSection = ({toggleFocusSection}) => {
  return (
    <>
    <div className='topdiv'></div>
    <div className='focusmater'>
        <h1 className='h1f'>Focus on What - Truly Matters</h1>
        <p className='para'>Let <span className='heighlight'>InvestVidhi</span> handle your <span className='heighlight'>finances</span> while you focus on <span className='heighlight'>what truly matters</span>. Seamlessly <span className='heighlight'>grow your wealth</span> with us.</p>
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
*/}
{/*
import React from 'react';
import './FocusSection.css';
import { Link } from 'react-router-dom';

const FocusSection = ({toggleFocusSection}) => {
  return (
    <>
    <div className='topdiv'></div>
    <div className='focusmater'>
        <h1 className='h1f'>Focus on What - Truly Matters</h1>
        <p className='para'>Let <span className='heighlight'>InvestVidhi</span> handle your <span className='heighlight'>finances</span> while you focus on <span className='heighlight'>what truly matters</span>. Seamlessly <span className='heighlight'>grow your wealth</span> with us.</p>
    </div>
    <div className="container">
        <div className="box-group top-left">
          <div className="small-box1">
            <img src="upskill-image.png" alt="Upskill" style={{ height: "100px", width: "100px", left: "150px" }} />
          </div>
          <div className="rectangle-box2">
            <div className="upskill-button">
                <div className="graph-icon"><img src="up1.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>More Time to Upskill:</b> Invest in yourself</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
            </div>
          </div>
        </div>
        <div className="large-box center">
          <img src="heroimage.png" alt="Focus Section" style={{ width: "240px", height: "350px" }} />
        </div>
        <div className="box-group top-right">
          <div className="small-box2">
            <img src="family-time.png" alt="Family Time" style={{ width: "100px", height: "100px" }} />
          </div>
  
          <div className="rectangle-box2">
            <div className="upskill-button">
                <div className="graph-icon"><img src="up2.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>Spend More Time with Family:</b> Prioritize what matters</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
            </div>
          </div>
        </div>
        <div className="box-group bottom-right">
          <div className="small-box3">
            <img src="vacation.png" alt="Vacation" style={{ width: "100px", height: "100px" }} />
          </div>

          <div className="rectangle-box2">
            <div className="upskill-button">
                <div className="graph-icon"><img src="up3.png" alt="up1" style={{width:"12px",height:"12px"}}/></div>
                <span className='txt'><b>Achieve Your Dream Vacation:</b> Make it a reality</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
            </div>
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
*/}
import React from 'react';
import './FocusSection.css';
import { Link } from 'react-router-dom';

const FocusSection = ({toggleFocusSection}) => {
  return (
    <>
    <div className='topdiv'></div>
    <div className='focusmater'>
        <h1 className='h1f' style={{color:"black",fontSize:"40px"}}>Focus on What - Truly Matters</h1>
        <p className='para' style={{fontSize:"20px"}}>Let <span className='heighlight'>InvestVidhi</span> handle your <span className='heighlight'>finances</span> while you focus on <span className='heighlight'>what truly matters</span>. Seamlessly <span className='heighlight'>grow your wealth</span> with us.</p>
    </div>
    <div className="container">
        <div className="box-group top-left">
          <div className="small-box1">
            <img src="upskill-image.png" alt="Upskill" style={{ height: "100px", width: "100px", left: "150px" }} />
          </div>
          <div className="rectangle-box2">
          <div className="upskill-button" style={{width:"254px",height:"25px"}}>
                <div className="graph-icon"><img src="up1.png" alt="up1" style={{width:"20px",height:"20px"}}/></div>
                <span className='txt' style={{fontSize:"12.5px"}}><b>More Time to Upskill:</b> Invest in yourself</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
          </div>
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
          <div className="upskill-button" style={{width:"350px",height:"25px"}}>
                <div className="graph-icon"><img src="up2.png" alt="up1" style={{width:"20px",height:"20px"}}/></div>
                <span className='txt' style={{fontSize:"12.5px"}}><b>Spend More Time with Family:</b> Prioritize what matters</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
          </div>
          </div>
        </div>
        <div className="box-group bottom-right">
          <div className="small-box3">
            <img src="vacation.png" alt="Vacation" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="rectangle-box1">
          <div className="upskill-button" style={{width:"300px",height:"25px"}}>
                <div className="graph-icon"><img src="up3.png" alt="up1" style={{width:"20px",height:"20px"}}/></div>
                <span className='txt' style={{fontSize:"12.5px"}}><b>Achieve Your Dream Vacation:</b> Make it a reality</span>
                <div className="arrow-icon"><img src="arrow.png" alt="up1" style={{width:"18px",height:"18px"}}/></div>
          </div>
          </div>
        </div>
      </div>

      <div className="bubble-slider">
                <img
                  src="bubble1.png"
                  className="bubblebutton"
                  style={{ width: '35.7px',height:'6.5px', cursor: 'pointer' }}
                  alt="Switch to FocusSection2"
                  onClick={toggleFocusSection}
                />
                <Link to="/loading" className="try-now-link">
                  {/*<img src="trynow.png" className="trynowbutton" alt="Try Now" style={{width:"80px"}}/>*/}
                  <div className='try-now-button' style={{width:"80px",padding:"3px",backgroundColor:" #ffffff",color:" #ff6600",border:"1px solid #ff6600"}}>Try Now
                    <img src="arrow-insert.png" style={{width:"15px",height:"15px"}}/>
                  </div>
                </Link>
      </div>
      <div className='bottomdiv'></div>
    </>
  );
};

export default FocusSection;
