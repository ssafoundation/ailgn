import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainNavItems from "../../../Header/MainNavItems";
import logo from "./img/logo.png";
const Header2 = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, "/");
  }, [pathname]);
  return (
    <>
      <header className="header">
        <div className="main-navigation">
          <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src={logo} className="logo-display" alt="thumb" />
                <img src={logo} className="logo-scrolled" alt="thumb" />
              </Link>
              <div className="ttt">
                <span>
                  {" "}
                  <i className="icofont-ui-call mr-2" />
                  Call us-(+00) 1234 678 77
                </span>
              </div>
              <button className="navbar-toggler toggler-spring">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-sm-end">
                <MainNavItems />
              </div>
            </div>
          </div>
          <div className="bsnav-mobile">
            <div className="bsnav-mobile-overlay" />
            <div className="navbar" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
