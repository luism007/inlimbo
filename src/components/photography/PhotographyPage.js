import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import List from "../common/list/List";


const PhotographyPage = () => {
    useEffect(() => {
        retrieveList();
    }, [])

    const [loading, setLoading] = useState(true);

    const retrieveList = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    return(
        <div className="list-container">
            { (loading) ? <p>Loading ...</p> : <List/> }
        </div>
    )
};

export default PhotographyPage; 