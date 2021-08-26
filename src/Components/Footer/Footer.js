import React from "react";
import FooterBg from "./img/footer-bg.png";
import singleOne from "./img/singlepost/ins-1.jpg";
import singleTwo from "./img/singlepost/ins-2.jpg";
import singleThree from "./img/singlepost/ins-3.jpg";
import logo from "./logo/logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-shape">
          <img src={FooterBg} alt="thumb" />
        </div>
        <div className="footer-widget">
          <div className="container">
            <div className="footer-widget-wrapper de-pb">
              <div className="row g-5">
                <div className="col-xl-5 col-sm-6 col-lg-6">
                  <div className="footer-widget-box ab-us">
                    <div>
                      <img src={logo} alt="thumb" />
                    </div>
                    <p className="mb-50">
                      This is Photoshop's version of LoreiIpsum. Aenean
                      sollicitudin,
                    </p>
                    <ul className="adr">
                      <li>
                        Address: House 22, Road No : 3, Street address, DHK
                      </li>
                      <li>Phone: +000- 1234- 678</li>
                      <li>Email: Marco2020@email.com</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-lg-6">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Quick Links</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="#/">Tips &amp; Tricks</a>
                      </li>
                      <li>
                        <a href="#/">About Us</a>
                      </li>
                      <li>
                        <a href="#/">Privecy Policy</a>
                      </li>
                      <li>
                        <a href="#/">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="#/">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-lg-6">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Helpful Links</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="#/">Tips &amp; Tricks</a>
                      </li>
                      <li>
                        <a href="#/">About Us</a>
                      </li>
                      <li>
                        <a href="#/">Privecy Policy</a>
                      </li>
                      <li>
                        <a href="#/">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="#/">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-6">
                  <div className="footer-widget-box footer-gallery">
                    <h4 className="footer-widget-title">Instagram</h4>
                    <div className="foter-img grid-2">
                      <a href="#/">
                        <img src={singleOne} alt="thumb" />
                      </a>
                      <a href="#/">
                        <img src={singleTwo} alt="thumb" />
                      </a>
                      <a href="#/">
                        <img src={singleThree} alt="thumb" />
                      </a>
                      <a href="#/">
                        <img src={singleOne} alt="thumb" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>© 2020 All Right Reserved, Ailng</p>
              <ul className="footer-social">
                <li>
                  <a href="#/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
