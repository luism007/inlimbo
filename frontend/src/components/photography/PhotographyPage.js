import React, {useEffect, useState} from "react";
import List from "../common/list/List";
import Overlay from "../common/overlay/Overlay";
import './PhotographyPage.css';
import * as photosApi from '../../api/PhotosApi';
import { PhotoModel } from "../../models/PhotoModel";
import { motion } from "framer-motion";
const PhotographyPage = () => {
    useEffect(() => {
        retrievePhotos(0, 10);
    }, [picList])

    const [loading, setLoading] = useState(true);
    const [picList, setPicList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [overlay, setOverlay] = useState(false);


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
          pic.collection_id)});
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
                initial = {{y: '100%', opacity: 0.5}}
                animate = {{y: 0, opacity: 1}}
                exit= {{y: '100%', opacity: 0.5}}
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
      </div>
    );
};

export default PhotographyPage; 