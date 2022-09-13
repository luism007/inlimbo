import React, { useEffect, useRef, useState } from "react";
import PictureCommunicationService from "../../../rxjs-services/picture-service";
import * as photosApi from '../../../api/PhotosApi';
import Spinner from "../loading/Spinner";
import './Gallery.css';
const Gallery = (props) => {
  
    const [gridPhotos, setGridPhotos] = useState([]);
    const [photoInView, setPhotoInView] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
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
    let subscription$;

    useEffect(() => {
       subscription$ =
         PictureCommunicationService.getPictureSubject().subscribe((p) => {
           setPhotoInView(p);
           animateActivePhoto();
           getRelatedPics(p);
         });

          interval.current = setInterval(() => {
              nextPhoto();
              clearInterval(interval);
          }, 3000);

          return () => {
              clearInterval(interval.current);
              subscription$.unsubscribe();
          }
    }, [currentIndex, photoInView, gridPhotos]);

    const animateActivePhoto = () => {
        let active = document.getElementById('active-photo');
        (active) ? active.animate(fadeInKeyframes, fadeInOptions) : null;
    }

    const setPhoto = (index) => {
        setCurrentIndex(index);
        const element = document.getElementById(`grid-photo-${index}`);  
        animateActivePhoto();
        (element) ? element.classList.add(['focused-el']) : null;
        setPhotoInView(gridPhotos[index]);
    }

    const nextPhoto = () => {
        let index = currentIndex;
        const element = document.getElementById(`grid-photo-${index}`);
        (element) ? element.classList.remove(['focused-el']) : null;
        index += 1;
        if(index >= gridPhotos.length) {
            index = 0;
        }
        setPhoto(index);
    }

    const prevPhoto = () => {
        let index = currentIndex;
        index -= 1;
        if(index < 0) {
            index = gridPhotos.length - 1;
        }
        setPhoto(index);
    }

    const configureStart = (photos, photo) => {
      const index = photos.findIndex((p) => {
          return (p.source === photo.source);
      });
      setGridPhotos([photo, ...photos])
      setCurrentIndex(index);
  }

  const getRelatedPics = async (photo) => {
      const photos = await photosApi.getPhotosByCollectionId(photo.collection_id);
      if (!isObjectEmpty(photo)) {
        const possibleDuplicates = photos.filter((p) => p.source === photo.source);
        possibleDuplicates.length < 1
          ? configureStart(photos, photo)
          : setGridPhotos(photos), setCurrentIndex(0);
      }
  }

  const isObjectEmpty = (obj) => {
    let val = false;

    if(obj === null || obj === undefined) { 
      val = true;
    } else if (Object.keys(obj).length === 0) {
      val = true;
    }
    return val;
  };

    return (
      <div className="overlay-container">
        <div className="overlay-preview-container">
          <div className="overlay-pic-showcase-container">
            <div className="gallery-hide-button-container">
              <span className="close-btn"><img src="public/images/close-x.svg" onClick={props.closeOverlay}></img></span>
            </div>
            <div className="overlay-gallery-button-left">
              <span><img src = "public/images/left-arrow.svg" onClick={prevPhoto}></img></span>
            </div>
            <div className="overlay-pic-showcase">
             { (photoInView) ? 
              <img
                className="overlay-pic"
                id="active-photo"
                src={photoInView.source}
              ></img> : <Spinner></Spinner>
              }
            </div>
            <div className="overlay-gallery-button-right">
            <span><img src = "public/images/right-arrow.svg" onClick={nextPhoto}></img></span>
            </div>
          </div>
          <div className="overlay-pic-grid-container">
            <ul className="overlay-pics-container">
              {gridPhotos.map((photo, index) => {
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