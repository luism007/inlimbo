import React, { useEffect, useRef, useState } from "react";
import './Gallery.css';
const Gallery = (props) => {
    const [photoInView, setPhotoInView] = useState(props.photos[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    let interval = useRef(null);
  
    useEffect(() => {
          interval.current = setInterval(() => {
            console.log(props.photos);
              nextPhoto();
              clearInterval(interval);
          }, 3000);
  
          return () => {
              clearInterval(interval.current);
          }
  
    }, [currentIndex]);

    const setPhoto = (index) => {
        setCurrentIndex(index);
        setPhotoInView(props.photos[index]);
    }

    const nextPhoto = () => {
        let index = currentIndex;
        index += 1;
        if(index >= props.photos.length) {
            index = 0;
        }
        console.log(index);
        setPhoto(index);
    }

    const prevPhoto = () => {
        let index = currentIndex;
        index -= 1;
        if(index < 0) {
            index = props.photos.length - 1;
        }
        setPhoto(index);
    }

    return (
        <div className="overlay-container">
          <div className="overlay-preview-container">
            <div className="overlay-pic-showcase-container">
                <div className="overlay-gallery-button-left">
                    <button onClick={prevPhoto}> prev </button>
                </div>
                <div className="overlay-pic-showcase">
                    <img className="overlay-pic" src = {photoInView.source}></img>
                </div>
                <div className="overlay-gallery-button-right">
                    <button onClick={nextPhoto}> next </button>
                </div>
            </div>
            <div className="overlay-pic-grid-container">
              <ul className="overlay-pics-container">
                {props.photos.map((photo, index) => {
                  return (
                    <li
                      key={index}
                      id={`grid-photo-${index}`}
                      className="grid-photo-list-item"
                    >
                      <img src={photo.source} className = "grid-photo"></img>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="overlay-pic-description-container">
            <p className="overlay-pic-description"></p>
          </div>
        </div>
    )
}

export default Gallery;