import { FaCode, FaLaptopCode, FaShieldAlt, FaBug, FaDatabase, FaCogs, FaLock, FaPaintBrush, FaNetworkWired } from 'react-icons/fa';

const MyServices = () => {
    const myServices = [
        { icon: <FaCode />, title: "Web Development", desc: "Build secure, scalable web apps." },
        { icon: <FaLaptopCode />, title: "Frontend Development", desc: "Responsive and interactive web interfaces." },
        { icon: <FaCogs />, title: "Backend Development", desc: "Powerful and efficient server logic." },
        { icon: <FaPaintBrush />, title: "Web Design", desc: "Modern, clean UI and UX." },
        { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Legal security testing for systems." },
        { icon: <FaBug />, title: "Penetration Testing", desc: "Identify and fix system vulnerabilities." },
        { icon: <FaDatabase />, title: "Database Management", desc: "Organize, store, and manage data." },
        { icon: <FaNetworkWired />, title: "API Integration", desc: "Connect systems using secure APIs." },
        { icon: <FaLock />, title: "DevOps & Deployment", desc: "Automate deployment and streamline development cycles." },
    ];
    return (
        <div className="section-body" id="services">
            <h2 className='section-title'><span style={{color: '#fff'}}>My</span> <span style={{color:'#fd4312'}}>Services</span></h2>
            <p className="section-intro">
                Every line of code I write, strengthens both function and protection.
            </p>
            
            <div className="services-grid">
                {myServices.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-desc">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default MyServices;