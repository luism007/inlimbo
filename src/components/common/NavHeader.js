import React from "react";
import { NavLink } from "react-router-dom";
import inlimboLogo from '../../../public/images/inlimbo-studios-small-logo-white.png';
import "./NavHeader.css";
const NavHeader = () => {
    const activeStyle = { 
        color: 'white',
        borderBottom: 'solid white 2px' 
    }

    return (
      <div className="inlimbo-navbar">
        <div>
          <img src={inlimboLogo}></img>
        </div>
        <nav>
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>{" "}
          {" | "}
          <NavLink to="/about" activeStyle={activeStyle}>
            {" "}
            Urban{" "}
          </NavLink>{" "}
          {" | "}
          <NavLink to="/courses" activeStyle={activeStyle}>
            {" "}
            Nature{" "}
          </NavLink>{" "}
          {" | "}
          <NavLink to="/nature" activeStyle={activeStyle}>
            {" "}
            Portraits{" "}
          </NavLink>
        </nav>
      </div>
    );
}

export default NavHeader;