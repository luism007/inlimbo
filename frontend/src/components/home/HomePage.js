import React, { useEffect, useState }  from "react";
import { createPortal } from 'react-dom';
import { motion } from "framer-motion";
import "./HomePage.css";
import ContentTile from "../common/photo-tiles/ContentTile";
import '../../web-responsive.css';
import SectionScroller from "../common/section-scroller/SectionScroller";
import Overlay from "../common/overlay/Overlay";
const HomePage = () => {

  useEffect(() => {}, [overlay]);
  const [overlay, setOverlay] = useState(false);
  const content = [
    {
      id: "649f396544218cd633ff804e",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156350/luis-inlimbo-headshot_dbjmfi.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156341/luis-inlimbo-headshot_rujyxn.jpg",
      title: "Luis's Portrait Mobile",
      description: "This photo was taken outside the Riverside Public Library in Riverside, CA. One of the walls provided be a perfect orange/redish backdrop that would just let the subject pop. It’s always fun to find unconventional places for a photoshoot!",
      type: "portrait",
      collection_id: "#portraiture",
      photo_meta_data: "Sony Alpha 7 IV 85mm f/2.8"
    }, {
      id: "649f394344218cd633ff804c",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156295/joe-riverside-library-mobile_qy1yxe.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688156309/joe-riverside-library-mobile-low-res_caalg2.jpg",
      title: "Joe Portrait Mobile",
      description: "Joe's Homepage Portrait for Portraiture Preview",
      type: "portrait",
      collection_id: "#portraiture",
      photo_meta_data: ""
    },{  
      id: "64ad88df44218cd633ff80d8",  
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1689094231/luis-riverside-lib-2_iosgf3.jpg",  
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1689094068/luis-riverside-lib-2_cvmuwc.jpg",  
      title: "Photoshoot Outside Riverside Library",  
      description: "Self-portrait outside Riverside Library",  
      type: "portrait",  
      collection_id: "#portraiture",
      photo_meta_data: ""
    }, {
      id: "6386d65df170afe0c42175cb",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778953/inlimbo-photos/detroit-fox-theatre_pzntul.jpg",
      title: "The Fox Theatre",
      description: "That's Entertainment...",
      type: "urban",
      collection_id: "#detroit_city",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445616/detroit-fox-theatre-low-res_fizigw.jpg",
      photo_meta_data: ""
    },  {
      id: "649f2fa844218cd633ff804a",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688153865/london-inlimbo_snuhkk.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688153874/london-inlimbo-low-res_f8xycg.jpg",
      title: "Tower Bridge London",
      description: "From The Shard, Eyes upon Tower Bridge",
      type: "urban",
      collection_id: "#uk",
      photo_meta_data: ""
    }, {
      id: "6386d89af170afe0c42175d2",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778965/inlimbo-photos/antelope-canyon-sharp-walls_irz7om.jpg",
      title: "Orange Crush",
      description: "No such thing as claustrophobia here ...",
      type: "nature",
      collection_id: "#antelope_canyon",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445615/antelope-canyon-sharp-walls-low-res_ralcmn.jpg",
      photo_meta_data: ""
    }, {
      id: "649f220244218cd633ff8046",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688150172/cliffs-moher-inlimbo_ff5ub3.jpg",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688150296/cliffs-of-moher-low-res_crsspw.jpg",
      title: "Cliffs of Moher",
      description: "Upon the Cliffs of Moher",
      type: "nature",
      collection_id: "#ireland",
      photo_meta_data: ""
    },{
      id: "6386db11f170afe0c42175e3",
      source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1669778961/inlimbo-photos/antelope-canyon-perched-raven_vwf65d.jpg",
      title: "The Raven",
      description: "Perched within the canyon walls ...",
      type: "nature",
      collection_id: "#antelope_canyon",
      lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1687445615/antelope-canyon-perched-raven-low-res_kbgeuh.jpg",
      photo_meta_data: ""
    }
 ];

 const sections = ["portraiture", "urban", "nature"];

 const portraitureTextAnimation = {
  initialAnimation: {
   x: '50%', opacity: 0
  }, 
  animation: {
    x: 0, opacity: 1
  },
  exitAnimation: {
    x: 0, opacity: 1
  },
  transitionAnimation: {
    duration: 1
  }
 };

 const backgroundImages = [
 "/src/assets/3-in-1-luis.jpg",
 "/src/assets/london-inlimbo.jpg",
 "/src/assets/craggin-inlimbo-3.jpg"
 ];
 
 const hideOverlay = () => {
   setOverlay(false);
 };

 const showOverlay = () => {
   setOverlay(true);
 };

  return (
    <div className="homepage-container">
      <motion.div
        initial={{ transform: "translateY(100%)", opacity: 0.5 }}
        animate={{ transform: "translateY(0%)", opacity: 1 }}
        exit={{ transform: "translateY(0%)", opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="carousel-container"
      >
        <div className="section-container" id="portraiture">
          <div className="section-wrapper" id="portraiture-wrapper">
            <h3 className="section-header" id="portraiture-header">
              {" "}
              portraiture
            </h3>
          </div>
        </div>
        <div className="section-container" id="urban">
          <div className="section-wrapper" id="urban-wrapper">
            <h3 className="section-header" id="urban-header">
              {" "}
              urban
            </h3>
          </div>
        </div>
        <div className="section-container" id="nature">
          <div className="section-wrapper" id="nature-wrapper">
            <h3 className="section-header" id="nature-header">
              {" "}
              nature
            </h3>
          </div>
        </div>
        {createPortal(
          <SectionScroller sections={sections}></SectionScroller>,
          document.body
        )}
      </motion.div>
      <Overlay hideOverlay={hideOverlay} overlay={overlay} />
    </div>
  );
};

export default HomePage;