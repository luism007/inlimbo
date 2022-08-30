import React, { useEffect } from "react";
import "./PhotoTiles.css";
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
const PhotoTiles = (props) => {

  useEffect(()=>{
    animateTile();
  })

  const animateTile = () => {
    const tile = document.getElementById("tileBlock");
    tile.classList.add("enter");
  }
  const focusOnPicture = () => {
    PictureCommunicationService.updatePictureSubject(props);
  }
    return (
     <div className="tile-container">
       <div className="tile" id = "tileBlock">
         <img src = {props.source} loading = "lazy" height= "300px" width = "500px" onClick={focusOnPicture}></img>
       </div>
     </div>
    );
};

export default PhotoTiles;