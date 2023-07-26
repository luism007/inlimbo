import React, { useEffect, useRef, useState } from "react";
import PictureCommunicationService from "../../../rxjs-services/picture-service";
import * as photosApi from '../../../api/PhotosApi';
import Spinner from "../loading/Spinner";
import './Gallery.css';
import MiniGallery from "../mini-gallery/MiniGallery";
import { fadeInKeyframes, fadeInOptions } from "../../../models/AnimationsModel";
const Gallery = (props) => {
  
    const [gridPhotos, setGridPhotos] = useState([]);
    const [photoInView, setPhotoInView] = useState(null);
    const [galleryState, setGalleryState] = useState('pause');
    const [currentIndex, setCurrentIndex] = useState(0);
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
            if(galleryState === 'play') {
              nextPhoto();
              clearInterval(interval);
            }
          }, 3000);

          return () => {
              clearInterval(interval.current);
              subscription$.unsubscribe();
          }
    }, [currentIndex, photoInView, gridPhotos, galleryState]);

    const play = () => {
      setGalleryState('play');
    }
    const pause = () => {
      setGalleryState('pause');
    }

    const viewMiniGallery = () => {
      const mini = document.getElementById('miniGallery');
      mini.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    const animateActivePhoto = () => {
        let active = document.getElementById('active-photo');
        (active) ? active.animate(fadeInKeyframes, fadeInOptions) : null;
    }


    const setPhoto = (index) => {
        setCurrentIndex(index);
        animateActivePhoto();
        setPhotoInView(gridPhotos[index]);
    }

    const nextPhoto = () => {
        let index = currentIndex;
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
      let index = photos.findIndex((p) => {
          return (p._id === photo._id);
      });
      index = (index < 0) ? 0 : index;
      setGridPhotos([photo, ...photos])
      setCurrentIndex(index);
  }

  const getRelatedPics = async (photo) => {
      const photos = await photosApi.getPhotosByCollectionId(photo.collection_id, photo.id);
      configureStart(photos, photo);
  }

  const close = () => {
    setGalleryState('pause');
    props.closeOverlay();
  }

    return (
      <div className="overlay-container">
        <div className="overlay-preview-container">
          <div className="overlay-pic-showcase-container">
            <div className="gallery-hide-button-container">
              <span className="close-btn">
                <img
                  src="images/close-x.svg"
                  onClick={close}
                ></img>
              </span>
            </div>
            <div className="overlay-pic-showcase">
              {photoInView ? (
                <img
                  className="overlay-pic"
                  id="active-photo"
                  src={photoInView.source}
                ></img>
              ) : (
                <Spinner></Spinner>
              )}
              <div className="gallery-control-container">
                <div className="overlay-gallery-button-left">
                  <span>
                    <img
                      src="images/left-arrow.svg"
                      onClick={prevPhoto}
                    ></img>
                  </span>
                </div>
                {galleryState === "play" ? (
                  <img
                    src="images/pause-button.svg"
                    onClick={pause}
                  ></img>
                ) : (
                  <img src="images/play-button.svg" onClick={play}></img>
                )}
                <img src ="images/gallery-icon.svg" onClick={viewMiniGallery}></img>
                <div className="overlay-gallery-button-right">
                  <span>
                    <img
                      src="images/right-arrow.svg"
                      onClick={nextPhoto}
                    ></img>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {photoInView && gridPhotos && (
            <MiniGallery
              photos={gridPhotos}
              photoInView={photoInView}
              setPhoto={setPhoto}
            ></MiniGallery>
          )}
        </div>
      </div>
    );
}

export default Gallery;