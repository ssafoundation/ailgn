import React from "react";
import breadcrumb from "../../breadcrumb/breadcrumb.png";
const BlogSIngleBreadcrumb = () => {
  return (
    <>
      <div
        className="site-breadcrumb"
        style={{ background: `url(${breadcrumb})` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Blog Details</h2>
          <ul className="breadcrumb-menu clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">Blog</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSIngleBreadcrumb;
