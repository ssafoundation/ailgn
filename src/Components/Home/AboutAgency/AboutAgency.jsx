import React from "react";
import { Link } from "react-router-dom";
import aboutOne from "./about/about-1.png";
import Counter from "./Counter";

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
              <Counter />
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
