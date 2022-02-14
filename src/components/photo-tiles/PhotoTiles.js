import React from "react";
import "./PhotoTiles.css";
const PhotoTiles = () => {
    return (
      <div className="photo-grid-container">
        <div className="photo-grid-left">
          <div className="photo-grid"></div>
        </div>
        <div className="photo-grid-right">
          <div className="photo-grid"></div>
          <div className="photo-grid"></div>
        </div>
      </div>
    );
};

export default PhotoTiles;