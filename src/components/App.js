import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import PhotographyPage from "./photography/PhotographyPage";
import NavHeader from "./common/NavHeader";
import PageNotFound from "./PageNotFound";
import "./App.css";
import "../web-responsive.css";
import inlimboLogo from '../../public/images/inlimbo-proto.svg';
import AboutMe from "./about-me/AboutMe";
const App = () => {
  
  return (
  <div>
    <div className="header">
      <div className="logo">
        <img src= "../../public/images/inlimbo-proto-blk-small.svg" alt = "inlimbo-logo" aria-label="INLIMBO"></img>
      </div>
    </div>
    <NavHeader />
    <div className="page-showcase">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/photography" element={ <PhotographyPage/> } />
        <Route path="/aboutme" element={ <AboutMe/> } />
        <Route element={ <PageNotFound/> } />
      </Routes>
    </div>
  </div>
)
};

export default App;
