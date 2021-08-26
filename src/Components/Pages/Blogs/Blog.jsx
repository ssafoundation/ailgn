import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Newsletter from "../../Home/Newsletter/Newsletter";
import BlogBreadCrumb from "./BlogBreadCrumb";
import BlogPostItems from "./BlogPart/BlogPostItems";
import BlogSidebar from "./BlogPart/BlogSidebar";
import "./Blogs.css";

const Blog = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <main className="blog__main_wrap">
        <BlogBreadCrumb />
        <div className="single-area de-padding">
          <div className="container">
            <div className="single-page-info">
              <BlogSidebar />
              <BlogPostItems />
            </div>
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
