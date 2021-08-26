import React from "react";
import breadcrumb from "../breadcrumb/breadcrumb.png";
const ProjectBreadcrumb = () => {
  return (
    <div>
      <div
        className="site-breadcrumb"
        style={{ background: `url(${breadcrumb})` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">case study</h2>
          <ul className="breadcrumb-menu clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">case</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectBreadcrumb;
