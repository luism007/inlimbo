import React, { useEffect } from "react";
import './ContentTile.css';
import PictureCommunicationService from '../../../rxjs-services/picture-service.js'
import ImageComponent from "../image/ImageComponent";

const ContentTile = (props) => {
  useEffect(()=>{
    console.log(props.content);
  }, [props])

  const content = props.content[0];
  console.log(content);
    return (
     <div className="tile-container">
       <div className="tile" id = "tileBlock">
         <ImageComponent {...content}></ImageComponent>
         <p className="content-title"> {props.title }</p>
       </div>
     </div>
    );
};

export default ContentTile;