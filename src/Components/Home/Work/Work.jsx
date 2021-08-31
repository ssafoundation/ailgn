import React from "react";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import WorkOne from "./img/1.png";
import WorkTwo from "./img/2.png";
import WorkThree from "./img/3.png";
import WorkFour from "./img/4.png";
import WorkFive from "./img/5.png";
import WorkSix from "./img/6.png";
import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="work-area de-pb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title text-center">
                <span className="about-sub-title">Protfolio</span>
                <h2 className="about-title mb-0">
                  Recently done case study by our
                  <br />
                  inteligents team
                </h2>
              </div>
            </div>
          </div>
          <div className="work-wpr magnific-mix-gallery">
            <div className="work-grid-1 mb-30">
              <ModalImage
                className="work-pic work-pic-1"
                hideDownload
                hideZoom
                small={WorkOne}
                large={WorkOne}
                alt=""
              />
              <ModalImage
                className="work-pic work-pic-2"
                hideDownload
                hideZoom
                small={WorkTwo}
                large={WorkTwo}
                alt=""
              />{" "}
              <ModalImage
                className="work-pic work-pic-3"
                hideDownload
                hideZoom
                small={WorkThree}
                large={WorkThree}
                alt=""
              />
            </div>
            <div className="work-grid-2 grid-3">
              <ModalImage
                className="work-pic work-pic-4"
                hideDownload
                hideZoom
                small={WorkFour}
                large={WorkFour}
                alt=""
              />{" "}
              <ModalImage
                className="work-pic work-pic-5"
                hideDownload
                hideZoom
                small={WorkFive}
                large={WorkFive}
                alt=""
              />{" "}
              <ModalImage
                className="work-pic work-pic-6"
                hideDownload
                hideZoom
                small={WorkSix}
                large={WorkSix}
                alt=""
              />
            </div>
          </div>
          <div className="work-btn text-center mt-70">
            <Link to="our-project" className="theme-btn">
              Explore More <i className="icofont-long-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
