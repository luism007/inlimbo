import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./home/HomePage";
import PhotographyPage from "./photography/PhotographyPage";
import NavHeader from "./common/NavHeader";
import PageNotFound from "./PageNotFound";
import "./App.css";
import "../web-responsive.css";
import AboutMe from "./about-me/AboutMe";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const location  = useLocation();
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img
            src="images/inlimbo-black-on-white-transparent.svg"
            alt="inlimbo-logo"
            aria-label="INLIMBO"
          ></img>
        </div>
      </div>
      <NavHeader />
      <AnimatePresence mode="wait">
        <div className="page-showcase">
            <Routes location={location} key={location.key} >
              <Route path="/" element={<HomePage />} />
              <Route path="/photography" element={<PhotographyPage />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route element={<PageNotFound />} />
            </Routes>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default App;
