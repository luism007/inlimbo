import React, { useEffect, useState } from "react";
import Spinner from "../loading/Spinner";
import PhotoTiles from "../photo-tiles/PhotoTiles";
import './List.css'

const List = (props) => {
  
  const showMore = () => { 
    props.showMoreCallback();
  }
  
    return (
      <div className="list-container">
        <ul className="list-item-container" id = "list">
          {" "}
          {props.items.map((item, index) => {
            return (
              <li key={index} id = {`tile-${index}`} className="list-item" onClick={props.showOverlay}>
                <PhotoTiles {...item}></PhotoTiles>
              </li>
            );
          })}{" "}
        </ul>
        { props.loading ? <Spinner/> : 
        <span id = "showMoreButton" onClick={ showMore }>
          <img src="public/images/dropdown-logo.png">
            </img></span> }
      </div>
    );
}

export default List;