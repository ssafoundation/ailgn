import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import AboutIconOne from "../../assets/icons/1.png";
import AboutIconTwo from "../../assets/icons/2.png";
import feedback from "../../assets/icons/feedback.png";
import aboutOne from "./about/about-1.png";
const AboutAgency = () => {
  return (
    <>
      <div className="about-area de-padding">
        <div className="about-wpr grid-2">
          <div className="about-left">
            <div className="about-img">
              <img src={aboutOne} alt="thumb" />
            </div>
          </div>
          <div className="about-right about-padding-right">
            <span className="about-sub-title">About Agency</span>
            <h2 className="about-title">
              A helping hand agency <br /> for your business
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              seieiusmoed dui too consecteture elite more.According to ipsum
              dolor seat ameat consecteture elite.
            </p>
            <div className="about-fact grid-3">
              <div className="fun-fact">
                <span className="fun-icon">
                  <img src={AboutIconOne} alt="thumb" />
                  <CountUp
                    className="timer"
                    start={0}
                    end={2382}
                    duration={3}
                  />
                </span>
                <div className="fun-desc">
                  <span className="medium">Project Completed</span>
                </div>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">
                  <img src={AboutIconTwo} alt="thumb" />
                  <CountUp
                    className="timer"
                    start={0}
                    end={19382}
                    duration={3}
                  />
                </span>
                <div className="fun-desc">
                  <span className="medium">Working Hours</span>
                </div>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">
                  <img src={feedback} alt="thumb" />
                  <CountUp
                    className="timer"
                    start={0}
                    end={2086}
                    duration={3}
                  />
                </span>
                <div className="fun-desc">
                  <span className="medium">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="about-btn mt-60">
              <Link to="our-project" className="theme-btn">
                Explore More <i className="icofont-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAgency;
