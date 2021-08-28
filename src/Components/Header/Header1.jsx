import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./img/logo.png";
import MainNavItems from "./MainNavItems";

const Header1 = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <button className="navbar-toggler toggler-spring">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-sm-end">
                <MainNavItems />
                <div className="header-serarch-btn">
                  <Link to="contact" className="btn-2">
                    Contact Us
                    <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bsnav-mobile">
            <div className="bsnav-mobile-overlay" />
            <div className="navbar" />
          </div>
        </div>
        <div className="clearfix"></div>
      </header>
    </>
  );
};

export default Header1;
