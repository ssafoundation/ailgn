import React from "react";

const ProjectDetailsSidebar = () => {
  return (
    <>
      <aside className="sidebar">
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
      </aside>
    </>
  );
};

export default ProjectDetailsSidebar;
