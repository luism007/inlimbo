import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import List from "../common/list/List";
import './PhotographyPage.css';

const PhotographyPage = () => {
    useEffect(() => {
        retrieveList();
    }, [])

    const [loading, setLoading] = useState(true);

    const pics = [
        {
            source: "public/images/heart-of-the-canyon.jpg",
            title: "Nature",
            location: "Page, AZ" 
        },
        {
            source: "public/images/detroit-fox-theatre-1.jpg",
            title: "Urban",
            location: "Phoenix, AZ" 
        },
        {
            source: "public/images/doomslayer.jpg",
            title: "Portraits",
            location: "Detroit, MI" 
        },
        {
            source: "public/images/detroit-night-street-inlimbo.jpg",
            title: "Wandering the Streets",
            location: "Detroit, MI" 
        }
    ]

    const retrieveList = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    return(
        <div className="photography-container">
            { (loading) ? <p>Loading ...</p> : <List items = {pics}/> }
        </div>
    )
};

export default PhotographyPage; 