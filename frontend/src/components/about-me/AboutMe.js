import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';
import luisPhotographyPicture from '../../assets/luis-riverside-monochrome-mist-2.png';
import Footer from '../common/footer/Footer';
const AboutMe = () => { 
    return (
      <motion.div
      className='about-me-container'
      initial = {{transform: 'translateY(100%)', opacity: 0.5}}
      animate = {{transform: 'translateY(0%)', opacity: 1}}
      transition={{ duration: 1.5}}
      >
        <div className='about-me-wrapper'>
          <div className="container">
            <div className='luis-picture'></div>
          </div>
          <div className='container'>
            <h2 className='about-me-header'> Luis G M. </h2>
          </div>
          <div className='container'>
            <p className="about-me-description">
                Hello, my name is Luis and as you&apos;ve probably already noticed, photography is a huge passion of mine. 
                It was during the pandemic of 2020, where this excuse to just get out of the house gradually became something way more than just an excuse. 
                That year taught me to appreciate every moment because everything can change in an instant.
                To me, one of the best ways to appreciate it was to also capture it if possible, because I really believe reminiscing is our best way of timetravel - yet.
              </p>
          </div>
          <div className='container'>
            <div className="button-wrapper">
                  <p className="button-text"> contact me </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
}

export default AboutMe;