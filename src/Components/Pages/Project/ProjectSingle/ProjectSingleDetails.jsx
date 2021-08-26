import React from "react";
import ProjectSingleBody from "./ProjectSingleBody";
import ProjectSingleSidebar from "./ProjectSingleSidebar";

const ProjectSingleDetails = () => {
  return (
    <div>
      <div className="single-area de-padding">
        <div className="container">
          <div className="single-page-info snp">
            <ProjectSingleSidebar />
            <ProjectSingleBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleDetails;
