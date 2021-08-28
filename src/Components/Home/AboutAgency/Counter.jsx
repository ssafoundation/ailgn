import React from "react";
import CountUp from "react-countup";
import AboutIconOne from "../../assets/icons/1.png";
import AboutIconTwo from "../../assets/icons/2.png";
import feedback from "../../assets/icons/feedback.png";
const Counter = () => {
  return (
    <>
      <div className="fun-fact">
        <span className="fun-icon">
          <img src={AboutIconOne} alt="thumb" />
          <CountUp className="timer" start={0} end={2382} duration={3} />
        </span>
        <div className="fun-desc">
          <span className="medium">Project Completed</span>
        </div>
      </div>
      <div className="fun-fact">
        <span className="fun-icon">
          <img src={AboutIconTwo} alt="thumb" />
          <CountUp className="timer" start={0} end={19382} duration={3} />
        </span>
        <div className="fun-desc">
          <span className="medium">Working Hours</span>
        </div>
      </div>
      <div className="fun-fact">
        <span className="fun-icon">
          <img src={feedback} alt="thumb" />
          <CountUp className="timer" start={0} end={2086} duration={3} />
        </span>
        <div className="fun-desc">
          <span className="medium">Happy Clients</span>
        </div>
      </div>
    </>
  );
};

export default Counter;
