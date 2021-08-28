import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Blog from "../../Home/Blog/Blog";
import AboutFeedback from "../about/AboutFeedback";
import About2 from "./About2/About2";
import AboutAgency2 from "./AboutAgency2/AboutAgency2";
import Agency2 from "./Agency2/Agency2";
import CaseStudy from "./CaseStudy/CaseStudy";
import Faq2 from "./Faq2/Faq2";
import FeatureService from "./FeatureService/FeatureService";
import Footer2 from "./Footer2/Footer2";
import Header2 from "./Header2/Header2";
import Hero2 from "./Hero2/Hero2";
import NewsLatter2 from "./NewsLatter2/NewsLatter2";
import Service2 from "./Services2/Service2";

const HomeTow = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header2 />
      <Hero2 />
      <Agency2 />
      <About2 />
      <Service2 />
      <FeatureService />
      <AboutFeedback />
      <Faq2 />
      <CaseStudy />
      <AboutAgency2 />
      <Blog />
      <NewsLatter2 />
      <Footer2 />
    </div>
  );
};

export default HomeTow;
