import React, { useEffect, useState } from "react";
import PhotoTiles from "../photo-tiles/PhotoTiles";
import './List.css'

const List = (props) => {

  const showMore = () => { 
    props.showMoreCallback();
  }
  
    return (
      <div className="list-container">
        <ul className="list-item-container">
          {" "}
          {props.items.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <PhotoTiles {...item}></PhotoTiles>
              </li>
            );
          })}{" "}
        </ul>
        <button id = "showMoreButton" onClick={ showMore }> Show More </button>
      </div>
    );
}

export default List;