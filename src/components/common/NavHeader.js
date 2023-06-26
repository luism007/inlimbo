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
    const activeStyle = { 
        color: 'black',
        borderBottom: 'solid black 2px' 
    }

    return (
      <div className="inlimbo-navbar">
        <nav>
          <NavLink to="/" activeStyle={activeStyle} exact>
            {/* <img src= {homeLogo} alt = "Home Icon" aria-label="Home"/> */}
            Home
          </NavLink>{" "}
          <NavLink to="/photography" activeStyle={activeStyle}>
            {/* <img src = {cameraLogo} alt = "Camera Icon" aria-label="Photography"/> */}
            Gallery
          </NavLink>{" "}
          <NavLink to="/courses" activeStyle={activeStyle}>
            {" "}
            {/* <img src = {codeLogo} arial-label="Software Projects"/> */}
            About Me
          </NavLink>{" "}
          {/* {" | "}
          <NavLink to="/nature" activeStyle={activeStyle}>
            {" "}
           <img src = {userLogo} aria-label = "About Me"/>
          </NavLink> */}
        </nav>
      </div>
    );
}

export default NavHeader;