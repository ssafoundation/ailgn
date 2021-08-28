import React from "react";
import FaqRight from "./faq/fag-bg.png";
import FaqAccordion from "./FaqAccordion";
const Faq = () => {
  return (
    <>
      <div className="faq-area de-padding">
        <div className="faq-wpr grid-2">
          <div className="faq-left faq-padding-left">
            <div className="site-title">
              <span className="about-sub-title">Questions &amp; Answer</span>
              <h2 className="about-title mb-0">
                Need anything to ask check
                <br />
                Asked Question
              </h2>
            </div>
            <FaqAccordion />
          </div>
          <div className="faq-right">
            <div className="faq-pic">
              <img src={FaqRight} alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
