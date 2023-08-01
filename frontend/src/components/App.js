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
import inlimboLogo from '../assets/inlimbo-light-gray-on-white.svg'
import instagramIcon from '../assets/instagram-icon.svg';
import mailIcon from '../assets/envelope-icon.svg';
const App = () => {
  const location  = useLocation();
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={inlimboLogo} alt="inlimbo-logo" aria-label="INLIMBO"></img>
        </div>
        <div className="navbar-wrapper">
          <NavHeader />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <div className="page-showcase">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </AnimatePresence>
      <footer>
        <div className="footer-container" id="footer">
          <div id="footer-wrapper">
            <div className="footer-logo-wrapper">
              <img src={inlimboLogo} alt="inlimbo-logo" aria-label="INLIMBO"></img>
            </div>
            <ul className="footer-contact-list">
              <li> 
                <div className="footer-contact-list-item-wrapper">
                  <img src = {mailIcon}></img>
                  <a className="footer-list-items-text" href="mailto:inlimbo.photography@gmail.com?subject=Service%20Inquiry" target="_top"> Contact Me </a>
                </div>
              </li>
              <li>
                <div className="footer-contact-list-item-wrapper">
                    <img src = {instagramIcon}></img>
                    <a className="footer-list-items-text" href="https://www.instagram.com/inlimbo.studios/"> Follow Me </a>
                </div>
              </li>
            </ul>
            <p className="footer-list-items-text"> Developed & Designed by  INLIMBO 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
