import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header1 from "../../Header/Header1";
import Newsletter from "../../Home/Newsletter/Newsletter";
import "./Service.css";
import ServiceBreadcrumb from "./ServiceBreadcrumb";
import ServiceItems from "./ServiceItems";

const Service = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header1 />
      <main className="service__main_wrap">
        <ServiceBreadcrumb />
        <ServiceItems />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Service;
