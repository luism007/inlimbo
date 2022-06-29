import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
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
    const types = ['all', 'nature', 'portrait', 'urban'];

    const captureSelectedOption = (option) => {
        console.log(option);
    }

    const retrievePhotos = async(offset, limit) => {
      setTimeout(async() => { 
        const pics = await photosApi.getPhotosByOffset(offset, limit);
        setLoading(false); 
        setPicList([...picList, ...pics]);
      }, 2000);

    }

    const showMore = () => {
      const photosOnScreenAmt = picList.length;
      const calcOffset = photosOnScreenAmt / 10; 
      retrievePhotos(calcOffset, 10);
    }

    

    return (
      <div className="photography-container">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div className="items-container">
            <div className="dropdown-container">
              <DropdownComponent
                options={types}
                label="Select Photos"
                callback = { captureSelectedOption }
              ></DropdownComponent>
            </div>
            <List items={picList} />
            <button onClick={ showMore }> Show More </button>
          </div>
        )}
      </div>
    );
};

export default PhotographyPage; 