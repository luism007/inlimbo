import React, { useEffect } from "react";
import "./PhotoTiles.css";
const PhotoTiles = (props) => {

  useEffect(()=>{
    animateTile();
  })

  const animateTile = () => {
    const tile = document.getElementById("tileBlock");
    tile.classList.add("enter");
  }
    return (
     <div className="tile-container">
       <div className="tile" id = "tileBlock">
         <img src = {props.source}></img>
         <p className = "tile-label"> {props.title} </p>
       </div>
     </div>
    );
};

export default PhotoTiles;