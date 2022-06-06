import React, { useEffect } from "react";
import "./PhotoTiles.css";
const PhotoTiles = () => {

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
         <img src = "../../../public/images/press-coffee-phx-az.jpg"></img>
       </div>
     </div>
    );
};

export default PhotoTiles;