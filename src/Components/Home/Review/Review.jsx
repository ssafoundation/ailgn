import React from "react";
import Slider from "react-slick";
import Qoute from "../../assets/icons/qoute.png";
import "./Review.css";
const Review = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="review-area de-pb">
        <div className="container">
          <div className="swiper-container review-wpr">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                <div className="swiper-slide">
                  <div
                    style={{ backgroundImage: `url(${Qoute})` }}
                    className="review-single text-center"
                  >
                    <div className="row">
                      <div className="col-xl-8 offset-xl-2">
                        <div className="review-content">
                          <p>
                            Lorem Ipsum dolor seat ameat dui too consecteture
                            more be elite. According the agency is best for
                            growing your business what your A best consulting
                            business agency.
                          </p>
                          <div className="review-bio">
                            <h5>Atardam Steve</h5>
                            <span>Founder</span>
                            <div className="review-rating d-flex align-items-center">
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
                </div>
                <div className="swiper-slide">
                  <div
                    className="review-single text-center"
                    style={{ backgroundImage: `url(${Qoute})` }}
                  >
                    <div className="row">
                      <div className="col-xl-8 offset-xl-2">
                        <div className="review-content">
                          <p>
                            Lorem Ipsum dolor seat ameat dui too consecteture
                            more be elite. According the agency is best for
                            growing your business what your A best consulting
                            business agency.
                          </p>
                          <div className="review-bio">
                            <h5>Atardam Steve</h5>
                            <span>Founder</span>
                            <div className="review-rating d-flex align-items-center">
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
                </div>
                <div className="swiper-slide">
                  <div
                    className="review-single text-center"
                    style={{ backgroundImage: `url(${Qoute})` }}
                  >
                    <div className="row">
                      <div className="col-xl-8 offset-xl-2">
                        <div className="review-content">
                          <p>
                            Lorem Ipsum dolor seat ameat dui too consecteture
                            more be elite. According the agency is best for
                            growing your business what your A best consulting
                            business agency.
                          </p>
                          <div className="review-bio">
                            <h5>Atardam Steve</h5>
                            <span>Founder</span>
                            <div className="review-rating d-flex align-items-center">
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
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
