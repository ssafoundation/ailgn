import React from "react";
import { Link } from "react-router-dom";
const services = [
  {
    icon: "3.png",
    title: "Web Development",
    content:
      "According to lorem ipsum dolo siti ameat dui too consecteture consecteture elite.",
  },
  {
    icon: "4.png",
    title: "Graphic Design",
    content:
      "According to lorem ipsum dolo siti ameat dui too consecteture consecteture elite.",
  },
  {
    icon: "5.png",
    title: "Digital Marketing",
    content:
      "According to lorem ipsum dolo siti ameat dui too consecteture consecteture elite.",
  },
];
const WhatAre = () => {
  return (
    <>
      <div className="what-area de-pb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title text-center">
                <span className="about-sub-title">What We Do</span>
                <h2 className="about-title mb-0">
                  We Providing Some Special Services
                  <br />
                  To our Clients.
                </h2>
              </div>
            </div>
          </div>
          <div className="what-wpr grid-3">
            {services.map((service, i) => (
              <div className="what-box">
                <div className="what-icon">
                  <img
                    src={require(`./img/${service.icon}`).default}
                    alt="thumb"
                  />
                </div>
                <div className="what-info">
                  <h5>{service.title}</h5>
                  <p>{service.content}</p>
                  <Link to="service-single" className="what-btn">
                    Explore Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="what-footer mt-60">
            <h5 className="mb-0">
              If you have any project or task for us Please
              <Link to="contact">Contact Us</Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatAre;
