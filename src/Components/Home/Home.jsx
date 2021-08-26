import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import AboutAgency from "./AboutAgency/AboutAgency";
import Blog from "./Blog/Blog";
import Faq from "./FAQ/Faq";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import Review from "./Review/Review";
import WhatAre from "./WhatAreWeDo/WhatAre";
import Work from "./Work/Work";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <main>
        <Hero />
        <Feature />
        <AboutAgency />
        <WhatAre />
        <Faq />
        <Work />
        <Newsletter />
        <Blog />
        <Review />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
