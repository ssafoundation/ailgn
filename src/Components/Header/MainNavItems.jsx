import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainNavItems = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  useEffect(() => {
    setDropdown(false);
    setDropdown2(false);
    setDropdown3(false);
  }, [toggle]);

  return (
    <>
      <div className="mainNavbar_wrap">
        <div className="menuToggle" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <div className="navbar_mobile_close remove">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className=" navbar_mobile_menu_bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
        <nav
          className={
            toggle ? "navbar_mobile_menu show" : "navbar_mobile_menu hide"
          }
        >
          <div className="ttt">
            <span>
              <i className="icofont-ui-call mr-2" />
              Call us-(+00) 1234 678 77
            </span>
          </div>
          <ul>
            <li
              className="navDropdown"
              onClick={() => {
                setDropdown2(!dropdown2);
                setDropdown(false);
                setDropdown3(false);
              }}
            >
              <Link to="/">Home +</Link>
              <ul
                className={
                  dropdown2
                    ? "navbar_mobile_dropdown show"
                    : "navbar_mobile_dropdown hide"
                }
              >
                <li>
                  <Link className="nav-link" to="/">
                    Home version 1
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/home-version2">
                    Home version 2
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
            <li
              className="navDropdown"
              onClick={() => {
                setDropdown(!dropdown);
                setDropdown2(false);
                setDropdown3(false);
              }}
            >
              <Link className="nav-link" to="/">
                Pages +
              </Link>
              <ul
                className={
                  dropdown
                    ? "navbar_mobile_dropdown show"
                    : "navbar_mobile_dropdown hide"
                }
              >
                <li className="nav-item">
                  <Link className="nav-link" to="service">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="service-single">
                    Service Single
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="our-project">
                    Our Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="project-single">
                    Project Single
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="our-team">
                    Our Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="404">
                    404
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className="navDropdown"
              onClick={() => {
                setDropdown3(!dropdown3);
                setDropdown2(false);
                setDropdown(false);
              }}
            >
              <Link className="nav-link" to="/">
                Blog +
              </Link>
              <ul
                className={
                  dropdown3
                    ? "navbar_mobile_dropdown show"
                    : "navbar_mobile_dropdown hide"
                }
              >
                <li className="nav-item">
                  <Link className="nav-link" to="blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="blog-details">
                    Blog Details
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link to="contact" className="contact_btn">
                Contact Us
                <i className="icofont-long-arrow-right" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainNavItems;
