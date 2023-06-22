import React, {useCallback, useEffect, useState} from 'react';
import PictureCommunicationService from '../../../rxjs-services/picture-service';
import "./ImageComponent.css";
const ImageComponent = (props) => {

    const [imgSrc, setImgSrc] = useState(props.lowres_source || "");
    const [loading, setLoading] = useState(true);
    
    const onImgLoad = useCallback(() => {
        const blurDiv = document.getElementById(props.id);
        blurDiv.classList.add("loaded");
    });


    useEffect(() =>{
        const img = document.getElementById(`${props.id}-img`);
        img.addEventListener("load", onImgLoad);


        return () => {
            img.removeEventListener("load", onImgLoad);
        }
    }, [props.source, imgSrc, loading])

    const focusOnPicture = () => {
        PictureCommunicationService.updatePictureSubject(props);
    }
    return (
        <div className="blur-container" id = {props.id} style = {{ backgroundImage: `url(${props.lowres_source})` }} >
            <img className = "imageTile"  id = {`${props.id}-img`} alt = {props.title} src = {props.source} loading = "lazy" height= "300px" width = "500px" onClick={focusOnPicture}></img> 
        </div>
    )
};

export default ImageComponent;