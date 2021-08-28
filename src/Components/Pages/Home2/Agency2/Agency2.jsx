import React from "react";
import { Link } from "react-router-dom";
const features = [
  {
    img: "man.png",
    title: "Great Team",
    text: "According to lorem ipsum dolor sit consecteture elite.",
  },
  {
    img: "checked.png",
    title: "Great Team",
    text: "According to lorem ipsum dolor sit consecteture elite.",
  },
  {
    img: "rating.png",
    title: "Great Team",
    text: "According to lorem ipsum dolor sit consecteture elite.",
  },
  {
    img: "consult.png",
    title: "Great Team",
    text: "According to lorem ipsum dolor sit consecteture elite.",
  },
];
const Agency2 = () => {
  return (
    <div>
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
              <Link to="contact" className="theme-btn">
                Get Started <i className="icofont-long-arrow-right" />
              </Link>
            </div>
            <div className="feature-right grid-2">
              {features.map((feature, i) => (
                <div key={i} className="feature-box">
                  <div className="feature-icon">
                    <img
                      src={require(`./img/${feature.img}`).default}
                      alt="thumb"
                    />
                  </div>
                  <div className="feature-info">
                    <h5>{feature.title}</h5>
                    <p className="mb-0">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency2;
