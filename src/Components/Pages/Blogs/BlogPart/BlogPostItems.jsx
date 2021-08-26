import React from "react";
import { Link } from "react-router-dom";
const Blogs = [
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
  {
    id: 4,
    img: "1.jpg",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
  {
    id: 5,
    img: "2.jpg",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
  {
    id: 6,
    img: "3.jpg",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
];
const BlogPostItems = () => {
  return (
    <>
      <div className="blog-pagination">
        <div className="blog-wpr grid-2">
          {Blogs.map((blog, i) => (
            <div key={i} className="blog-box blog-2">
              <div className="blog-pic">
                <img src={require(`./img/${blog.img}`).default} alt="thumb" />
              </div>
              <div className="blog-info">
                <Link to="blog">
                  <h5 className="blog-title">{blog.title}</h5>
                </Link>
                <ul className="blog-meta">
                  <li>
                    <i className="icofont-user-alt-4" /> {blog.author}
                  </li>
                  <li>
                    <i className="icofont-clock-time" />
                    {blog.date}
                  </li>
                </ul>
                <a href="single.html" className="fz-16-5">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-wrapper">
          <div className="pagination">
            <a className="prev page-numbers" href="javascript:;">
              prev
            </a>
            <span aria-current="page" className="page-numbers current">
              1
            </span>
            <a className="page-numbers" href="javascript:;">
              2
            </a>
            <a className="page-numbers" href="javascript:;">
              3
            </a>
            <a className="page-numbers" href="javascript:;">
              4
            </a>
            <a className="page-numbers" href="javascript:;">
              5
            </a>
            <a className="next page-numbers" href="javascript:;">
              next
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostItems;
