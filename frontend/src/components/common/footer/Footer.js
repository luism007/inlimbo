import React from "react";
import inlimboLogo from '../../../assets/inlimbo-light-gray-on-white.svg'
import instagramIcon from '../../../assets/instagram-icon.svg';
import mailIcon from '../../../assets/envelope-icon.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
        <div className="footer-container" id="footer">
          <div id="footer-wrapper">
            <div className="footer-logo-wrapper">
              <img
                src={inlimboLogo}
                alt="inlimbo-logo"
                aria-label="INLIMBO"
              ></img>
            </div>
            <ul className="footer-contact-list">
              <li>
                <div className="footer-contact-list-item-wrapper">
                  <img src={mailIcon}></img>
                  <a
                    className="footer-list-items-text"
                    href="mailto:inlimbo.photography@gmail.com?subject=Service%20Inquiry"
                    target="_top"
                  >
                    {" "}
                    Contact Me{" "}
                  </a>
                </div>
              </li>

            </ul>
            <p className="footer-list-items-text">
              {" "}
              Developed & Designed by INLIMBO 2023
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;