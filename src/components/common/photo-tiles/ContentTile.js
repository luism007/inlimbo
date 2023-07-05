import React, { useEffect } from "react";
import './ContentTile.css';
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
import ImageComponent from "../image/ImageComponent";
import '../../../web-responsive.css';

const ContentTile = (props) => {
  useEffect(()=>{
    console.log(props.content);
  }, [props])

  const content = props.content;
  console.log(content);
    return (
      <div className="tile-container">
        <div className={props.custom ? "tile custom" : "tile"} id="tileBlock">
          <div className = { props.grid_style ? `tile-grid ${props.grid_style}` : 'tile-grid grid-1-by-2' }>
            {props.contents.map((con, index) => {
              return <ImageComponent {...con} key={index}></ImageComponent>;
            })}
            <p className="content-title">{props.title}</p>
            <p className="content-link"> view more </p>
          </div>
        </div>
      </div>
    );
};

export default ContentTile;