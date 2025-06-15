import React, { useState, useEffect } from "react";
import profilePhoto from  "../assets/myProfile.jpg";

function AboutMe(){
    const [isSmartphone, setIsSmartphone] = useState(window.innerWidth <= 767);

    useEffect(() => {
            const handleResize = () => {
                setIsSmartphone(window.innerWidth <= 767);
            };
        
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);


    return(
        <div className="section-body" id="about">
            <h2 className="about-me-title"><span style={{color: '#fff'}}>About</span> <span style={{color:'#fd4312'}}>Me</span></h2>
            {!isSmartphone && <p className="about-me-p">A Junior Secure Software Engineer | Penetratrion Testing & <br /> Security Operations (SOC/Blue Team) | Application Security <br /> Python & JavaScript Specialist

            </p>}
            {isSmartphone && <p className="about-me-p">A Junior Secure Software Engineer <br /> Penetration Testing & Security Operations (SOC/Blue Team) | Application Security <br /> Python & JavaScript Specialist
            </p>}
            <div className="about--flexbox">
                <div className="box1">
                    <img id="profile" src={profilePhoto} alt="my-Profile"/>
                </div>
                <div className="box2">
                    <span id="about--hello">Hello, I Am </span><span id="about--name">Leonard Ogendo</span>
                    <p className="box2-p">
                        I’m a Junior Secure Software Engineer with focused expertise in Secure Software Engineering, Web & Mobile Application Security, and Cybersecurity practices including Penetration Testing, Red/Blue Teaming and Security Operations.
                        <br /> With a strong command of <span style={{color:'#fd4312', fontWeight: 'bold' }}>Python</span> and <span style={{color:'#fd4312', fontWeight: 'bold' }}>JavaScipt</span>, I build, test, and secure modern web applications — from the codebase to the cloud — alongside helping businesses and organizations strengthen their defenses against evolving cyber threats.
                    </p>
                    <div className="about--details">
                        <div className="det-1">
                            <span className="dets">Name</span><br/>
                            <span className="dets">Address</span><br/>
                            <span className="dets">Phone</span><br/>
                            <span className="dets">Email:</span><br/>
                            <span className="dets">LinkedIn:</span>

                        </div>
                        <div>
                            <span className="dets2">: Leonard Ogendo</span><br/>
                            <span className="dets2">: Nairobi, Kenya</span><br/>
                            <span className="dets2">: +254 7122 27184</span><br/>
                            <span className="dets2">: ogendoleonard5@gmail.com</span>
                            <span className="dets2">: <a href="https://www.linkedin.com/in/leonard-ogendo-58ab01225" id="linkedin-btn" target="_blank" rel="noopener noreferrer">View LinkedIn Profile</a></span>
                        </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1ts-7k2v23eJ5LAGLBA8RwIscfnBD-6b1/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><button id="cv-download-btn">Download CV</button></a>
                   
                </div>
            </div>
        </div>
    )
}

export default AboutMe
