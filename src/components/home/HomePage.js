import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import { createPortal } from 'react-dom';
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
import '../../web-responsive.css';
import SectionScroller from "../common/section-scroller/SectionScroller";

const HomePage = () => {
  const content = [
    {
      id: "649f396544218cd633ff804e",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156350/luis-inlimbo-headshot_dbjmfi.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156341/luis-inlimbo-headshot_rujyxn.jpg",
      title: "Luis's Portrait Mobile",
      description: "Luis's Homepage Portrait for Portraiture Preview",
      type: "portrait",
      collection_id: "#preview"
    }, {
      id: "649f394344218cd633ff804c",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156295/joe-riverside-library-mobile_qy1yxe.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156309/joe-riverside-library-mobile-low-res_caalg2.jpg",
      title: "Joe Portrait Mobile",
      description: "Joe's Homepage Portrait for Portraiture Preview",
      type: "portrait",
      collection_id: "#preview"
    }, {
      id: "6386d65df170afe0c42175cb",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778953/inlimbo-photos/detroit-fox-theatre_pzntul.jpg",
      title: "The Fox Theatre",
      description: "That's Entertainment...",
      type: "urban",
      collection_id: "#detroit_city",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445616/detroit-fox-theatre-low-res_fizigw.jpg"
    },  {
      id: "649f2fa844218cd633ff804a",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688153865/london-inlimbo_snuhkk.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688153874/london-inlimbo-low-res_f8xycg.jpg",
      title: "Tower Bridge London",
      description: "From The Shard, Eyes upon Tower Bridge",
      type: "urban",
      collection_id: "#uk"
    },
    {
      id: "649f220244218cd633ff8046",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688150172/cliffs-moher-inlimbo_ff5ub3.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688150296/cliffs-of-moher-low-res_crsspw.jpg",
      title: "Cliffs of Moher",
      description: "Upon the Cliffs of Moher",
      type: "nature",
      collection_id: "#ireland"
    },
    {
      id: "6386d89af170afe0c42175d2",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778965/inlimbo-photos/antelope-canyon-sharp-walls_irz7om.jpg",
      title: "Orange Crush",
      description: "No such thing as claustrophobia here ...",
      type: "nature",
      collection_id: "#antelope_canyon",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445615/antelope-canyon-sharp-walls-low-res_ralcmn.jpg"
    },{
      id: "6386db11f170afe0c42175e3",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778961/inlimbo-photos/antelope-canyon-perched-raven_vwf65d.jpg",
      title: "The Raven",
      description: "Perched within the canyon walls ...",
      type: "nature",
      collection_id: "#antelope_canyon",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445615/antelope-canyon-perched-raven-low-res_kbgeuh.jpg"
    }
 ];

 const sections = ["portraiture", "urban", "nature"];

  return (<motion.div 
  initial = {{y: '100%', opacity: 0.5}}
  animate = {{y: 0, opacity: 1}}
  exit= {{y: '100%', opacity: 0.5}}
  transition={{duration: 2}}
  className="carousel-container">
    <div className="section-container" id = "portraiture">
      <ContentTile contents = {content.slice(0,2)} title = {'portraiture'} grid_style = {'grid-2-by-1'}></ContentTile>
    </div>
    <div  className="section-container" id = "urban">
      <ContentTile contents = {content.slice(2,4)} title = {'urban'} grid_style = {'grid-1-by-2-full-and-half'}></ContentTile>
    </div>
    <div className="section-container" id = "nature">
      <ContentTile contents = {content.slice(4,7)} title = {'nature'} grid_style = {'grid-1-by-2'}></ContentTile>
    </div>
    { createPortal(<SectionScroller sections = {sections}></SectionScroller>, document.body) }
  </motion.div>);
};

export default HomePage;