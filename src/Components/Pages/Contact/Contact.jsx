import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header1 from "../../Header/Header1";
import Newsletter from "../../Home/Newsletter/Newsletter";
import "./Contact.css";
import ContactBreadcrumb from "./ContactBreadcrumb";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header1 />
      <main className="contact__main__wrap">
        <ContactBreadcrumb />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
