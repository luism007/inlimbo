import React, { useEffect, useState } from "react";
import PhotoTiles from "../photo-tiles/PhotoTiles";
import './List.css'

const List = (props) => {
    console.log(props);
    return (
      <div className="list-container">
        <ul className="list-item-container">
          {" "}
          {props.items.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <PhotoTiles {...item}></PhotoTiles>
              </li>
            );
          })}{" "}
        </ul>
      </div>
    );
}

export default List;