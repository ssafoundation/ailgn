import React from "react";
import { Link } from "react-router-dom";
import Counter from "../../../Home/AboutAgency/Counter";
import aboutRightImg from "./img/about-3.png";
const AboutAgency2 = () => {
  return (
    <>
      <div className="about-area de-pt">
        <div className="container">
          <div className="about-wpr as grid-2">
            <div className="about-right">
              <span className="about-sub-title">About Agency</span>
              <h2 className="about-title">
                A helping hand agency <br /> for Business
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
            <div className="about-left">
              <div className="about-img">
                <img src={aboutRightImg} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAgency2;
