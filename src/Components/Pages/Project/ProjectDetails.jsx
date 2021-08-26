import React from "react";
import ProjectDetailsMain from "./ProjectDetailsParts/ProjectDetailsMain";
import ProjectDetailsSidebar from "./ProjectDetailsParts/ProjectDetailsSidebar";

const ProjectDetails = () => {
  return (
    <div>
      <div className="single-area de-padding">
        <div className="container">
          <div className="single-page-info">
            <ProjectDetailsSidebar />
            <ProjectDetailsMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
