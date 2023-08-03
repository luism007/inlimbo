import React, { useEffect, useState }  from "react";
import { createPortal } from 'react-dom';
import { motion } from "framer-motion";
import "./HomePage.css";
import ContentTile from "../common/photo-tiles/ContentTile";
import '../../web-responsive.css';
import SectionScroller from "../common/section-scroller/SectionScroller";
import Overlay from "../common/overlay/Overlay";
import PictureCommunicationService from "../../rxjs-services/picture-service";
import ImageComponent from "../common/image/ImageComponent";
const HomePage = () => {

 const [overlay, setOverlay] = useState(false);
 const sections = [
  {
    source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1691099673/luis-monochrome-garage-4_yvad1e.jpg",
    lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1691099671/luis-monochrome-garage-4-lowres_gl3ltd.jpg",
    title: "Heartfelt Monocrhomatic",
    description: "I was experimenting with different light angles & I settled with this one. Although shadow-side is traditionally the best side to take photos, this one was just stood out to me more.",
    type: "portrait",
    collection_id: "#portraiture",
    photo_meta_data: "Sony Alpha 7 IV 85mm f/2 1/250",
    id: "64cc23f82179a7daa0b949cb",
    label: "portraiture"
  },
  {
    source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778960/inlimbo-photos/az-flagstaff-hotel-montevista_eo3pem.jpg",
    title: "Hotel Monte Vista",
    description: "A cozy place to stay in the cozy town of Flagstaff, AZ.",
    type: "urban",
    collection_id: "#urban_scenes",
    lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445615/az-flagstaff-hotel-montevista-low-res_jdbdaa.jpg",
    photo_meta_data: "",
    id: "6386d403f170afe0c42175c3",
    label: "urban"
  },
  {
    source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778963/inlimbo-photos/antelope-az-heart-of-the-canyon_unftts.jpg",
    title: "Heart of the Canyon",
    description: "It's hard to not love Antelope Canyon. ",
    type: "nature",
    collection_id: "#antelope_canyon",
    lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445616/inlimbo-antelope-canyon-heart-watermark-lowres_xfqao7.jpg",
    photo_meta_data: "",
    id: "6386d9ebf170afe0c42175d9",
    label: "nature"
  }
 ];
 const photograpySections = (section) => {
  return (
    <div key = {section?.id}className="homepage-content-wrapper">
      <div className="homepage-content-photo-container">
        <ImageComponent {...section}></ImageComponent>
        <p className="homepage-content-photo-label"> {section.label} </p>
      </div>
    </div>
  )
 } 


 useEffect(() => {
 }, [overlay]);


  return (
    <div className="homepage-container">
      <motion.div
        initial={{ transform: "translateY(100%)", opacity: 0.5 }}
        animate={{ transform: "translateY(0%)", opacity: 1 }}
        className="carousel-container"
      >
        <div className="homepage-content-container">
          <div className="homepage-content-photos-container">
            { sections.map((section) => {
              return photograpySections(section)
            })}
          </div>
          <div className="homepage-content-text-container">
            <p className="homepage-content-text">
              Welcome to my creative outlet INLIMBO ©. My goal is to make you
              look the best because you deserve nothing less. It doesn’t matter
              the setting, the person, or the place, I embrace all types of
              photography and excel in variety. Like any strong portfolio,
              diversification is key. View my full gallery here.{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;