import React, { useEffect, useRef, useState } from "react";
import './Gallery.css';
const Gallery = (props) => {
    const [photoInView, setPhotoInView] = useState(props.photo);
    const [currentIndex, setCurrentIndex] = useState(props.startIndex);
    const fadeInKeyframes = [
        {
            display: 'none',
            opacity: 0
        },
        {
            display: 'block',
            opacity: 1
        }
    ];
    const fadeInOptions =  {
        duration: 1000,
        easing: 'ease-in-out'
    }
    let interval = useRef(null);
  
    useEffect(() => {
        animateActivePhoto();
          interval.current = setInterval(() => {
              nextPhoto();
              clearInterval(interval);
          }, 3000);
  
          return () => {
              clearInterval(interval.current);
          }
  
    }, [currentIndex, photoInView, props.photos]);

    const animateActivePhoto = () => {
        let active = document.getElementById('active-photo');
        active.animate(fadeInKeyframes, fadeInOptions);
    }

    const setPhoto = (index) => {
        setCurrentIndex(index);
        const element = document.getElementById(`grid-photo-${index}`);       
        animateActivePhoto();
        element.classList.add(['focused-el']);
        setPhotoInView(props.photos[index]);
    }

    const nextPhoto = () => {
        let index = currentIndex;
        const element = document.getElementById(`grid-photo-${index}`);
        element.classList.remove(['focused-el']);
        index += 1;
        if(index >= props.photos.length) {
            index = 0;
        }
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
            <div className="gallery-hide-button-container">
              <span className="close-btn"><img src="public/images/close-x.png" onClick={props.closeOverlay}></img></span>
            </div>
            <div className="overlay-gallery-button-left">
              <span><img src = "public/images/left-arrow.png" onClick={prevPhoto}></img></span>
            </div>
            <div className="overlay-pic-showcase">
              <img
                className="overlay-pic"
                id="active-photo"
                src={photoInView.source}
              ></img>
            </div>
            <div className="overlay-gallery-button-right">
            <span><img src = "public/images/right-arrow.png" onClick={nextPhoto}></img></span>
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
                    onClick={() => {
                      setPhoto(index);
                    }}
                  >
                    <img src={photo.source} className="grid-photo"></img>
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
    );
}

export default Gallery;