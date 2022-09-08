import React, { useEffect, useRef, useState } from "react";
import * as photosApi from '../../../api/PhotosApi';
import Gallery from '../../common/gallery/Gallery';
import PictureCommunicationService from '../../../rxjs-services/picture-service';
import './Overlay.css';

const Overlay = (props) => {

    const [gridPhotos, setGridPhotos] = useState([]);
    const [photo, setPhoto] = useState({});
    const [startIndex, setStartIndex] = useState(0);

    let subscription$;

    useEffect(() => {
        (props.overlay) ? slideUp() : null;
        subscription$ = PictureCommunicationService
        .getPictureSubject()
        .subscribe((picture) => {
            if(picture) { 
                setPhoto({...picture}); 
            }
        });
        getRelatedPics();
        return () => {
            subscription$.unsubscribe();
        }
    },[photo]);

    const getRelatedPics = async () => {
        const photos = await photosApi.getPhotosByCollectionId(photo.collection_id);
        if (!isObjectEmpty(photo)) {
          const possibleDuplicates = photos.filter((p) => p.source === photo.source);
          possibleDuplicates.length < 1
            ? configureStart(photos, photo)
            : setGridPhotos(photos);
        }
    }

    const configureStart = (photos, photo) => {
        const index = photos.findIndex((p) => {
            return (p.source === photo.source);
        });
        setGridPhotos([photo, ...photos])
        setStartIndex(index);
    }

    const isObjectEmpty = (obj) => {
        return (Object.keys(obj).length === 0);
    }

    const slideUp = () => {
        const overlay = document.getElementById('overlay');
        if (overlay) { 
            if(overlay.classList.contains('down')) {
                overlay.classList.remove('down');
            }
            overlay.classList.toggle('up');
        }
    }

    const slideDown = () => {
        const overlay = document.getElementById('overlay');
        if (overlay) { 
            if(overlay.classList.contains('up')) {
                overlay.classList.remove('up');
            }
            overlay.classList.toggle('down');
        }
    }

    const closeOverlay = () => {
        slideDown();
        props.hideOverlay(); 
    }

    return (
      (
        <div id="overlay" className="overlay-wrapper">
          <button onClick={closeOverlay}>Hide</button>
          {gridPhotos.length > 0 && (
            <Gallery
              photos={gridPhotos}
              photo={photo}
              startIndex={startIndex}
            ></Gallery>
          )}
        </div>
      )
    );

}

export default Overlay;