import React, { useEffect, useRef, useState } from "react";
import * as photosApi from '../../../api/PhotosApi';
import Gallery from '../../common/gallery/Gallery';
import './Overlay.css';
const Overlay = (props) => {

    const [gridPhotos, setGridPhotos] = useState([]);

    useEffect(() => {
        getRelatedPics();
    }, []);

    const getRelatedPics = async () => {
        const photos = await photosApi.getPhotosByCollectionId('#antelope_cnyn_21');
        setGridPhotos(photos);
    }

 

    return (
      <div id="overlay" className="overlay-wrapper">
        <button onClick={props.hideOverlay}>Hide</button>
        {   gridPhotos.length > 0  && 
            <Gallery photos = {gridPhotos}></Gallery>
      }
      </div>
    );

}

export default Overlay;