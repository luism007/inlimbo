import React, {useEffect, useState} from "react";
import './MiniGallery.css';
const MiniGallery = (props) => {
    return(
        <div className = "mini-gallery-grid-container">
            <ul className="mini-gallery-container">
                {props.photos.map((photo, index) => {
                    return(
                        <li
                            key = {index}
                            id = {`grid-photo-${index}`}
                            className = "grid-photo-list-item"
                            onClick={() => {
                                props.setPhoto(index);
                            }}>
                            <img src ={photo.source} className="mini-gallery-photo"></img>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
} 

export default MiniGallery;