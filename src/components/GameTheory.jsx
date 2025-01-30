{/*
import React from 'react';
import './GameTheory.css';
import { Link } from "react-router-dom";

const GameTheory = () => {
  return (
    <div className="game-theory-container">
      <div className="box" id="div1">
        <img src="GameTheoryBucket.png" alt="Bucket" className="small-image" />
        <img src="gametheorycontent.png" alt="Content" className="large-image" />
        <Link to="/loading" className="try-now-link">
          <img src="trynow.png" alt="Try Now" className="trynow-button" />
        </Link>
      </div>
      <div className="box" id="div2">
        <img src="gametheoryimage.png" alt="Game Theory" className="game-image" />
      </div>
    </div>
  );
};

export default GameTheory;
*/}
import React from 'react';
import './GameTheory.css';
import { Link } from "react-router-dom";

const GameTheory = () => {
  return (
    <div className="game-theory-container">
      <div className="box" id="div1">
      <div className='focusmater' style={{width:"450px"}}>
        <h1 className='h1f' style={{color: "orangered",fontSize:"40px"}}>Game Theory Bucket</h1>
        <p className='para' style={{fontSize:"20px"}}>Invest confidently with 70% stable stalwarts for steady returns and 30% high-growth opportunities for dynamic gains, optimized through game theory for smart, balanced investing.</p>
      </div>
        
        {/*
        <Link to="/loading" className="try-now-link">
          <img src="trynow.png" alt="Try Now" className="trynow-button" />
        </Link>
        */}
        <Link to="/loading" className="try-now-link">
            {/*<img src="trynow.png" className="trynowbutton" alt="Try Now" style={{width:"80px"}}/>*/}
            <div className='try-now-button' style={{width:"80px",padding:"3px",backgroundColor:" #ffffff",color:" #ff6600",border:"1px solid #ff6600"}}>Try Now
                <img src="arrow-insert.png" style={{width:"15px",height:"15px"}}/>
            </div>
        </Link>

      </div>
      <div className="box" id="div2">
        <img src="gametheoryimage.png" alt="Game Theory" className="game-image" />
      </div>
    </div>
  );
};

export default GameTheory;
