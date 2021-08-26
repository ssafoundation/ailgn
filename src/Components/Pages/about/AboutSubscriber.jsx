import React from "react";
import subscriber from "./img/bg.png";
import subscriberRight from "./img/sub-right.png";
const AboutSubscriber = () => {
  return (
    <>
      <div
        className="sub-area de-padding"
        style={{ backgroundImage: `url(${subscriber})` }}
      >
        <div className="container">
          <div className="sub-wpr grid-2">
            <div className="sub-left">
              <div className="site-title">
                <span className="about-sub-title wh">Newsletter</span>
                <h2 className="about-title wh mb-0">
                  To get Our Weekly &amp; Monthly News Subscribe Newsletter.
                </h2>
              </div>
              <form className="sub-form">
                <input
                  type="text"
                  placeholder="Your e-mail Address"
                  className="input-style-1"
                />
                <button type="submit" className="sub-btn hv btn-3">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="sub-right text-center">
              <img src={subscriberRight} alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSubscriber;
