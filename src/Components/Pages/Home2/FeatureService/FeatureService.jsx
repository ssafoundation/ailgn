import React from "react";
import { Link } from "react-router-dom";
import iconOne from "./img/3.png";
import iconTwo from "./img/4.png";
import iconFour from "./img/5.png";
import iconThree from "./img/analysis.png";
const FeatureService = () => {
  return (
    <>
      <div className="feature-service">
        <div className="container">
          <div className="feature-wpr grid-4">
            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconOne} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Business Analysis</h5>
                <p className="mb-40">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link to="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconTwo} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Financial Planning</h5>
                <p className="mb-40">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link to="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconThree} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Business Research</h5>
                <p className="mb-40">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link to="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconFour} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Digital Marketing</h5>
                <p className="mb-40">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link to="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureService;
