import React from "react";
const bComments = [
  {
    id: 1,
    img: "de-user-1.png",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
  {
    id: 2,
    img: "de-user-2.png",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
  {
    id: 3,
    img: "de-user-3.png",
    title: "Financial Aduting & Planning for Business Started.",
    author: "Philip Hobs",
    date: "02feb,2021",
  },
];
const BlogSingleComments = () => {
  return (
    <>
      <div className="blog-single-comment">
        <h4 className="single-user-title">All Comments</h4>
        <div className="blog-single-comment-wpr mb-50">
          {bComments.map((bComment, i) => (
            <div key={i} className="blog-single-single">
              <div className="blog-single-single-pic">
                <img
                  src={require(`./img/${bComment.img}`).default}
                  alt="thumb"
                />
              </div>
              <div className="blog-single-single-bio">
                <h5 className="d-flex align-items-center justify-content-between">
                  Mickel Philip
                  <a href="#/" className="reply">
                    Reply <i className="icofont-long-arrow-right" />
                  </a>
                </h5>
                <span>02 May, 2021</span>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  eeiusmodtempor magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-user-comment">
          <h4 className="single-user-title">Submite Your Comments</h4>
          <form className="row g-5">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control input-style-2"
                placeholder="Your Name"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control input-style-2"
                placeholder="Your Email"
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control input-style-2"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="theme-btn">
                Submite Comments
                <i className="icofont-long-arrow-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogSingleComments;
