import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="single-area de-padding">
        <div className="container">
          <div className="contact-page-info grid-2">
            <div className="contact-left">
              <h2 className="mb-50">
                Hello! Have you want <br />
                to need any inquary or <br />
                have any Questions?
              </h2>
              <ul className="contact-list">
                <li>
                  <h5 className="fz-18-5">Address:</h5>
                  <span>
                    Street Addres, House No 02, ZIPE Code, 204 DHK, Canada
                  </span>
                </li>
                <li>
                  <h5 className="fz-18-5">Phone:</h5>
                  <span>000- 1234- 678, 000- 1234- 678,</span>
                </li>
                <li>
                  <h5 className="fz-18-5">Email:</h5>
                  <span>marcoszeletoyan204@mail.com</span>
                </li>
              </ul>
            </div>
            <div className="contact-right">
              <form className="row g-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control input-style-2"
                    placeholder="Marcos Zeletoyan"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control input-style-2"
                    placeholder="+000- 1234- 567"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control input-style-2"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control input-style-2"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="theme-btn mt-20">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
