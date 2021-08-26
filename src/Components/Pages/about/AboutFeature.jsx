import React from "react";
import iconTwo from "../../assets/icons/checked.png";
import iconFour from "../../assets/icons/consult.png";
import iconOne from "../../assets/icons/man.png";
import iconThree from "../../assets/icons/rating.png";
const AboutFeature = () => {
  return (
    <>
      <div className="feature-areag de-pt">
        <div className="container">
          <div className="feature-wpr feature-2 grid-2">
            <div className="feature-left">
              <span className="about-sub-title">Agency Features</span>
              <h2 className="about-title mb-50">
                Consulting firm focused <br /> clients happiness.
              </h2>
              <p className="mb-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, seieiu
                elitesi tempor is exercitation ullamco laboris. Lorem ipsum
                dolor seat ameat dui too consecteture elite.
              </p>
              <a href="#/" className="theme-btn">
                Get Started <i className="icofont-long-arrow-right" />
              </a>
            </div>
            <div className="feature-right grid-2">
              <div className="feature-box">
                <div className="feature-icon">
                  <img src={iconOne} alt="thumb" />
                </div>
                <div className="feature-info">
                  <h5>Great Team</h5>
                  <p className="mb-0">
                    According to lorem ipsum dolor sit consecteture elite.
                  </p>
                </div>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <img src={iconTwo} alt="thumb" />
                </div>
                <div className="feature-info">
                  <h5>Trusted Agency</h5>
                  <p className="mb-0">
                    According to lorem ipsum dolor sit consecteture elite.
                  </p>
                </div>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <img src={iconThree} alt="thumb" />
                </div>
                <div className="feature-info">
                  <h5>Top Rated Agency</h5>
                  <p className="mb-0">
                    According to lorem ipsum dolor sit consecteture elite.
                  </p>
                </div>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <img src={iconFour} alt="thumb" />
                </div>
                <div className="feature-info">
                  <h5>Support Alltime</h5>
                  <p className="mb-0">
                    According to lorem ipsum dolor sit consecteture elite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFeature;
