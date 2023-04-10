import React, { useEffect } from "react";
import "./PhotoTiles.css";
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
import ImageComponent from "../image/ImageComponent";

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
         <ImageComponent {...props} ></ImageComponent>
       </div>
     </div>
    );
};

export default PhotoTiles;