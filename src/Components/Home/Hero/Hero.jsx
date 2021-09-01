import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import "./Hero.css";
import HeroOne from "./img/hdr-1.png";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div id="home" className="hero-section">
        <div className="hero-sliderr">
          <div
            className="hero-single"
            style={{ backgroundImage: `url(${HeroOne})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <div className="hero-content text-center">
                    <span className="top-title">A Digital Design Agency</span>
                    <h2>
                      Creative &amp; Inteligents People help <br /> Growing
                      Business.
                    </h2>
                    <p>
                      Lorem ipsum dolor consecteture elite we’re a creative
                      digitalyour business growing we’re a creative digitalyour
                      business growing up.
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
              </div>
            </div>
          </div>
          {/* single Slider End */}
        </div>
      </div>
    </>
  );
};

export default Hero;
