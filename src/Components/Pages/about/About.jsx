import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useLocation } from "react-router-dom";
import iconOne from "../../assets/icons/1.png";
import iconTwo from "../../assets/icons/2.png";
import iconThree from "../../assets/icons/feedback.png";
import Footer from "../../Footer/Footer";
import Header1 from "../../Header/Header1";
import Newsletter from "../../Home/Newsletter/Newsletter";
import "./About.css";
import AboutFaq from "./AboutFaq";
import AboutFeature from "./AboutFeature";
import AboutFeedback from "./AboutFeedback";
import Breadcrumb from "./BreadCumb";
import aboutOne from "./img/about-1.png";
const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header1 />
      <main className="about__main__wrap">
        <Breadcrumb />
        <div className="about-area de-pt">
          <div className="about-wpr grid-2">
            <div className="about-left">
              <div className="about-img">
                <img src={aboutOne} alt="thumb" />
              </div>
            </div>
            <div className="about-right about-padding-right">
              <span className="about-sub-title">About Agency</span>
              <h2 className="about-title">
                A helping hand agency <br /> for Business
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                seieiusmoed dui too consecteture elite more.According to ipsum
                dolor seat ameat consecteture elite.
              </p>
              <div className="about-fact grid-3">
                <div className="fun-fact">
                  <span className="fun-icon">
                    <img src={iconOne} alt="thumb" />
                    <CountUp
                      className="timer"
                      start={0}
                      end={2086}
                      duration={3}
                    />
                  </span>
                  <div className="fun-desc">
                    <span className="medium">Project Completed</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <span className="fun-icon">
                    <img src={iconTwo} alt="thumb" />
                    <CountUp
                      className="timer"
                      start={0}
                      end={1382}
                      duration={3}
                    />
                  </span>
                  <div className="fun-desc">
                    <span className="medium">Team Members</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <span className="fun-icon">
                    <img src={iconThree} alt="thumb" />
                    <CountUp
                      className="timer"
                      start={0}
                      end={2382}
                      duration={3}
                    />
                  </span>
                  <div className="fun-desc">
                    <span className="medium">Happy Clients</span>
                  </div>
                </div>
              </div>
              <div className="about-btn mt-60">
                <a href="#/" className="theme-btn">
                  Explore More <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <AboutFeature />
        <AboutFaq />
        <AboutFeedback />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
