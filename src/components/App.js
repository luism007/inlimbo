import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import NavHeader from "./common/NavHeader";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import "./App.css";
const App = () => (
  <div>
    <NavHeader />
    <div className="page-showcase">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </div>
);

export default App;
