import React from "react";
import Slider from "react-slick";
import sliderImageOne from "./img/review-pic.png";
const AboutFeedback = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="feedback-area de-padding">
        <div className="container">
          <div className="swiper-container feed-active">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                <div className="swiper-slide">
                  <div className="row g-0">
                    <div className="col-xl-5">
                      <div className="feedback-left">
                        <div className="feedback-pic text-center">
                          <img src={sliderImageOne} alt="thumb" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="feedback-right">
                        <p className="mb-30">
                          Lorem Ipsum dolor seat ameat dui too consecteture more
                          be elite. According the agency is best for growing
                          your business what your A best consulting business
                          agency.
                        </p>
                        <div className="feedback-bio">
                          <h5>Atardam Steve</h5>
                          <span className="d-block">Founder</span>
                          <div className="review-rating mt-60 d-flex align-items-center">
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row g-0">
                    <div className="col-xl-5">
                      <div className="feedback-left">
                        <div className="feedback-pic text-center">
                          <img src={sliderImageOne} alt="thumb" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="feedback-right">
                        <p className="mb-30">
                          Lorem Ipsum dolor seat ameat dui too consecteture more
                          be elite. According the agency is best for growing
                          your business what your A best consulting business
                          agency.
                        </p>
                        <div className="feedback-bio">
                          <h5>Atardam Steve</h5>
                          <span className="d-block">Founder</span>
                          <div className="review-rating mt-60 d-flex align-items-center">
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row g-0">
                    <div className="col-xl-5">
                      <div className="feedback-left">
                        <div className="feedback-pic text-center">
                          <img src={sliderImageOne} alt="thumb" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="feedback-right">
                        <p className="mb-30">
                          Lorem Ipsum dolor seat ameat dui too consecteture more
                          be elite. According the agency is best for growing
                          your business what your A best consulting business
                          agency.
                        </p>
                        <div className="feedback-bio">
                          <h5>Atardam Steve</h5>
                          <span className="d-block">Founder</span>
                          <div className="review-rating mt-60 d-flex align-items-center">
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                            <i className="icofont-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFeedback;
