import React from "react";
import { NavLink } from "react-router-dom";
import inlimboLogo from '../../../public/images/inlimbo-studios-small-logo-white.png';
import homeLogo from '../../../public/images/home.png';
import cameraLogo from '../../../public/images/camera.png';
import codeLogo from '../../../public/images/code.png';
import userLogo from '../../../public/images/user.png'
import "./NavHeader.css";
import "../../web-responsive.css";
const NavHeader = () => {
    const activestyle = { 
        color: 'black',
        borderBottom: 'solid black 2px' 
    }

    return (
      <div className="inlimbo-navbar">
        <nav>
          <NavLink to="/" style={activestyle} exact = "true">
            Home
          </NavLink>{" "}
          <NavLink to="/photography" style={activestyle}>
            Gallery
          </NavLink>{" "}
          <NavLink to="/courses" style={activestyle}>
            {" "}
            About Me
          </NavLink>{" "}
        </nav>
      </div>
    );
}

export default NavHeader;