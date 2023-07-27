import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';
import luisPhotographyPicture from '../../assets/luis-riverside-monochrome-mist-2.png';
const AboutMe = () => { 
    return (
      <motion.div
      initial = {{y: '100%', opacity: 0.5}}
      animate = {{y: 0, opacity: 1}}
      exit= {{y: '100%', opacity: 0.5}}
      transition={{duration: 2}}
      >
        <div className='about-me-wrapper'>
          <div className='luis-picture'></div>
          <h2 className='about-me-header'> Luis G M. </h2>
          <p className="about-me-description">
            Hi, my name is Luis and as you probably already noticed, I love taking pictures. 
            This newfound passion of mine spawned during the pandemic in 2020, where as you can probably relate, a lot was lost and even taken from our lives. 
            However like some poetic juxtaposition, we also found new things to love and look forward too. 
            In that state of being in limbo, I got inspired to go capture every moment and in doing so, appreciating it so much more.
            That&apos;s what I strive for in my photography: showcasing the very best of the subject at hand to then be appreciated. 
          </p>
        </div>
      </motion.div>
    );
}

export default AboutMe;