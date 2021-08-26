import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Newsletter from "../../../Home/Newsletter/Newsletter";
import "./ProjectSingle.css";
import ProjectSingleBreadcrumb from "./ProjectSingleBreadcrumb";
import ProjectSingleDetails from "./ProjectSingleDetails";

const ProjectSingle = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <main className="project__single_main_wrap">
        <ProjectSingleBreadcrumb />
        <ProjectSingleDetails />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectSingle;
