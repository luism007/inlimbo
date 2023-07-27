import React, { useEffect } from "react";
import './ContentTile.css';
import ImageComponent from "../image/ImageComponent";
import '../../../web-responsive.css';
import { motion } from "framer-motion";
import PictureCommunicationService from "../../../rxjs-services/picture-service";
const ContentTile = (props) => {
  useEffect(()=>{
  }, [props])

  const showOverlay = () => {
    PictureCommunicationService.updatePictureSubject(props.contents[0]);
    props.showOverlay();
  }

    return (
      <div className="tile-container">
        <div className={props.custom ? "tile custom" : "tile"} id="tileBlock">
          <div
            className={
              props.grid_style
                ? `tile-grid ${props.grid_style}`
                : "tile-grid grid-1-by-2"
            }
          >
            {props.contents.map((con, index) => {
              return (
                <ImageComponent
                  {...con}
                  key={index}
                  objectFit={"cover"}
                ></ImageComponent>
              );
            })}
            <motion.p
              initial={props?.initalAnimation}
              animate={props?.animation}
              exit={props?.exitAnimation}
              transition={props?.transitionAnimation}
              className="content-title"
            >
              {props.title}
            </motion.p>
            <p className="content-link" onClick={showOverlay}> view more </p>
          </div>
        </div>
      </div>
    );
};

export default ContentTile;