import React, {useCallback, useEffect, useState} from 'react';
import PictureCommunicationService from '../../../rxjs-services/picture-service';
import "./Image.css";
const Image = (props) => {

    const [lowResImg, setLowResImg] = useState(props.lowres_source);
    const [hiResImg, setHiResImg] = useState(props.source);
    const [loading, setLoading] = useState(true);
    
    const onLoadLowRes = useCallback(() => {
        setLoading(false);
    }, [props.source]);

    const onLoadHiRes = useCallback(() => {
        console.log('Get Hi Res img!!!!');
    }, [props.source])

    useEffect(() =>{
        const lowResImg = document.getElementById("${props.id}-low");
        const hiResImg = document.getElementById("${props.id}-hi");
        lowResImg.classList.add('isLoading');
        lowResImg.addEventListener("load", onLoadLowRes);
        hiResImg?.addEventListener("load", onLoadHiRes);
        return () => {
            lowResImg.removeEventListener("load", onLoadLowRes);
            hiResImg?.removeEventListener("load", onLoadHiRes);
        }
    }, [props.source, loading, onLoadLowRes, onLoadHiRes])

    const focusOnPicture = () => {
        PictureCommunicationService.updatePictureSubject(props);
    }
    return (
        <div>
       <img id = "${props.id}-low" alt = {props.title} src = {lowResImg} loading = "lazy" height= "300px" width = "500px" className = "imageTile" onClick={focusOnPicture}></img>
       <img id = "${props.id}-hi" alt = {props.title} src = {hiResImg} loading = "lazy" height= "300px" width = "500px" className = "imageTile" onClick={focusOnPicture}></img> 
        </div>
    )
};

export default Image;