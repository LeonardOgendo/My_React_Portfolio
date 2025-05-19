import React from "react";

const certificates = [
  {
    title: "Networking Academy Learn-A-Thon 2025",
    issuer: "Cisco",
    issuerLogo: "cisco_logo.png",
    date: "Feb 2025",
    image: 'participation_netacad.png',
    link: "#", 
    skills: ["Ethical Hacking", "Penetration Testing", "Cybersecurity"],
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    issuerLogo: "cisco_logo.png",
    date: "Jan 2025",
    image: 'cisco_eh_acad.jpg',
    link: "#", // Replace with actual credential URL
    skills: ["Ethical Hacking", "Cybersecurity"],
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issuerLogo: "freecodecamp_logo.png",
    date: "Jul 2024",
    image: 'freecode_web_cert.png',
    link: "#", // Replace with actual credential URL
    skills: ["Responsive Web Design", "JavaScript", "CSS3", "HTML5", "Frontend Development"],
  },
];

const MyCertifications = () => {
  return (
    <section className="section-body" id="certifications">
        <h2 className="section-title"><span style={{ color: "#fff" }}>My</span> <span style={{color:'#fd4312'}}>Certifications</span></h2>
        <p className="section-intro">
          Each line of code crafted with precision—these projects embody my skillset and creativity in web development.
        </p>
      
        <div className="cert-grid">
            {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
                <img src={`/images/${cert.image}`} alt={`${cert.issuer} logo`} className="cert-image" />
                <h3>{cert.title}</h3>
                <div className="issuer">
                    <img className="cert-issuer-logo" src={`/images/${cert.issuerLogo}`} />
                    <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <span className="cert-date">{cert.date}</span>
                <ul className="skills">
                {cert.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                ))}
                </ul>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                View Credential
                </a>
            </div>
            ))}
        </div>
    </section>
  );
};

export default MyCertifications;
