import React, { useEffect, useState } from "react";
import './SectionScroller.css';

interface SectionScrollerProps { 
    sections: []
}
const SectionScroller = (props:SectionScrollerProps) => {

    const sectionLinks = props.sections;
    const [ellipsisLocation, setEllipsisLocation] = useState('');
    const [clicked, setClicked] = useState(false);
    let scrollIntersectionObserver = new IntersectionObserver(intersectionObserverCallback, {threshold: 0.8});
    useEffect(() => {
        const sections = document.querySelectorAll('.section-container');
        // scrollIntersectionObserver = new IntersectionObserver(intersectionObserverCallback, {threshold: 0.5});
        sections.forEach(section => { 
            if(clicked) return;
            scrollIntersectionObserver.observe(section); 
        })
        return () => {
            sections.forEach(section => { scrollIntersectionObserver.unobserve(section); });
        }
    }, [props]);

    const moveEllipsis = (originalLocation, newLocation) => {
        const ellipsis = document.getElementById('ellipsis');
        setEllipsisLocation(`${newLocation}`);
        const keyframes = [
            { transform: `translateY(${originalLocation}px)`},
            { transform:  `translateY(${newLocation}px)`}
        ];
        const timing = {
            duration: 700,
            fill: 'both'
        };
        ellipsis.animate(keyframes, timing);
    }

    function intersectionObserverCallback(entries) {
        entries.forEach((entry) => {
            if(!entry.isIntersecting) return
            const id = entry.target.id;
            const _index = sectionLinks.findIndex((section) => section === id);
            const location = getSectionLinkLocation(id, _index);
            const ellipsisLocation = getEllipsisLocation();
            moveEllipsis(ellipsisLocation,location); 
        })
    }

    const getEllipsisLocation = () => {
        const ellipsis = document.getElementById('ellipsis');
        const originalLocation = ellipsisLocation.match(/^/) ? ellipsisLocation : ellipsis.offsetTop;
        return originalLocation;
    }

    const getSectionLinkLocation = (section, index) => {
        const sectionScrollLink = document.getElementById(`${section}-${index}`);
        const location = sectionScrollLink.offsetTop + (sectionScrollLink.offsetHeight / 2);
        return location;
    }

    const scrollToSection = (sectionLink, index) => {
        const section = document.getElementById(sectionLink);
        const scrollLinkLocation = getSectionLinkLocation(sectionLink, index);
        const ellipsisLocation = getEllipsisLocation();
        section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
        moveEllipsis(ellipsisLocation, scrollLinkLocation);
        setClicked(false);
    }

    return (
        <div className="section-scroller-container">
            <div className="section-list-container">
                <ul>
                    <span id = "ellipsis"></span>
                    {props.sections.map((section, index) => {
                        return (
                          <div className="section-list-item-container" key={index}>
                            <li className="section-list-item" onClick={() => {setClicked(true); scrollToSection(section, index) }} id = {`${section}-${index}`}> {section} </li>
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