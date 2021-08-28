import React from "react";
import { Link } from "react-router-dom";
import caseImageOne from "./img/7.jpg";
import caseImageTwo from "./img/8.jpg";
import caseImageThree from "./img/9.jpg";
const CaseStudy = () => {
  return (
    <div>
      <div className="case-area de-pt">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title text-center">
                <span className="about-sub-title">Case Study</span>
                <h2 className="about-title mb-0">
                  Recently Some Cases Done by Our
                  <br />
                  Agency Team
                </h2>
              </div>
            </div>
          </div>
          <div className="case-wpr grid-3">
            <div className="case-box">
              <div className="case-pic">
                <img src={caseImageOne} alt="thumb" />
              </div>
              <div className="case-info">
                <span className="d-block l-h-1 fz-16 mb-20">
                  Business / Business Analysis
                </span>
                <Link to="project-single">
                  <h5 className="mb-0 fz-20 l-h-1">
                    Business Ananlysis &amp; Strategy
                  </h5>
                </Link>
              </div>
            </div>
            <div className="case-box">
              <div className="case-pic">
                <img src={caseImageTwo} alt="thumb" />
              </div>
              <div className="case-info">
                <span className="d-block l-h-1 fz-16 mb-20">
                  Business / Business Analysis
                </span>
                <Link to="project-single">
                  <h5 className="mb-0 fz-20 l-h-1">
                    Business Ananlysis &amp; Strategy
                  </h5>
                </Link>
              </div>
            </div>
            <div className="case-box">
              <div className="case-pic">
                <img src={caseImageThree} alt="thumb" />
              </div>
              <div className="case-info">
                <span className="d-block l-h-1 fz-16 mb-20">
                  Business / Business Analysis
                </span>
                <Link to="project-single">
                  <h5 className="mb-0 fz-20 l-h-1">
                    Business Ananlysis &amp; Strategy
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="case-btn mt-60">
            <Link to="our-project" className="what-btn">
              Explore More <i className="icofont-long-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
