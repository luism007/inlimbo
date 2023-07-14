import React, {useEffect, useState} from "react";
import { fadeInKeyframes, fadeInOptions } from "../../../models/AnimationsModel";
import ImageComponent from "../image/ImageComponent";
import './MiniGallery.css';
const MiniGallery = (props) => {
    const [focusedPhoto, setFocusedPhoto] = useState(null);
    useEffect(() => {
       updateFocusedPhoto(props.photoInView);
    })
    const updateFocusedPhoto = (newPhoto) => {
        const oldPhoto = focusedPhoto;
        if (oldPhoto !== null && oldPhoto !== undefined) {
          const miniGallery = document.getElementsByClassName('grid-photo-list-item');
          if(miniGallery !== null) {
            for (let p = 0; p < miniGallery.length; p++) {
                miniGallery.item(p).classList.remove('focused-el');
            }
          }
        }
        const elementNewPhoto = document.getElementById(`grid-photo-${newPhoto._id}`);
        if (elementNewPhoto !== null) {
            elementNewPhoto.classList.add("focused-el");
            setFocusedPhoto(newPhoto);
        }
    }
    return(
        <div className = "mini-gallery-grid-container">
            <ul className="mini-gallery-container" id = "miniGallery">
                {props.photos.map((photo, index) => {
                    return(
                        <li
                            key = {index}
                            id = {`grid-photo-${photo._id}`}
                            className = "grid-photo-list-item"
                            onClick={() => {
                                props.setPhoto(index);
                            }}>
                            <ImageComponent id  = {photo._id + '-mini-gallery'} title = {photo.title} lowres_source = {photo.lowres_source} source = {photo.source} skeleton = {true} objectFit = {'cover'}></ImageComponent>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
} 

export default MiniGallery;