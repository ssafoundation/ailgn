import React from "react";
import { Link } from "react-router-dom";
import iconOne from "../../assets/icons/3.png";
import iconTwo from "../../assets/icons/4.png";
import iconThree from "../../assets/icons/5.png";
import iconFour from "../../assets/icons/6.png";
import iconFive from "../../assets/icons/7.png";
import iconSix from "../../assets/icons/8.png";
const ServiceItems = () => {
  return (
    <div>
      <div className="what-area what-page de-pb">
        <div className="container">
          <div className="what-wpr grid-3">
            <div className="what-box">
              <div className="what-icon">
                <img src={iconOne} alt="thumb" />
              </div>
              <div className="what-info">
                <h5>Business Analysis</h5>
                <p>
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link href="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="what-box">
              <div className="what-icon">
                <img src={iconTwo} alt="thumb" />
              </div>
              <div className="what-info">
                <h5>Financial Planning</h5>
                <p>
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link href="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="what-box">
              <div className="what-icon">
                <img src={iconThree} alt="thumb" />
              </div>
              <div className="what-info">
                <h5>Digital Marketing</h5>
                <p>
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link href="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="what-box">
              <div className="what-icon">
                <img src={iconFour} alt="thumb" />
              </div>
              <div className="what-info">
                <h5>Business Consulting</h5>
                <p>
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link href="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="what-box">
              <div className="what-icon">
                <img src={iconFive} alt="thumb" />
              </div>
              <div className="what-info">
                <h5>Creative Design</h5>
                <p>
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link href="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
            <div className="what-box">
              <div className="what-icon">
                <img src={iconSix} alt="thumb" />
              </div>
              <div className="what-info">
                <h5>Email Marketing</h5>
                <p>
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
                <Link href="service-single" className="what-btn">
                  Explore Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
