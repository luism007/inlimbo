import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import { Link } from "react-router-dom";
import canyonImage from '../../../public/images/canyon-inlimbo-smaller.jpg';
import tigersImage from '../../../public/images/detroit-tigers-bigger-logo.jpg';
import pressCoffeeImage from '../../../public/images/press-coffee-phx-az.jpg';
import detroitNightImg from "../../../public/images/detroit-night-street-inlimbo.jpg";
import { motion } from "framer-motion";
import "./HomePage.css";
import PhotoTiles from "../common/photo-tiles/PhotoTiles";
import { photos } from "../../test-data/photos-2";
import List from "../common/list/List";
const HomePage = () => {
  const list = photos;
  return (<motion.div 
  initial = {{y: '100%', opacity: 0.5}}
  animate = {{y: 0, opacity: 1}}
  exit= {{y: '100%', opacity: 0.5}}
  transition={{duration: 2}}
  className="carousel-container">
    <List items = {list}></List>
  </motion.div>);
};

export default HomePage;