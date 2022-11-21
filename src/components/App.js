import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import PhotographyPage from "./photography/PhotographyPage";
import NavHeader from "./common/NavHeader";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import "./App.css";
import inlimboLogo from '../../public/images/inlimbo-proto.svg';
const App = () => {
  
  return (
  <div>
    <div className="header">
      <div className="logo">
        <img src= "../../public/images/inlimbo-proto-wht-small.svg" alt = "inlimbo-logo" aria-label="INLIMBO"></img>
      </div>
    </div>
    <NavHeader />
    <div className="page-showcase">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/photography" component={PhotographyPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </div>
)
};

export default App;
