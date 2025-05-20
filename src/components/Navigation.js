import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs, faUser, faFileAlt, faPhone, faLaptopCode, faStar, faUserShield, faBars } from "@fortawesome/free-solid-svg-icons";
import TypewriterEffect from "./TypewriterEffect";


function Navigation(){
    const texts = [
        'Leonard Ogendo',
        'a Fullstack Developer',
        'a Cybersecurity Professional',
        'an Ethical Hacker'
    ]

    // For Responsiveness and dynamic display
    const [isVisible, setIsVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isMobile = window.innerWidth <= 767;

            if (isMobile) {
                setScrolled(scrollY >= 5);
                setIsVisible(true);
            } else {
                setScrolled(false); // No scrolled feature on desktop
                setIsVisible(scrollY <= 300);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    



    // Toggle menu
    const [menuUp, setMenuUp] = useState(false);

    const toggleMenu = () => {
        setMenuUp(prev => !prev);
    }
    setTimeout(() => {
        setMenuUp(false);
    }, 3000);
    
    return(
        <nav id="home">
            <div className="video-background">
                <video autoPlay muted loop id="background-video">
                    <source src="/backgroundplay.mp4" type="video/mp4"/>
                </video> 
                <div className="gradient-overlay"></div>
                
                <div className={scrolled ? "nav-brand scrolled-nav" : "nav-brand" } >
                    <span id="name-pref">Leon</span>
                    {isVisible && <span id="hero-text"><FontAwesomeIcon icon={faUserShield} className="fa-hero-ico" />Developing and <span id="hero-text-span">Securing Systems</span></span>}
                </div>
                <div className="Developer-brf">
                    <h1>I Am <span id="cont"><TypewriterEffect texts={texts} speed={100} pause={1500} /></span></h1>
                </div>
                <div className="header-btns">
                    <a href="#projects"><button id="view-work-btn">View Work</button></a>
                    <a href="#contact"><button id="hire-me-btn">Hire Me</button></a>
                </div>

                {!menuUp && (
                    <div className="nav-toggler-container" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} id="fa-toggler" />
                    </div>  
                )}       
                
            </div>
            
            {(isMobile && menuUp) || !isMobile ? (
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
                            <div className="ico-box"><FontAwesomeIcon icon={faUser} id="fa-ico-about" className="fa-ico" /></div>
                            <div className="name-box"><span>About</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#services" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faCogs} id="fa-ico-services" className="fa-ico" /></div>
                            <div className="name-box"><span>Services</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#tech-stack" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faFileAlt} id="fa-ico-resume" className="fa-ico" /></div>
                            <div className="name-box"><span>Skills</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#projects" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faLaptopCode} id="fa-ico-projects" className="fa-ico" /></div>
                            <div className="name-box"><span>Projects</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#certifications" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faStar} className="fa-ico" /></div>
                            <div className="name-box"><span>Certificates</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#contact" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faPhone} className="fa-ico" /></div>
                            <div className="name-box"><span>Contact</span></div>
                        </a>
                        </li>
                        
                    </ul>
                    
                </div>
            ): null}       

        </nav>
    )
}

export default Navigation