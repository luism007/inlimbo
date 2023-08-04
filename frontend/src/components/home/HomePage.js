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
import hiResLondon from  '../../assets/london-atop-eye-monochrome.jpg';
import lowResLondon from '../../assets/london-inlimbo.jpg'
const HomePage = () => {

 const [overlay, setOverlay] = useState(false);
 const sections = [
  {
    id: "64cd77082179a7daa0b949e6",
    source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1691186688/joe-riverside-lib_qhzdmw.jpg",  
    lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1691186746/joe-riverside-lib-lowres_almlgv.jpg", 
    title: "Rays Off the Wall",
    description: "We we're walking past a wall in Downtown Riverside, CA when I noticed how the sun reflected off a chrome beam towards a wall. It looked so cool, so I told my brother to get in-frame so I can take this shot. ",  
    type: "portrait",  
    collection_id: "#portraiture",  
    photo_meta_data: "Sony Alpha 7 IV 85mm f/4 1/800"
  },
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

 const london = {
  source: hiResLondon,
  title: "Atop London Eye",
  description: "Checking out Tower Bridge from the London Eye",
  type: "urban",
  collection_id: "#uk",
  lowres_source: lowResLondon,
  photo_meta_data: "",
  id: "6386d9ebf170afe0c42175d9",
  label: "urban"
 }
 const photograpySections = (section) => {
  return (
    <div key = {section?.id}className="homepage-content-wrapper">
      <div className="homepage-content-photo-container">
        <ImageComponent {...section}></ImageComponent>
      </div>
    </div>
  )
 } 


 useEffect(() => {
 }, [overlay]);


  return (
    <motion.div 
    initial={{ transform: "translateY(100%)", opacity: 0.5 }}
    animate={{ transform: "translateY(0%)", opacity: 1 }}
    className="parallax-layer">
        <div className="parallax-group">
          <div className="background-section">
            <ImageComponent {...london}></ImageComponent>
          </div>
          <div className="welcome-section">
            <p className="home-text welcome-text"> Welcome. </p>
            <p className="home-text welcome-text"> Bienvenidos. </p>
            <p className="home-text welcome-text"> Bem-venidos. </p>
          </div>
        </div>
        <div className="parallax-group">
          <div className="photography-section">
            <div className="homepage-content-photos-container">
              {sections.map((section) => {
                return photograpySections(section);
              })}
            </div>
            <div className="homepage-content-text-container">
              <h3 className="home-text"> Embracing Variety </h3>
              <p className="home-text">
                Welcome to my creative outlet INLIMBO ©. My goal is to make you
                look the best because you deserve nothing less. It doesn’t matter
                the setting, the person, or the place, I embrace all types of
                photography and excel in variety. Like any strong portfolio,
                diversification is key. View my full gallery here.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="parallax-group">
          <div className="photography-section">
            <div className="homepage-content-photos-container">
              {sections.map((section) => {
                return photograpySections(section);
              })}
            </div>
            <div className="homepage-content-text-container">
              <h3 className="home-text"> Unbounded Reality </h3>
              <p className="home-text">
                Welcome to my creative outlet INLIMBO ©. My goal is to make you
                look the best because you deserve nothing less. It doesn’t matter
                the setting, the person, or the place, I embrace all types of
                photography and excel in variety. Like any strong portfolio,
                diversification is key. View my full gallery here.{" "}
              </p>
            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default HomePage;