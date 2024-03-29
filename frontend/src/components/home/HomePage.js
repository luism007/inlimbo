import React, { useEffect, useState }  from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
import '../../web-responsive.css';
import ImageComponent from "../common/image/ImageComponent";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useNavigate } from "react-router";
import Footer from "../common/footer/Footer";

const HomePage = () => {
const navigate = useNavigate();
let sectionObserver = new IntersectionObserver(sectionCallback, {threshold: 1});
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
  source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1692384618/london-atop-eye-monochrome_nnjhzu.jpg",
  lowres_source: "https://res.cloudinary.com/inlimbo-studios/image/upload/v1688153874/london-inlimbo-low-res_f8xycg.jpg",
  title: "London - No Logo",
  description: "Seeing Tower Bridge through the London Eye.",
  type: "preview",
  collection_id: "#preview",
  photo_meta_data: "Sony Alpha 7 IV 50mm f/3.5 1/1000",
  id: "64dfbe4e5e00d800d92e1f2d"
 }


 const photograpySections = (section) => {
  return (
    <div key={`${section?.id}-section`} className="homepage-content-photo-container">
      <ImageComponent {...section}></ImageComponent>
    </div>
  );
 } 


 useEffect(() => {

  const sections = document.querySelectorAll('.parallax-group');
  sections.forEach(section => {
    sectionObserver.observe(section);
  })
  return () => {
    sections.forEach(section => { sectionObserver.unobserve(section); });
  }
 }, [overlay]);


 function sectionCallback(entries){
  entries.forEach((entry) => {
    const section = entry;
    if(section?.target?.id !== 'welcome-section') { 
      const header = document.getElementById('inlimbo-header');
      header.style.backgroundColor = "rgba(0,0,0,0.8)";
      header.style.display = 'hidden';
    } else { 
      const header = document.getElementById('inlimbo-header');
      header.style.backgroundColor = "rgba(0,0,0,0)";
      header.style.display = 'flex';
    }
  });
 } 

  return (
    <motion.div
      initial={{ transform: "translateY(100%)", opacity: 0.5 }}
      animate={{ transform: "translateY(0%)", opacity: 1 }}
      className="parallax-layer"
    >
      <div className="parallax-group" id="welcome-section">
        <div className="background-section">
          <ImageComponent {...london}></ImageComponent>
        </div>
        <div className="welcome-section">
          <p className="welcome-text"> Welcome. </p>
          <p className="welcome-text"> Bienvenidos. </p>
          <p className="welcome-text"> Bem-venidos. </p>
        </div>
      </div>
      <div className="parallax-group">
        <div className="photography-section">
          {sections.map((section) => {
            return photograpySections(section);
          })}
          <div className="homepage-content-text-container">
            <h3 className="home-text"> Embracing Variety </h3>
            <p className="description-text">
              Welcome to my creative outlet INLIMBO ©. My goal is to showcase
              you at your best. Monochrome, color, inside, or out. People,
              places, it doesn&apos;t matter. I embrace all types of photography
              and excel in variety. Like any strong portfolio, diversification
              is key.
            </p>
            <div
              className="home-button-wrapper"
              onClick={() => {
                navigate("/photography");
              }}
            >
              <p className="home-button-text"> explore gallery </p>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-group">
        <div className="retouch-section">
          <div className="home-text-wrapper">
            <h3 className="home-text"> Unbounded Realization </h3>
          </div>
          <div className="home-img-comparison-slider-wrapper">
            <ImgComparisonSlider>
              <img
                className="slider-img"
                slot="first"
                src="https://res.cloudinary.com/inlimbo-studios/image/upload/v1692385052/matt-great-causeway_kyniwu.jpg"
              />
              <img
                className="slider-img"
                slot="second"
                src="https://res.cloudinary.com/inlimbo-studios/image/upload/v1692385069/matt-great-causeway-cutout_fdyyps.jpg"
              />
            </ImgComparisonSlider>
          </div>
          <div className="homepage-content-text-container">
            <p className="description-text">
              Photos are not only taken, but can be re-touched however you like.
              I&apos;m committed to get your vision across and to evoke the
              message you want. You want the perfect shot and so do I. So
              let&apos;s work together.
            </p>
            <div className="home-button-wrapper" onClick={() => navigate("/")}>
              <a
                className="home-button-text"
                href="mailto:inlimbo.photography@gmail.com?subject=Service%20Inquiry"
                target="_top"
              >
                contact me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-group footerGroup">
        <Footer></Footer>
      </div>
    </motion.div>
  );
};

export default HomePage;