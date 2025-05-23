import { FaReact } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <p><span style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '0.5px' }}>Powered by</span> <FaReact className="react-icon"/><span id="react-hero">React</span></p>
            <p><span style={{ color: '#fff', fontSize: '0.8rem' }}>Developed by</span> <span style={{ color: '#f24312', fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>Leonard Ogendo</span></p>
            <span id="copyright">© 2025 Leon</span>
        </div>
    )
};

export default Footer;