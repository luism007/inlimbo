import React, { useEffect } from "react";
import "./PhotoTiles.css";
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
import { 
  fadeInKeyframes, 
  fadeInOptions,
  slideUpKeyframes,
  slideUpKeyFrameOptions
} from "../../../models/AnimationsModel";
const PhotoTiles = (props) => {
  useEffect(()=>{
    animateTile();
  }, [props])
  const animateTile = () => {
   const tile = document.getElementById(props.id);
   tile?.animate(fadeInKeyframes, fadeInOptions);
  }
  const focusOnPicture = () => {
    PictureCommunicationService.updatePictureSubject(props);
  }
    return (
     <div className="tile-container">
       <div className="tile" id = "tileBlock">
         <img id = {props.id} src = {props.source} loading = "lazy" height= "300px" width = "500px" onClick={focusOnPicture} className = "imageTile"></img>
       </div>
     </div>
    );
};

export default PhotoTiles;