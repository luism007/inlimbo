import React, {useCallback, useEffect, useState} from 'react';
import PictureCommunicationService from '../../../rxjs-services/picture-service';
import "./ImageComponent.css";
const ImageComponent = (props) => {

    const [imgSrc, setImgSrc] = useState(props.lowres_source || "");
    const [loading, setLoading] = useState(true);
    const downloadingImg = new Image();
    
    const onImgLoad = useCallback(() => {
        const img = document.getElementById("${props.id}-img");
        console.log('Img', img);
        img.classList.remove("isLoading");
        setLoading(false);
    });
    const downloadingImgLoad = useCallback(() => {
        setImgSrc(downloadingImg.src);
    })


    useEffect(() =>{
        const img = document.getElementById("${props.id}-img");
        img.addEventListener("load", onImgLoad);
        downloadingImg.src = props.source;
        downloadingImg.addEventListener("load", downloadingImgLoad);

        return () => {
            img.removeEventListener("load", onImgLoad);
            downloadingImg.removeEventListener("load", downloadingImgLoad);
        }
    }, [props.source, imgSrc, loading])

    const focusOnPicture = () => {
        PictureCommunicationService.updatePictureSubject(props);
    }
    return (
        <div className="imgContainer">
            <img id = "${props.id}-img" alt = {props.title} src = {imgSrc} loading = "lazy" height= "300px" width = "500px" className = "imageTile isLoading" onClick={focusOnPicture}></img> 
            { loading ? <div id="spin"></div> : null} 
        </div>

    )
};

export default ImageComponent;