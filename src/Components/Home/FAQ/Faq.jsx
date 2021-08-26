import React from "react";
import { Accordion } from "react-bootstrap";
import FaqRight from "./faq/fag-bg.png";
const Faq = () => {
  return (
    <>
      <div className="faq-area de-padding">
        <div className="faq-wpr grid-2">
          <div className="faq-left faq-padding-left">
            <div className="site-title">
              <span className="about-sub-title">Questions &amp; Answer</span>
              <h2 className="about-title mb-0">
                Need anything to ask check
                <br />
                Asked Question
              </h2>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  A1. Think ahead &amp; boost your business?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. How our experts consulter work?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  3. What is the best tips for growth your business?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  4. How to improved your business?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  5. How to improved your business?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="faq-right">
            <div className="faq-pic">
              <img src={FaqRight} alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
