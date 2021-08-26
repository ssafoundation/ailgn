import React from "react";

const ProjectSingleSidebar = () => {
  return (
    <>
      <aside className="sidebar">
        {/*Work Details*/}
        <div className="sidebar-widget project">
          <h4 className="w-title">Project Details</h4>
          <ul className="w-title-list">
            <li>Date : 11/10/2021</li>
            <li>Skills Needed : Html/CSS/Wordpress</li>
            <li>Technologies : Adobe Phtoshop CC</li>
            <li>Live Project : www.clientscom</li>
            <li>Created By : Philip Hobs</li>
            <li>Client Name : Crist Deo</li>
            <li>Project Type : Development</li>
          </ul>
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
            <div className="recent-post-single">
              <div className="recent-post-img">
                <img src="assets/img/singlepost/r-post.png" alt="thumb" />
              </div>
              <div className="recent-post-info">
                <h5>Lorem ipsum dolor sit amet Lorem ipsum</h5>
              </div>
            </div>
            <div className="recent-post-single">
              <div className="recent-post-img">
                <img src="assets/img/singlepost/r-post.png" alt="thumb" />
              </div>
              <div className="recent-post-info">
                <h5>Lorem ipsum dolor sit amet Lorem ipsum</h5>
              </div>
            </div>
            <div className="recent-post-single">
              <div className="recent-post-img">
                <img src="assets/img/singlepost/r-post.png" alt="thumb" />
              </div>
              <div className="recent-post-info">
                <h5>Lorem ipsum dolor sit amet Lorem ipsum</h5>
              </div>
            </div>
            <div className="recent-post-single">
              <div className="recent-post-img">
                <img src="assets/img/singlepost/r-post.png" alt="thumb" />
              </div>
              <div className="recent-post-info">
                <h5>Lorem ipsum dolor sit amet Lorem ipsum</h5>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProjectSingleSidebar;
