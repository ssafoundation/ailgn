import React from "react";
import breadcrumb from "../breadcrumb/breadcrumb.png";
const ServiceSingleBreadcrumb = () => {
  return (
    <div>
      <div
        className="site-breadcrumb"
        style={{ background: `url(${breadcrumb})` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Service Details</h2>
          <ul className="breadcrumb-menu clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">Service Details</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleBreadcrumb;
