import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import { Link } from "react-router-dom";
import canyonImage from '../../../public/images/canyon-inlimbo.jpg';
import tigersImage from '../../../public/images/detroit-tigers-bigger-logo.jpg';
import pressCoffeeImage from '../../../public/images/press-coffee-phx-az.jpg';
import detroitNightImg from "../../../public/images/detroit-night-street-inlimbo.jpg";

import "./HomePage.css";

const HomePage = () => (
  <div className="carousel-container">
    {/* <Link to="about" className = "btn btn-primary btn-lg">
        Learn More
    </Link> */}
    <Carousel>
      <Carousel.Item>
        <div className="image-container">
          <img
            className="d-block w-100 inlimbo-img"
            src={canyonImage}
            alt="Canyon Image"
          />
        </div>
        <Carousel.Caption>
          <h3> Landscapes </h3>
          <p> Page, Arizona </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img
            className="d-block w-100 inlimbo-img"
            src={detroitNightImg}
            alt="Detroit Image"
          />
        </div>
        <Carousel.Caption>
          <h3> Urban Sights </h3>
          <p> Detroit, Michigan </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img
            className="d-block w-100 inlimbo-img"
            src={pressCoffeeImage}
            alt="Press Coffee Image"
          ></img>
        </div>
        <Carousel.Caption>
          <h3> Businesses </h3>
          <p> Phoenix, Arizona </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default HomePage;