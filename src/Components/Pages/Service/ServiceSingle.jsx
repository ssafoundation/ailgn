import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Newsletter from "../../Home/Newsletter/Newsletter";
import "./ServiceSingle.css";
import ServiceSingleBlog from "./ServiceSingleBlog";
import ServiceSingleBreadcrumb from "./ServiceSingleBreadcrumb";
const ServiceSingle = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <main className="service__single__main_wrap">
        <ServiceSingleBreadcrumb />
        <ServiceSingleBlog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceSingle;
