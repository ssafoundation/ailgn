import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MainNavItems from "../../../Header/MainNavItems";
import logo from "./img/logo.png";
const Header2 = () => {
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, [scroll]);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, "/");
  }, [pathname]);
  return (
    <>
      <header
        className={scroll ? "header header2 sticky_header" : "header header2"}
      >
        <div className="main-navigation">
          <div className="">
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
        </div>
      </header>
    </>
  );
};

export default Header2;
