import React, { useState, useEffect } from "react";
import profilePhoto from '../myphoto.jpg';

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
            {!isSmartphone && <p className="about-me-p">Experienced Full Stack Developer and Penetration Tester specializing in <br/>creating and securing 
                robust, innovative web applications.
            </p>}
            {isSmartphone && <p className="about-me-p">Experienced Full Stack Developer and Penetration Tester specializing in creating and securing 
                robust, innovative web applications.
            </p>}
            <div className="about--flexbox">
                <div className="box1">
                    <img id="profile" src={profilePhoto} alt="my-Profile"/>
                </div>
                <div className="box2">
                    <span id="about--hello">Hello, I Am </span><span id="about--name">Leonard Ogendo</span>
                    <p className="box2-p">
                        As a seasoned Full Stack Web Application Developer and Penetration Tester, I bring a unique blend of expertise in building robust web applications and securing against evolving cyber threats. With a passion for both creating innovative digital
                        solutions and protecting them, I leverage my extensive knowledge in front-end and back-end development, alongside
                        advanced cybersecurity techniques, to deliver secure, efficient, and scalable web applications. My commitment to 
                        staying at the forefront of technology ensures that i'm always ready to tackle new challenges and provide
                        top-tier solutions for my client.
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
                    <a href="cv-file"><button id="cv-download-btn">Download CV</button></a>
                   
                </div>
            </div>
        </div>
    )
}

export default AboutMe
