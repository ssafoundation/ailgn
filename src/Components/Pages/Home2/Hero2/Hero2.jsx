import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import hero2Right from "./img/hdr-3.png";
import hero2Bg from "./img/header-2.png";
const Hero2 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div id="home" className="hero-section">
        <div className="hero-sliderr">
          <div
            className="hero-single home-2"
            style={{ backgroundImage: `url(${hero2Bg})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="hero-content">
                    <span className="top-title">
                      Business Consulting Agency
                    </span>
                    <h2>We’re Help Growing Your Business.</h2>
                    <p>
                      Lorem ipsum dolor consecteture elite we’re a creative
                      digital your business growing up.
                    </p>
                    <div className="hro-btn">
                      <Link to="service" className="theme-btn">
                        Explore More <i className="icofont-long-arrow-right" />
                      </Link>
                      <div className="how-we-work">
                        <ModalVideo
                          className="item popup-youtube"
                          channel="youtube"
                          isOpen={isOpen}
                          videoId="L61p2uyiMSo"
                          onClose={() => setOpen(false)}
                        />
                        <button onClick={() => setOpen(true)}>
                          <i className="fas fa-play" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="hero-right-pic">
                    <img src={hero2Right} alt="thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
