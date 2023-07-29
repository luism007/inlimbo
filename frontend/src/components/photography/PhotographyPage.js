import React, {useEffect, useState} from "react";
import List from "../common/list/List";
import Overlay from "../common/overlay/Overlay";
import './PhotographyPage.css';
import * as photosApi from '../../api/PhotosApi';
import { PhotoModel } from "../../models/PhotoModel";
import { motion } from "framer-motion";
import ToastComponent from "../common/toast/Toast";
const PhotographyPage = () => {
    useEffect(() => {
        retrievePhotos(0, 10);
    }, [picList, overlay, loading, offset])

    const [loading, setLoading] = useState(true);
    const [picList, setPicList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [overlay, setOverlay] = useState(false);
    const [toast, setToast] = useState(false);


    const retrievePhotos = async(offset, limit) => {
      setLoading(true);

        let pics = await photosApi.getPhotosByOffset(offset, limit);
        pics = pics.map((pic) => { return new PhotoModel(
          pic._id, 
          pic.source,
          pic.lowres_source,
          pic.title,
          pic.description,
          pic.type,
          pic.collection_id,
          pic.photo_meta_data
        )});

        if(pics.length < 1) { 
          setToast(true);
        }

        setPicList([...picList, ...pics]);
        const totalLen = picList.length + pics.length;
        setOffset(totalLen);
        setLoading(false); 


    }

    const showMore = () => {
      const photosOnScreenAmt = picList.length;
      const calcOffset = photosOnScreenAmt / 10; 
      retrievePhotos(calcOffset, 10);
    }

    const hideOverlay = () => {
      setOverlay(false);
    }

    const showOverlay = () =>{
      setOverlay(true);
    }

    

    return (
      <div className="photography-container">
        
          <motion.div className="items-container"
                initial = {{transform: 'translateY(100%)', opacity: 0.5}}
                animate = {{transform: 'translateY(0%)', opacity: 1}}
                exit= {{transform: 'translateY(0%)', opacity: 0.5}}
                transition={{duration: 1.5}}
          >
            <List 
            items={picList} 
            showMoreCallback = {showMore} 
            loading = {loading}
            offset = {offset}
            showOverlay = {showOverlay}
            />
          </motion.div>
          <Overlay hideOverlay = {hideOverlay} overlay = {overlay}/>
         <ToastComponent message = { 'Looks like that\'s all for now ... Please check again later!' } state = {toast}></ToastComponent>
      </div>
    );
};

export default PhotographyPage; 