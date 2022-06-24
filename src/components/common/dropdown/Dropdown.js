import React, { useEffect, useRef, useState } from "react";
import './Dropdown.css';

const classToggle = (id, from, to) => {
    const parentElement = document.getElementById(id);
    parentElement.classList.remove(from);
    parentElement.classList.add(to);
}
const showSelectionBox = () => {
    const selectionBox = document.getElementById('selection-box');
    if (selectionBox.classList.contains('hide')) {
       classToggle('selection-box', 'hide', 'show')
    } else if (selectionBox.classList.contains('show')) { 
        classToggle('selection-box', 'show', 'hide')
    }
}

const outsideAlert = (ref) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(ref.current && !ref.current.contains(event.target)) { 
                classToggle('selection-box', 'show', 'hide')
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref])
}
const DropdownComponent = (props) => {
    const wrapperRef = useRef(null);
    outsideAlert(wrapperRef);

    useEffect(() => { console.log(props.options) }, []);

    const [selectedOption, setSelectedOption] = useState('urban');

    const printOption = (option) => {
       // console.log(option);
        setSelectedOption(option);
        props.callback(option);
        classToggle('selection-box', 'show', 'hide');
    }


    return (
      <div className="dropdown-wrapper" ref={wrapperRef}>
        <label> { props.label } </label>
        <div className="dropdown-selected-box" onClick = {showSelectionBox}>
          <p className="dropdown-selected-value"> {selectedOption}</p>
          <span><img src="public/images/dropdown-logo.png"></img></span>
        </div>
        <div className="dropdown-selection-box hide" id = "selection-box">
          {props.options.map((option, index) => {
            return <p key={index} onClick={() => {printOption(option)}}> {option} </p>;
          })}
        </div>
      </div>
    );

}

export default DropdownComponent;