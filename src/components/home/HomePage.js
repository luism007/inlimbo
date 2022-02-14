import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import { Link } from "react-router-dom";
import canyonImage from '../../../public/images/canyon-inlimbo-smaller.jpg';
import tigersImage from '../../../public/images/detroit-tigers-bigger-logo.jpg';
import pressCoffeeImage from '../../../public/images/press-coffee-phx-az.jpg';
import detroitNightImg from "../../../public/images/detroit-night-street-inlimbo.jpg";

import "./HomePage.css";
import PhotoTiles from "../photo-tiles/PhotoTiles";

const HomePage = () => (
  <div className="carousel-container">
      <PhotoTiles></PhotoTiles>
  </div>
);

export default HomePage;