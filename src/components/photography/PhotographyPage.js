import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import  Spinner  from '../../components/common/loading/Spinner';
import DropdownComponent from "../common/dropdown/Dropdown";
import List from "../common/list/List";
import Overlay from "../common/overlay/Overlay";
import './PhotographyPage.css';
import * as photosApi from '../../api/PhotosApi';
import { PhotoModel } from "../../models/PhotoModel";

const PhotographyPage = () => {
    useEffect(() => {
        retrievePhotos(0, 10);
    }, [picList])

    const [loading, setLoading] = useState(true);
    const [picList, setPicList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [overlay, setOverlay] = useState(false);
    const types = ['all', 'nature', 'portrait', 'urban'];

    const captureSelectedOption = (option) => {
        console.log(option);
    }

    const retrievePhotos = async(offset, limit) => {
      setLoading(true);
      setTimeout(async() => { 
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
      }, 5000);

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
          <div className="items-container">
            <div className="dropdown-container">
              <DropdownComponent
                options={types}
                label="Select Photos"
                callback = { captureSelectedOption }
              ></DropdownComponent>
            </div>
            <List 
            items={picList} 
            showMoreCallback = {showMore} 
            loading = {loading}
            offset = {offset}
            showOverlay = {showOverlay}
            />
          </div>
          <Overlay hideOverlay = {hideOverlay} overlay = {overlay}/>
      </div>
    );
};

export default PhotographyPage; 