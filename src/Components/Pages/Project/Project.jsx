import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Newsletter from "../../Home/Newsletter/Newsletter";
import "./Project.css";
import ProjectBreadcrumb from "./ProjectBreadcrumb";
import ProjectDetails from "./ProjectDetails";

const Project = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <main className="project_main_wrap">
        <ProjectBreadcrumb />
        <ProjectDetails />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Project;
