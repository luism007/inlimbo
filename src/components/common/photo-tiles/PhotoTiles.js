import React, { useEffect } from "react";
import "./PhotoTiles.css";
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
import ImageComponent from "../image/ImageComponent";

const PhotoTiles = (props) => {
  useEffect(()=>{
  }, [props])

    return (
     <div className="tile-container">
       <div className="tile" id = "tileBlock">
         <ImageComponent {...props} ></ImageComponent>
       </div>
     </div>
    );
};

export default PhotoTiles;