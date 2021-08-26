import React from "react";
import SingleBlogImg from "./img/de-blog.jpg";
const BlogSingleBody = () => {
  return (
    <>
      <div className="blog-single-header mb-50">
        <img src={SingleBlogImg} className="blog-single-pic" alt="thumb" />
        <h4 className="blog-single-title">
          Lorem ipsum dolor seat more Be elite. Accorfing to Business finan more
          be elite consecteture.
        </h4>
        <ul className="blog-single-meta mb-50">
          <li>
            <i className="icofont-user" />
            Philip Hobs
          </li>
          <li>
            <i className="icofont-clock-time" />
            02 February, 2021
          </li>
          <li>
            <i className="icofont-like" />
            60
          </li>
          <li>
            <i className="icofont-comment" />
            06
          </li>
          <li>
            <i className="icofont-eye-alt" />
            100
          </li>
        </ul>
        <div className="blog-single-text">
          <p className="mb-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmodtempincididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, inostrud pariaturExcepteur sint occaecat cupidatat
            eius modi tempora incidunt utlabore et dolore magnam aliquam quaerat
            voluptatem.
          </p>
          <p className="mb-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmodtempincididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, inostrud pariatconsecteure elite more be adipaiscing.
          </p>
          <blockquote className="b-qoute mb-50">
            Lorem ipsum dolor sit amet, consectetur
            adipisicieiusmodtempincididunt ut labore et dolore magna aliqua. Ut
            enim ad minim vepariaturExcepteur sint occaecat cupidatat eius modi
            tempora incidunt utlabore et dolore magnam aliquam quaerat
            voluptatem.
          </blockquote>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmodtempincididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, inostrud pariaturExcepteur sint occaecat cupidatat
            eius modi tempora incidunt utlabore et dolore magnam aliquam euaerat
            voluptatem..
          </p>
        </div>
      </div>
      <div className="blog-single-tag mb-50 d-flex align-items-center justify-content-between">
        <div className="blog-tag-links d-flex align-items-center">
          <h5 className="mb-0">Tags:</h5>
          <div className="blog-tag-link">
            <a href="#">Business,</a>
            <a href="#">Finance,</a>
            <a href="#">Consulting,</a>
            <a href="#">Planing</a>
          </div>
        </div>
        <ul className="footer-social">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
      <div className="blog-single-nxt-prev mb-130">
        <a href="#">
          <i className="icofont-arrow-left" />
        </a>
        <a href="#">
          <i className="icofont-arrow-right" />
        </a>
      </div>
    </>
  );
};

export default BlogSingleBody;
