import React, { useEffect, useState } from "react";
import './SectionScroller.css';
const SectionScroller = (props) => {

    const [ellipsisLocation, setEllipsisLocation] = useState('');

    useEffect(() => {

    }, [props, ellipsisLocation]);

    const scrollToSection = (sectionLink, index) => {
        const section = document.getElementById(sectionLink);
        const sectionScrollLink = document.getElementById(`${sectionLink}-${index}`);
        const ellipsis = document.getElementById('ellipsis');
        const originalLocation = ellipsisLocation.match(/^/) ? ellipsisLocation : ellipsis.offsetTop;
        const location = sectionScrollLink.offsetTop + (sectionScrollLink.offsetHeight / 2);
        setEllipsisLocation(`${location}px`);
        const keyframes = [
            { transform: `translateY(${originalLocation}px)`, opacity: 0},
            { transform:  `translateY(${location}px)`, opacity: 1}
        ];
        const timing = {
            duration: 700,
            fill: 'both'
        };
        ellipsis.animate(keyframes, timing);
        section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    }
    return (
        <div className="section-scroller-container">
            <div className="section-list-container">
                <ul>
                    <span id = "ellipsis"></span>
                    {props.sections.map((section, index) => {
                        return (
                          <div className="section-list-item-container" key={index}>
                            <li className="section-list-item" onClick={() => { scrollToSection(section, index) }} id = {`${section}-${index}`}> {section} </li>
                            <span className="section-list-divider"></span>
                          </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SectionScroller;