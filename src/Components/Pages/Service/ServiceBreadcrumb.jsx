import React from "react";
import breadcrumb from "../breadcrumb/breadcrumb.png";
const ServiceBreadcrumb = () => {
  return (
    <div>
      <div
        className="site-breadcrumb"
        style={{ background: `url(${breadcrumb})` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Our Service</h2>
          <ul className="breadcrumb-menu clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceBreadcrumb;
