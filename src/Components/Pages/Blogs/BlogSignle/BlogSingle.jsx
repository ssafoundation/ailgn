import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Header1 from "../../../Header/Header1";
import Newsletter from "../../../Home/Newsletter/Newsletter";
import BlogSidebar from "../BlogPart/BlogSidebar";
import "./BlogSingle.css";
import BlogSingleBody from "./BlogSingleBody";
import BlogSIngleBreadcrumb from "./BlogSIngleBreadcrumb";
import BlogSingleComments from "./BlogSingleComments";
const BlogSingle = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header1 />
      <main className="blog__single_main_wrap">
        <BlogSIngleBreadcrumb />
        <div className="single-area de-padding">
          <div className="container">
            <div className="single-page-info snp spg">
              <BlogSidebar />
              <div className="blog-single-info">
                <BlogSingleBody />
                <BlogSingleComments />
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default BlogSingle;
