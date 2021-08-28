import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header1 from "../../Header/Header1";
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
      <Header1 />
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
