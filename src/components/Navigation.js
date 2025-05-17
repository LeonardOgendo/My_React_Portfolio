import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs, faUser, faFileAlt, faPhone, faLaptopCode, faStar } from "@fortawesome/free-solid-svg-icons";
import TypewriterEffect from "./TypewriterEffect";
import { isVisible } from "@testing-library/user-event/dist/utils";


function Navigation(){
    const texts = [
        'Leonard Ogendo',
        'a Fullstack Developer',
        'a Cybersecurity Professional',
        'an Ethical Hacker'
    ]

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 300) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return(
        <nav>
            <div className="video-background">
                <video autoPlay muted loop id="background-video">
                    <source src="/backgroundplay.mp4" type="video/mp4"/>
                </video> 
                <div className="gradient-overlay"></div>
                
                <div className="nav-brand">
                    <span id="name-pref">Leon</span>
                    {isVisible && <span id="hero-text">Developing and Securing Systems</span>}
                </div>
                <div className="Developer-brf">
                    <h1>I Am <span id="cont"><TypewriterEffect texts={texts} speed={100} pause={1500} /></span></h1>

                    <div className="header-btns">
                        <button id="view-work-btn">View Work</button>
                        <button id="hire-me-btn">Hire Me</button>
                    </div>
                </div>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>
                    <a href="#home" className="nav-link">
                        <div className="ico-box"><FontAwesomeIcon icon={faHome} className="fa-ico" /></div>
                        <div className="name-box"><span>Home</span></div>
                    </a>
                    </li>
                    <li>
                    <a href="#about" className="nav-link">
                        <div className="ico-box"><FontAwesomeIcon icon={faUser} className="fa-ico" /></div>
                        <div className="name-box"><span>About</span></div>
                    </a>
                    </li>
                    <li>
                    <a href="#services" className="nav-link">
                        <div className="ico-box"><FontAwesomeIcon icon={faCogs} className="fa-ico" /></div>
                        <div className="name-box"><span>Services</span></div>
                    </a>
                    </li>
                    <li>
                    <a href="#resume" className="nav-link">
                        <div className="ico-box"><FontAwesomeIcon icon={faFileAlt} className="fa-ico" /></div>
                        <div className="name-box"><span>Resume</span></div>
                    </a>
                    </li>
                    <li>
                    <a href="#projects" className="nav-link">
                        <div className="ico-box"><FontAwesomeIcon icon={faLaptopCode} className="fa-ico" /></div>
                        <div className="name-box"><span>Projects</span></div>
                    </a>
                    </li>
                    <li>
                    <a href="#contact" className="nav-link">
                        <div className="ico-box"><FontAwesomeIcon icon={faPhone} className="fa-ico" /></div>
                        <div className="name-box"><span>Contact</span></div>
                    </a>
                    </li>
                    <li>
                    <a href="#reviews" className="nav-link">
                        <div className="ico-box"><FontAwesomeIcon icon={faStar} className="fa-ico" /></div>
                        <div className="name-box"><span>Reviews</span></div>
                    </a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navigation