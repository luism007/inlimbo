import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavHeader.css";
import "../../web-responsive.css";
import inlimboLogo from '../../assets/inlimbo-light-gray-on-white.svg';
import trigramLogo from '../../assets/trigram-icon.png';
import closeIcon from '../../assets/close-icon.png';
const NavHeader = () => {

  const [mobileMenu, setMobileMenu] = useState('initial');
  const location = useLocation();

  const toggleMenu = () => {
    switch(mobileMenu) {
      case 'initial':
        setMobileMenu('open');
        break;
      case 'open':
        setMobileMenu('close');
        break;
      case 'close': 
        setMobileMenu('open');
        break;
    }
  }

  useEffect(() => {
  }, [mobileMenu, location]);

    return (
      <div className="inlimbo-navbar">
        <nav className="desktop">
          <div className="header" id="inlimbo-header">
            <div className="logo">
              <img
                src={inlimboLogo}
                alt="inlimbo-logo"
                aria-label="INLIMBO"
              ></img>
            </div>
          </div>
          <NavLink
            to="/"
            exact="true"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/photography"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About Me
          </NavLink>
        </nav>
        <nav className="mobile">
          <div className="header" id="inlimbo-header">
            <div className="logo">
              <img
                src={inlimboLogo}
                alt="inlimbo-logo"
                aria-label="INLIMBO"
              ></img>
            </div>
          </div>
          <img src={trigramLogo} alt="trigram-logo" aria-label="nav-menu" onClick={toggleMenu} className="trigram"></img>
          <div className={`mobile-menu ${mobileMenu}`}>
          <img src={closeIcon} alt="close-icon" aria-label="nav-menu-close" onClick={toggleMenu}></img>
            <NavLink
              to="/"
              exact="true"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/photography"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/aboutme"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              onClick={toggleMenu}
            >
              About Me
            </NavLink>
          </div>
        </nav>
      </div>
    );
}

export default NavHeader;