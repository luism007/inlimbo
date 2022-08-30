import React, { useEffect, useRef, useState } from "react";
import * as photosApi from '../../../api/PhotosApi';
import Gallery from '../../common/gallery/Gallery';
import PictureCommunicationService from '../../../rxjs-services/picture-service';
import './Overlay.css';
const Overlay = (props) => {

    const [gridPhotos, setGridPhotos] = useState([]);
    const [photo, setPhoto] = useState({});
    let subscription$;
    useEffect(() => {
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
        setGridPhotos(photos);
    }

 

    return (
      props.overlay && (
        <div id="overlay" className="overlay-wrapper">
          <button onClick={props.hideOverlay}>Hide</button>
          {gridPhotos.length > 0 && <Gallery photos={gridPhotos} photo = {photo}></Gallery>}
        </div>
      )
    );

}

export default Overlay;