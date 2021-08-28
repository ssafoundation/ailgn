import React from "react";
import service2Bg from "./img/bg-1.png";
const Service2 = () => {
  return (
    <div>
      <div
        className="service-area de-padding"
        style={{ backgroundImage: `url(${service2Bg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title text-center">
                <span className="about-sub-title">Services</span>
                <h2 className="about-title mb-0">
                  We Providing Some Special Services
                  <br />
                  To Our Clients.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
