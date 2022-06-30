import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import  Spinner  from '../../components/common/loading/Spinner';
import DropdownComponent from "../common/dropdown/Dropdown";
import List from "../common/list/List";
import './PhotographyPage.css';
import * as photosApi from '../../api/PhotosApi';

const PhotographyPage = () => {
    useEffect(() => {
        retrievePhotos(0, 10);
    }, [])

    const [loading, setLoading] = useState(true);
    const [picList, setPicList] = useState([]);
    const [offset, setOffset] = useState(0);
    const types = ['all', 'nature', 'portrait', 'urban'];

    const captureSelectedOption = (option) => {
        console.log(option);
    }

    const retrievePhotos = async(offset, limit) => {
      setLoading(true);
      setTimeout(async() => { 
        const pics = await photosApi.getPhotosByOffset(offset, limit);
        setLoading(false); 
        setPicList([...picList, ...pics]);
        const totalLen = picList.length + pics.length;
        setOffset(totalLen);
      }, 5000);

    }

    const showMore = () => {
      const photosOnScreenAmt = picList.length;
      const calcOffset = photosOnScreenAmt / 10; 
      retrievePhotos(calcOffset, 10);
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
            />
          </div>
      </div>
    );
};

export default PhotographyPage; 