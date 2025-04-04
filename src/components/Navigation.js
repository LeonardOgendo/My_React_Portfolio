import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs, faUser, faFileAlt, faPhone, faLaptopCode, faStar } from "@fortawesome/free-solid-svg-icons";
import TypewriterEffect from "./TypewriterEffect";


function Navigation(){
    const texts = [
        'Leonard Ogendo',
        'a Fullstack Developer',
        'a Cybersecurity Professional',
        'an Ethical Hacker'
    ]
    return(
        <nav>
            <div className="video-background">
                <video autoPlay muted loop id="background-video">
                    <source src="/backgroundplay.mp4" type="video/mp4"/>
                </video> 
                <div className="gradient-overlay"></div>
                <div className="nav-bar">
                    <span id="name-pref">Leon</span>
                    <ul>
                        <li><a href="home"><FontAwesomeIcon icon={faHome} className="icon--home" />Home</a></li>
                        <li><a href="about"><FontAwesomeIcon icon={ faUser } className="icon--home" />About</a></li>
                        <li><a href="services"><FontAwesomeIcon icon={faCogs} className="icon--home" />Services</a></li>
                        <li><a href="resume"><FontAwesomeIcon icon={faFileAlt} className="icon--home" />Resume</a></li>
                        <li><a href="projects"><FontAwesomeIcon icon={ faLaptopCode } className="icon--home" />Projects</a></li>
                        <li><a href="contact"><FontAwesomeIcon icon={ faPhone } className="icon--home" />Contact</a></li>
                        <li><a href="review"><FontAwesomeIcon icon={ faStar } className="icon--home" />Reviews</a></li>
                    </ul>
                </div>
                <div className="Developer-brf">
                    <h1>I Am <span id="cont"><TypewriterEffect texts={texts} speed={100} pause={1500} /></span></h1>

                    <div className="header-btns">
                        <button id="view-work-btn">View Work</button>
                        <button id="hire-me-btn">Hire Me</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation