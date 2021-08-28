import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header1 from "../../Header/Header1";
import Newsletter from "../../Home/Newsletter/Newsletter";
import "./Team.css";
import TeamBreadcrumb from "./TeamBreadcrumb";
import TeamPerson from "./TeamPerson";

const Team = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header1 />
      <main className="team__main_wrap">
        <TeamBreadcrumb />
        <TeamPerson />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
