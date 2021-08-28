import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
// import "swiper/css";
import App from "./App";
import "./Components/assets/css/bsnav.min.css";
import "./Components/assets/css/main.css";
import "./Components/assets/css/responsive.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
