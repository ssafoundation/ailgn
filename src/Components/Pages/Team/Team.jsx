import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TeamBreadcrumb from "./TeamBreadcrumb";
import TeamPerson from "./TeamPerson";

const Team = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <TeamBreadcrumb />
      <TeamPerson />
    </div>
  );
};

export default Team;
