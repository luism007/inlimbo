import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import DropdownComponent from "../common/dropdown/Dropdown";
import List from "../common/list/List";
import './PhotographyPage.css';
import * as photosApi from '../../api/PhotosApi';

const PhotographyPage = () => {
    useEffect(() => {
        retrievePhotos();
    }, [])

    const [loading, setLoading] = useState(true);

    const pics = [
        {
            source: "public/images/heart-of-the-canyon.jpg",
            title: "Nature",
            location: "Page, AZ",
            type: "nature"
        },
        {
            source: "public/images/detroit-fox-theatre-1.jpg",
            title: "Urban",
            location: "Phoenix, AZ",
            type: "urban" 
        },
        {
            source: "public/images/doomslayer.jpg",
            title: "Portraits",
            location: "Detroit, MI",
            type: "portrait"
        },
        {
            source: "public/images/detroit-night-street-inlimbo.jpg",
            title: "Wandering the Streets",
            location: "Detroit, MI",
            type: "urban" 
        },
        {
          source: "public/images/heart-of-the-canyon.jpg",
          title: "Nature",
          location: "Page, AZ",
          type: "nature"
      },
      {
          source: "public/images/detroit-fox-theatre-1.jpg",
          title: "Urban",
          location: "Phoenix, AZ",
          type: "urban" 
      },
      {
          source: "public/images/doomslayer.jpg",
          title: "Portraits",
          location: "Detroit, MI",
          type: "portrait"
      },
      {
          source: "public/images/detroit-night-street-inlimbo.jpg",
          title: "Wandering the Streets",
          location: "Detroit, MI",
          type: "urban" 
      }
    ];

    const [picList, setPicList] = useState(pics);
    const types = ['nature', 'portrait', 'urban'];

    const captureSelectedOption = (option) => {
        console.log(option);
    }

    const retrievePhotos = async() => {
      setTimeout(async() => { 
        const pics = await photosApi.getPhotos();
        setLoading(false); 
        setPicList(pics);
      }, 2000);

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
          </div>
        )}
      </div>
    );
};

export default PhotographyPage; 