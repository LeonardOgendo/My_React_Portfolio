import React, { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaCodeBranch, FaBug, FaLock, FaLinux, FaNetworkWired, FaGitAlt, FaGithub, FaBootstrap, FaSkullCrossbones
} from 'react-icons/fa';
import {
  SiMongodb, SiDjango, SiPostgresql, SiExpress,
  SiFirebase, SiMysql, SiTailwindcss, SiRedux, SiBurpsuite, SiGnubash
} from 'react-icons/si';

const techData = {
  "Code Arsenal": [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Bash', icon: <SiGnubash /> },
  ],
  "Frontend": [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> }
    
  ],
  "Backend": [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Django', icon: <SiDjango /> }
  ],
  "APIs": [
    { name: 'RESTful APIs', icon: <FaCodeBranch /> },
    { name: 'Firebase', icon: <SiFirebase /> }
  ],
  "Databases": [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> }
  ],
  "Security Tools": [
    { name: 'Burp Suite', icon: <SiBurpsuite /> },
    { name: 'Kali Linux', icon: <FaLinux /> },
    { name: 'Vulnerability Scanners', icon: <FaBug /> },
    { name: 'Metasploit', icon: <FaSkullCrossbones /> },
    { name: 'OSINT', icon: <FaLock /> },
    { name: 'Nmap', icon: <FaNetworkWired /> }
  ],
  "Version Control": [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> }
  ]
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Code Arsenal");

  return (
    <div className="tech-toolbox">
      <h2>
        <span style={{ color: '#fff' }}>My Tech</span> <span style={{ color: '#fd4312' }}>Toolbox</span>
      </h2>
      <p className="stack-intro">
      Every tool I master builds a future, shaping Tech's frontier!
      </p>

      <div className="tab-wrapper">
        <div className="tabs">
          {Object.keys(techData).map((category) => (
            <button
              key={category}
              className={`tab-button ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="tech-grid">
            {techData[activeTab].map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-icon">{tech.icon}</div>
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
