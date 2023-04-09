import React, { useEffect } from "react";
import "./PhotoTiles.css";
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
import Image from "../image/Image";

const PhotoTiles = (props) => {
  useEffect(()=>{
  }, [props])

  const focusOnPicture = () => {
    PictureCommunicationService.updatePictureSubject(props);
  }
    return (
     <div className="tile-container">
       <div className="tile" id = "tileBlock">
         {/* <img id = {props.id} src = {props.source} loading = "lazy" height= "300px" width = "500px" onClick={focusOnPicture} className = "imageTile"></img> */}
         <Image {...props} ></Image>
       </div>
     </div>
    );
};

export default PhotoTiles;