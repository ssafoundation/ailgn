import React from "react";
import breadcrumb from "../../breadcrumb/breadcrumb.png";
const ProjectSingleBreadcrumb = () => {
  return (
    <div>
      <div
        className="site-breadcrumb"
        style={{ background: `url(${breadcrumb})` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Portfolio Details</h2>
          <ul className="breadcrumb-menu clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">Portfolio Details</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleBreadcrumb;
