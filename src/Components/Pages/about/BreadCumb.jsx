import React from "react";
import BreadcrumbBg from "../breadcrumb/breadcrumb.png";
const BreadCumb = () => {
  return (
    <>
      {/* Start Breadcrumb
		============================================= */}
      <div
        className="site-breadcrumb"
        style={{ background: `url(${BreadcrumbBg})` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">About Us</h2>
          <ul className="breadcrumb-menu clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">About</li>
          </ul>
        </div>
      </div>
      {/* End  Breadcrumb */}
    </>
  );
};

export default BreadCumb;
