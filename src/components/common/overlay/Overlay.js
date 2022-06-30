import React, { useEffect } from "react";
import './Overlay.css';
const Overlay = (props) => {

    useEffect(() => {

    }, []);

    const getRelatedPics = () => {

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