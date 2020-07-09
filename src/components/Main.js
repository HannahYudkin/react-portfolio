import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      {/* <Route exact path="/" component={Projects} /> */}
    </Switch>
  </BrowserRouter>
);
export default Main;
