import React, { useEffect } from "react";
import * as photosApi from '../../../api/PhotosApi';
import './Overlay.css';
const Overlay = (props) => {

    useEffect(() => {
        getRelatedPics();
    }, []);

    const getRelatedPics = async () => {
        const photos = await photosApi.getPhotosByCollectionId('#sample_photos');
        console.log(photos);
    }

    return(
        <div id = "overlay" className="overlay-wrapper">
            <div className="overlay-container">
                <div className="overlay-preview-container">
                    <div className="overlay-pic-showcase-container"></div>
                    <div className="overlay-pic-grid-container"></div>
                </div>
                <div className="overlay-pic-description-container">
                    <p className="overlay-pic-description">

                    </p>
                </div>
            </div>
        </div>
    );

}

export default Overlay;