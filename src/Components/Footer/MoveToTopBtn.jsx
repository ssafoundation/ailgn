import React from "react";
import { MoveToTop } from "../../Helper/MoveToTop";
const MoveToTopBtn = () => {
  return (
    <>
      <span id="scrtop" onClick={MoveToTop} className="smooth-menu">
        <i className="ti-arrow-up"></i>
      </span>
    </>
  );
};

export default MoveToTopBtn;
