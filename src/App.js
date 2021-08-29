import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/Pages/about/About";
import Blog from "./Components/Pages/Blogs/Blog";
import BlogSingle from "./Components/Pages/Blogs/BlogSignle/BlogSingle";
import Contact from "./Components/Pages/Contact/Contact";
import HomeTow from "./Components/Pages/Home2/HomeTow";
import NoMatch from "./Components/Pages/PageNotFound/NoMatch";
import Project from "./Components/Pages/Project/Project";
import ProjectSingle from "./Components/Pages/Project/ProjectSingle/ProjectSingle";
import Service from "./Components/Pages/Service/Service";
import ServiceSingle from "./Components/Pages/Service/ServiceSingle";
import Team from "./Components/Pages/Team/Team";
import { MoveToTop } from "./Helper/MoveToTop";

function App() {
  return (
    <Router>
      <span id="scrtop" onClick={MoveToTop} className="smooth-menu">
        <i className="ti-arrow-up"></i>
      </span>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home-version2">
          <HomeTow />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/service-single">
          <ServiceSingle />
        </Route>
        <Route path="/our-project">
          <Project />
        </Route>
        <Route path="/project-single">
          <ProjectSingle />
        </Route>
        <Route path="/our-team">
          <Team />
        </Route>
        <Route path="/404">
          <NoMatch />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blog-details">
          <BlogSingle />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
