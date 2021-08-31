import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./img/logo.png";
import MainNavItems from "./MainNavItems";

const Header1 = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, [scroll]);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <header className={scroll ? "header sticky_header" : "header"}>
        <div className="main-navigation">
          <div className="container-xl container-lg container-fluid">
            <div className="header_main_area_wrap">
              <div className="header_inner_main_area_wrap">
                <Link className="navbar-brands" to="/">
                  <img src={logo} alt="thumb" />
                </Link>
                <MainNavItems />
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </header>
    </>
  );
};

export default Header1;
