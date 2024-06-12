import React from 'react';
import './Backgroundimg.css';

function Backgroundimg() {
  return (
    <div className="background-container">
      <div className="overlay"></div>

      <div className="text-container">
        <div className="content1">
          <span className="caption">Good Morning</span>

          <h1 className="h1 hero-stageheading">
            It all starts with a NESCAFÉ<sup>®</sup>
          </h1>

          <p>
            There are times when we need that little extra push, and the bold taste of our finely roasted coffee beans gives you precisely that. Then the day is yours to seize.
          </p>

          <div className="button">
            <span className="button-text">Explore our Range of Coffee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backgroundimg;
