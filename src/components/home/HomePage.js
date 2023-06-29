import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import { Link } from "react-router-dom";
import canyonImage from '../../../public/images/canyon-inlimbo-smaller.jpg';
import tigersImage from '../../../public/images/detroit-tigers-bigger-logo.jpg';
import pressCoffeeImage from '../../../public/images/press-coffee-phx-az.jpg';
import detroitNightImg from "../../../public/images/detroit-night-street-inlimbo.jpg";
import { motion } from "framer-motion";
import "./HomePage.css";
import { photos } from "../../test-data/photos-2";
import List from "../common/list/List";
import ContentTile from "../common/photo-tiles/ContentTile";

const HomePage = () => {
  const content = [
    {
      id: '649dccf544218cd633ff803c',
      source: 'https://res.cloudinary.com/inlimbo-studios/image/upload/v1688062441/inlimbo-portraiture-mobile_ahpdg7.jpg',
      lowres_source: 'https://res.cloudinary.com/inlimbo-studios/image/upload/v1688062425/inlimbo-portraiture-mobile-low-res_ovjdr0.jpg',
      title: 'Luis & Joe Mobile Portraiture',
      description: 'Luis & Joe potraiture preview',
      type: 'portrait',
      collection_id: '#preview'
    }
  ];

  return (<motion.div 
  initial = {{y: '100%', opacity: 0.5}}
  animate = {{y: 0, opacity: 1}}
  exit= {{y: '100%', opacity: 0.5}}
  transition={{duration: 2}}
  className="carousel-container">
    <div className="section-container">
      <ContentTile content = {content} title = {'portraiture'}></ContentTile>
    </div>
    <div  className="section-container">
      <ContentTile content = {content}></ContentTile>
    </div>
    <div className="section-container">
      <ContentTile content = {content}></ContentTile>
    </div>
  </motion.div>);
};

export default HomePage;