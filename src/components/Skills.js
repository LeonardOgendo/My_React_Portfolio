import { FaCode, FaLaptopCode, FaShieldAlt, FaBug, FaDatabase, FaCogs, FaLock, FaPaintBrush, FaNetworkWired } from 'react-icons/fa';

const Skills = () => {
    const mySkills = [
        { icon: <FaCode />, title: "Web Development", desc: "Build secure, scalable web apps." },
        { icon: <FaPaintBrush />, title: "Web Design", desc: "Modern, clean UI and UX." },
        { icon: <FaShieldAlt />, title: "Ethical Hacking", desc: "Legal security testing for systems." },
        { icon: <FaBug />, title: "Penetration Testing", desc: "Identify and fix system vulnerabilities." },
        { icon: <FaLaptopCode />, title: "Frontend Development", desc: "Responsive and interactive web interfaces." },
        { icon: <FaCogs />, title: "Backend Development", desc: "Powerful and efficient server logic." },
        { icon: <FaNetworkWired />, title: "API Integration", desc: "Connect systems using secure APIs." },
        { icon: <FaLock />, title: "Cybersecurity", desc: "Protect data from digital threats." },
        { icon: <FaDatabase />, title: "Database Management", desc: "Organize, store, and manage data." },
    ];
    return (
        <div className="section-body">
            <h2 className='section-title'><span style={{color: '#fff'}}>My</span> <span style={{color:'#fd4312'}}>Skills</span></h2>
            <p className="section-intro">
                Every line of code I write, strengthens both function and protection.
            </p>
            
            <div className="skills-grid">
                {mySkills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <h4 className="skill-title">{skill.title}</h4>
                        <p className="skill-desc">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Skills;