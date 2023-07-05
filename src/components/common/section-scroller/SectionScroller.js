import React, { useEffect } from "react";
import './SectionScroller.css';
const SectionScroller = (props) => {

    useEffect(() => {

    }, [props]);

    const scrollToSection = (sectionLink) => {
        console.log('Section Link', sectionLink);
        const section = document.getElementById(sectionLink);
        console.log('Clicked!', section);
        section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    }
    return (
        <div className="section-scroller-container">
            <div className="section-list-container">
                <ul>
                    {props.sections.map((section, index) => {
                        return (
                          <div className="section-list-item-container" key={index}>
                            <span></span>
                            <li className="section-list-item" onClick={() => { scrollToSection(section) }}> {section} </li>
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