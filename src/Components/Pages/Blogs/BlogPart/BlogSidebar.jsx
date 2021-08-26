import React from "react";
const bSidebar = [
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
];
const BlogSidebar = () => {
  return (
    <>
      <aside className="sidebar">
        {/*Search*/}
        <div className="sidebar-widget search">
          <form>
            <input type="text" placeholder="Search" />
            <button className="sub-btn">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        {/*Categories*/}
        <div className="sidebar-widget cate">
          <h4 className="widget-title">Case Category</h4>
          <ul>
            <li>
              <a href="#">
                Business Planing &amp; Consulting
                <span>09</span>
              </a>
            </li>
            <li>
              <a href="#">
                Financial Planing
                <span>12</span>
              </a>
            </li>
            <li>
              <a href="#">
                Digital &amp; Social Marketing
                <span>06</span>
              </a>
            </li>
            <li>
              <a href="#">
                Web &amp; Graphic Design
                <span>13</span>
              </a>
            </li>
            <li>
              <a href="#">
                Consulting
                <span>11</span>
              </a>
            </li>
            <li>
              <a href="#">
                Startup Business Help
                <span>03</span>
              </a>
            </li>
          </ul>
        </div>
        {/*Recent Post*/}
        <div className="sidebar-widget recent-post">
          <h4 className="widget-title">Recent Post</h4>
          <div className="recent-post-content">
            {bSidebar.map((blogSidebar, i) => (
              <div key={i} className="recent-post-single">
                <div className="recent-post-img">
                  <img
                    src={require(`./img/${blogSidebar.img}`).default}
                    alt="thumb"
                  />
                </div>
                <div className="recent-post-info">
                  <span>12 September 2021</span>
                  <h5>Lorem ipsum dolor sit amet Lorem ipsum</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogSidebar;
