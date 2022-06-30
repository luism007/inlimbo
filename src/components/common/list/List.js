import React, { useEffect, useState } from "react";
import Spinner from "../loading/Spinner";
import PhotoTiles from "../photo-tiles/PhotoTiles";
import './List.css'

const List = (props) => {

  useEffect(() => {
    if(props.loading) { 
       const spinner = document.getElementById('spin');
       spinner.scrollIntoView({behavior: 'smooth', block: 'end'});
    } else { 
      const focusedId = `tile-${props.offset}`;
      const tile = document.getElementById(focusedId);
      (tile) ? tile.scrollIntoView({behavior: 'smooth', block: 'end'}) : null;
    }
  });

  const showMore = () => { 
    props.showMoreCallback();
  }
  
    return (
      <div className="list-container">
        <ul className="list-item-container" id = "list">
          {" "}
          {props.items.map((item, index) => {
            return (
              <li key={index} id = {`tile-${index}`} className="list-item">
                <PhotoTiles {...item}></PhotoTiles>
              </li>
            );
          })}{" "}
        </ul>
        { props.loading ? <Spinner/> : 
        <span id = "showMoreButton" onClick={ showMore }>
          <img src="public/images/dropdown-logo-light.png">
            </img></span> }
      </div>
    );
}

export default List;