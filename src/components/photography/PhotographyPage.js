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
            source: "public/images/canyon-inlimbo-smaller.jpg",
            title: "In Between The Canyon",
            location: "Page, AZ" 
        },
        {
            source: "public/images/press-coffee-phx-az.jpg",
            title: "Press Coffee Shop",
            location: "Phoenix, AZ" 
        },
        {
            source: "public/images/detroit-tigers-bigger-logo.jpg",
            title: "Guardians of the City",
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