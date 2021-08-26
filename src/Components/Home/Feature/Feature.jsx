import React from "react";
import checked from "../../assets/icons/checked.png";
import consult from "../../assets/icons/consult.png";
import iconOne from "../../assets/icons/man.png";
import rating from "../../assets/icons/rating.png";

const Feature = () => {
  return (
    <>
      <div className="feature-area">
        <div className="container">
          <div className="feature-wpr grid-4">
            <div className="feature-box">
              <div className="feature-icon">
                <img src={iconOne} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Great Team</h5>
                <p className="mb-0">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <img src={checked} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Trusted Agency</h5>
                <p className="mb-0">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <img src={rating} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Top Rated Work</h5>
                <p className="mb-0">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <img src={consult} alt="thumb" />
              </div>
              <div className="feature-info">
                <h5>Support Alltime</h5>
                <p className="mb-0">
                  According to lorem ipsum dolo siti ameat dui too consecteture
                  consecteture elite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
