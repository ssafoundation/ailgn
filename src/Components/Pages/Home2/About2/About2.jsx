import React from "react";
import { Link } from "react-router-dom";
import about2Left from "./img/about-3.png";
const About2 = () => {
  return (
    <div>
      <div className="about-2 de-padding">
        <div className="container">
          <div className="about-2-wpr grid-2">
            <div className="about-2-left">
              <div className="about-2-pic">
                <img src={about2Left} alt="thumb" />
              </div>
            </div>
            <div className="about-2-right">
              <span className="about-sub-title">Agency Features</span>
              <h2 className="about-title mb-50">
                A helping hand agency <br /> for Business
              </h2>
              <p className="mb-30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                seieiusmoed dui too consecteture elite more.According to ipsum
                dolor seat ameat consecteture elite.
              </p>
              <ul className="about-list mb-50">
                <li>
                  <i className="icofont-check-circled" />
                  Great Support Team alltime Active
                </li>
                <li>
                  <i className="icofont-check-circled" />
                  Marketing Research Team
                </li>
                <li>
                  <i className="icofont-check-circled" />
                  Business Analysis &amp; Marketing
                </li>
              </ul>
              <Link to="our-project" className="theme-btn">
                Get Started <i className="icofont-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
