import React from "react";
import { Link } from "react-router-dom";
import imageBg from "./img/bg-2.png";
const NewsLatter2 = () => {
  return (
    <div>
      <div
        className="promo de-padding"
        style={{ backgroundImage: `url(${imageBg})` }}
      >
        <div className="container">
          <div className="promo-wpr">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7">
                <div className="promo-left">
                  <span className="about-sub-title">Contact Us</span>
                  <h2 className="about-title mb-0">
                    If You Have any Projects or Task for Us
                    <br />
                    Please Contact Us
                  </h2>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="promo-right">
                  <Link to="contact" className="theme-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter2;
