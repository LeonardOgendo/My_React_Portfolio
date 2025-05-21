import React from "react";

const certificates = [
  {
    title: "Learn-A-Thon 2025",
    issuer: "Cisco",
    issuerLogo: "cisco_logo.png",
    date: "Feb 2025",
    image: 'participation_netacad.png',
    link: "https://www.credly.com/badges/4468d385-145e-405d-99fb-128d35af3f91/linked_in_profile", 
    skills: ["Ethical Hacking", "Cybersecurity", "Penetration Testing"],
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    issuerLogo: "cisco_logo.png",
    date: "Jan 2025",
    image: 'cisco_eh_acad.jpg',
    link: "https://www.credly.com/badges/89d6adaa-25a9-4475-9a93-a9b10acbc8b9/linked_in_profile",
    skills: ["Ethical Hacking", "PenTesting", "Vulnerability Assessment", "Vulnerability Scanning", "Exploitation",
      "Social Engineering", "Reporting"
     ],
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issuerLogo: "freecodecamp_logo.png",
    date: "Jul 2024",
    image: 'freecode_web_cert.png',
    link: "https://www.freecodecamp.org/certification/Leonard101/responsive-web-design", 
    skills: ["Responsive Web Design", "JavaScript", "HTML5", "Frontend Development", "CSS3"],
  },
];

const MyCertificates = () => {
  return (
    <section className="section-body" id="certifications">
        <h2 className="section-title"><span style={{ color: "#fff" }}>My</span> <span style={{color:'#fd4312'}}>Certificates</span></h2>
        <p className="section-intro">
          Each certification strengthens my skills for real-world Tech challenges ahead.
        </p>
      
        <div className="cert-grid">
            {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div>
                <img src={`/images/${cert.image}`} className="cert-image" alt="cert-im" />
                <h3>{cert.title}</h3>
                <div className="issuer">
                    <img className="cert-issuer-logo" src={`/images/${cert.issuerLogo}`} alt={cert.issuer} />
                    <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <span className="cert-date">{cert.date}</span>
                <div className="skills-container">
                  <ul className="skills">
                    {cert.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                  <span id="skills-gained">Skills Gained</span>
                </div>
              </div>
              <div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                View Credential
                </a>
              </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default MyCertificates;
