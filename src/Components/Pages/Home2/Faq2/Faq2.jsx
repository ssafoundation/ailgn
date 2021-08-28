import React from "react";
import FaqAccordion from "../../../Home/FAQ/FaqAccordion";
import faqImage from "./img/review-pic-2.jpg";
const Faq2 = () => {
  return (
    <div>
      <div className="faq-2-area">
        <div className="container">
          <div className="faq-2-wpr grid-2">
            <div className="faq-2-left">
              <span className="about-sub-title">Question &amp; Answer</span>
              <h2 className="about-title mb-60">
                If You need Any Other Info <br /> Check Our FAQ,s
              </h2>
              <p className="mb-50">
                Lorem ipsum dolor seat ameat dui too consecteture elite more
                occopassional works.A consulting agency are highly trying to
                them to their clients.
              </p>
              <div className="faq-2-pic">
                <img src={faqImage} alt="thumb" />
              </div>
            </div>
            <div className="faq-2-right">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
