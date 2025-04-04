import { FaCode, FaLaptopCode, FaShieldAlt, FaBug, FaDatabase, FaCogs, FaLock, FaPaintBrush, FaNetworkWired } from 'react-icons/fa';

const Skills = () => {
    const mySkills = [
        { icon: <FaCode />, title: "Web Application Development", desc: "Building secure, scalable web solutions." },
        { icon: <FaPaintBrush />, title: "Web Design", desc: "Creating clean and modern UI/UX." },
        { icon: <FaShieldAlt />, title: "Ethical Hacking", desc: "Securing systems through legal hacking." },
        { icon: <FaBug />, title: "Penetration Testing", desc: "Finding and fixing vulnerabilities." },
        { icon: <FaLaptopCode />, title: "Frontend Development", desc: "Building responsive interfaces." },
        { icon: <FaCogs />, title: "Backend Development", desc: "Creating powerful server logic." },
        { icon: <FaNetworkWired />, title: "API Integration", desc: "Connecting apps and services." },
        { icon: <FaLock />, title: "Cybersecurity", desc: "Protecting data and privacy." },
        { icon: <FaDatabase />, title: "Database Management", desc: "Efficiently managing data stores." },
    ];

    return (
        <div className="skills-section">
            <h2><span style={{color: '#fff'}}>My</span> <span style={{color:'#fd4312'}}>Skills</span></h2>
            <div className="skills-grid">
                {mySkills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-desc">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Skills;