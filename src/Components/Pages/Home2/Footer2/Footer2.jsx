import React from "react";
import imageOne from "./img/ins-1.jpg";
import imageTwo from "./img/ins-2.jpg";
import imageThree from "./img/ins-3.jpg";
import logo from "./img/logo.png";
const Footer2 = () => {
  return (
    <>
      <footer className="footer-2">
        <div className="footer-widget">
          <div className="container">
            <div className="footer-widget-wrapper de-padding">
              <div className="row g-5">
                <div className="col-xl-4 col-sm-6 col-lg-6">
                  <div className="footer-widget-box ab-us">
                    <div>
                      <img src={logo} alt="thumb" />
                    </div>
                    <p className="mb-50">
                      Maboriosam in a nesciung egemagnaeli montant odiy.
                    </p>
                    <form className="sub-form">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="input-style-1 input-style-2"
                      />
                      <button type="submit" className="sub-btn btn-3 btn-5">
                        Subscribe
                      </button>
                    </form>
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
                <div className="col-xl-3 col-sm-6 col-lg-6">
                  <div className="footer-widget-box">
                    <h4 className="footer-widget-title">Helpful Links</h4>
                    <ul className="adr">
                      <li>
                        178 Alex Avenue. William Street New York, NY-25435
                      </li>
                      <li>+1 998 150 3022</li>
                      <li>info@yourmail.com</li>
                    </ul>
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
                <div className="col-xl-3 col-sm-6 col-lg-6">
                  <div className="footer-widget-box footer-gallery">
                    <h4 className="footer-widget-title">Instagram</h4>
                    <div className="foter-img grid-2">
                      <a href="#/">
                        <img src={imageOne} alt="thumb" />
                      </a>
                      <a href="#/">
                        <img src={imageTwo} alt="thumb" />
                      </a>
                      <a href="#/">
                        <img src={imageThree} alt="thumb" />
                      </a>
                      <a href="#/">
                        <img src={imageOne} alt="thumb" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright text-center">
              <p className="mb-0">© 2020 All Right Reserved, Ailng</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
