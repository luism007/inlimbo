import React from "react";
import { NavLink } from "react-router-dom";
import "./NavHeader.css";
import "../../web-responsive.css";
import { motion } from "framer-motion";
const NavHeader = () => {
    const activestyle = { 
        color: 'black',
        borderBottom: 'solid black 2px' 
    }

    return (
      <div className="inlimbo-navbar">
        <nav>
          <motion.span
            initial = {{opacity: 0, y: '50%'}}
            animate = {{opacity: 1, y: '0' }}
            exit = {{opacity: 0 , y: '0'}}
            transition={{duration: 1, repeat: 0}}
          >
            <NavLink to="/"exact = "true" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Home
            </NavLink>
          </motion.span>
          <motion.span
            initial = {{opacity: 0, y: '50%'}}
            animate = {{opacity: 1, y: '0' }}
            exit = {{opacity: 1 , y: '0'}}
          transition={{duration: 1, repeat: 0}}
          >
          <NavLink to="/photography" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
            Gallery
          </NavLink>
          </motion.span>
          <motion.span
            initial = {{opacity: 0, y: '50%'}}
            animate = {{opacity: 1, y: '0' }}
            exit = {{opacity: 1 , y: '0'}}
          transition={{duration: 1, repeat: 0}}
          >
          <NavLink to="/aboutme" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
            About Me
          </NavLink>
          </motion.span>
        </nav>
      </div>
    );
}

export default NavHeader;