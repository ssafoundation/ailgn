import React from "react";
import breadcrumb from "../breadcrumb/breadcrumb.png";
const ContactBreadcrumb = () => {
  return (
    <div>
      <div
        className="site-breadcrumb"
        style={{ background: `url(${breadcrumb})` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Contact Us</h2>
          <ul className="breadcrumb-menu clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactBreadcrumb;
