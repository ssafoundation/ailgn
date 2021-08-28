import React, { useRef } from "react";
import { Link } from "react-router-dom";

const MainNavItems = () => {
  const displayItem = useRef();
  const displayItem2 = useRef();
  const displayItem3 = useRef();
  const onHover = () => {
    displayItem.current.className = "navbar-nav in";
  };
  const onHover2 = () => {
    displayItem2.current.className = "navbar-nav in";
  };
  const onHover3 = () => {
    displayItem3.current.className = "navbar-nav in";
  };

  return (
    <>
      <ul className="navbar-nav navbar-mobile ml-auto">
        <li className="nav-item dropdown fadeup" onMouseOver={onHover}>
          <Link className="nav-link" to="/">
            Home <i className="caret ti-plus" />
          </Link>
          <ul className="navbar-nav " ref={displayItem}>
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
        <li className="nav-item dropdown fadeup" onMouseOver={onHover2}>
          <Link className="nav-link" to="/">
            Pages <i className="caret ti-plus" />
          </Link>
          <ul className="navbar-nav" ref={displayItem2}>
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
        <li className="nav-item dropdown fadeup" onMouseOver={onHover3}>
          <Link className="nav-link" to="/">
            Blog <i className="caret ti-plus" />
          </Link>
          <ul className="navbar-nav" ref={displayItem3}>
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
    </>
  );
};

export default MainNavItems;
