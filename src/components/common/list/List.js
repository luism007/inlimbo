import React, { useEffect, useState } from "react";
import PhotoTiles from "../photo-tiles/PhotoTiles";
import './List.css'

const List = (props) => {
    console.log(props);
    return(
        <div className="list-container">
            {props.items.map((item, index) => {
               return (
               <ul key={index} className="list-item-container">
                  <li className = "list-item">
                    <PhotoTiles {...item} ></PhotoTiles>
                  </li>
                </ul>);
            })}
        </div>
    )
}

export default List;