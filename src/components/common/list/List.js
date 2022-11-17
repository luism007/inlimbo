import React, { useEffect, useState } from "react";
import Spinner from "../loading/Spinner";
import PhotoTiles from "../photo-tiles/PhotoTiles";
import { 
  fadeInKeyframes, 
  fadeInOptions,
  slideUpKeyframes,
  slideUpKeyFrameOptions
} from "../../../models/AnimationsModel";
import './List.css'

const List = (props) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let calcOffset = offset
    let delayCounter = 1;
    for(let i = offset; i < props.items.length; i++) {
      animateTile(i, delayCounter * 200);
      delayCounter += 1;
      calcOffset += 1;
    }
    setOffset(calcOffset);
  }, [props.items]); 
  const showMore = () => { 
    props.showMoreCallback();
  }

  const animateTile = (index, delay) => {
      setTimeout(()=>{
        const tile = document.getElementById(`tile-${index}`);
        tile.classList.add('fadein')
      }, delay);
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