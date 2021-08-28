import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
const Header2 = () => {
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
                <ul className="navbar-nav navbar-mobile ml-auto">
                  <li className="nav-item dropdown fadeup">
                    <Link className="nav-link" to="/">
                      Home <i className="caret ti-plus" />
                    </Link>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="home-version1">
                          Home version 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/home-version2">
                          Home version 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown fadeup">
                    <Link className="nav-link" to="/">
                      Pages <i className="caret ti-plus" />
                    </Link>
                    <ul className="navbar-nav">
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
                  <li className="nav-item dropdown fadeup">
                    <Link className="nav-link" to="/">
                      Blog <i className="caret ti-plus" />
                    </Link>
                    <ul className="navbar-nav">
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
                  <li className="nav-item">
                    <Link className="nav-link" to="contact">
                      Contact
                    </Link>
                  </li>
                </ul>
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
