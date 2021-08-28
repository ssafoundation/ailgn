import React from "react";
import { Link } from "react-router-dom";
const BlogMain = [
  {
    id: 1,
    img: "1.jpg",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
  {
    id: 2,
    img: "2.jpg",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
  {
    id: 3,
    img: "3.jpg",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
];
const Blog = () => {
  return (
    <>
      <div className="blog-area de-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title text-center">
                <span className="about-sub-title">Blog</span>
                <h2 className="about-title mb-0">
                  See our Latest &amp; Popular Tips &amp; Tricks
                  <br />
                  from our Experts
                </h2>
              </div>
            </div>
          </div>
          <div className="blog-wpr grid-3">
            {BlogMain.map((blog, i) => (
              <div key={i} className="blog-box">
                <div className="blog-pic">
                  <img src={require(`./img/${blog.img}`).default} alt="thumb" />
                </div>
                <div className="blog-info">
                  <ul className="blog-meta">
                    <li>
                      <i className="icofont-user-alt-4" /> {blog.author}
                    </li>
                    <li>
                      <i className="icofont-clock-time" />
                      {blog.date}
                    </li>
                  </ul>
                  <Link to="blog-details">
                    <h5 className="blog-title">{blog.title}</h5>
                  </Link>
                  <Link to="blog-details" className="btn-4 hv">
                    <i className="icofont-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
