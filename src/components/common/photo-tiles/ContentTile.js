import React, { useEffect } from "react";
import './ContentTile.css';
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
import ImageComponent from "../image/ImageComponent";
import '../../../web-responsive.css';
import { motion } from "framer-motion";
const ContentTile = (props) => {
  useEffect(()=>{
  }, [props])

  const content = props.content;
    return (
      <div className="tile-container">
        <div className={props.custom ? "tile custom" : "tile"} id="tileBlock">
          <div className = { props.grid_style ? `tile-grid ${props.grid_style}` : 'tile-grid grid-1-by-2' }>
            {props.contents.map((con, index) => {
              return <ImageComponent {...con} key={index} objectFit = {'contain'}></ImageComponent>;
            })}
            <motion.p 
            initial = { props?.initalAnimation }
            animate = { props?.animation }
            exit = { props?.exitAnimation }
            transition={ props?.transitionAnimation }
            className="content-title">
              {props.title}
            </motion.p>
            <p className="content-link"> view more </p>
          </div>
        </div>
      </div>
    );
};

export default ContentTile;