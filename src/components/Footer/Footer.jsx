import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer>
            <div className="footer-left">
                <div className="footer-left--top">
                    <Link to="/" onClick={handleLinkClick}><span className="logo">Corina Murg</span></Link>
                    <span>Thank you for reading!</span>
                </div>
                <div className="footer-left--bottom">
                <span>Build with React by Corina Murg. &#169; 2023 Corina Murg</span>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right--navigation">
                    <span className="footer-heading">Site</span>
                    <Link to="/" onClick={handleLinkClick}><span className="footer-nav-link">Home</span></Link>
                    <Link to="/projects" onClick={handleLinkClick}><span className="footer-nav-link">Projects</span></Link>
                    <Link to="/accessibility" onClick={handleLinkClick}><span className="footer-nav-link">Accessibility</span></Link>
                    <Link to="/about" onClick={handleLinkClick}><span className="footer-nav-link">About</span></Link>
                </div>
                <div className="footer-right--social">
                    <span className="footer-heading">Profiles</span>
                    <a href="https://www.linkedin.com/in/corinamurg/" target="_blank" rel="noopener noreferrer">
                        <span className="footer-nav-link">LinkedIn</span>
                    </a>
                    <a href="https://github.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                        <span className="footer-nav-link">GitHub</span>
                    </a>
                    <a href="https://twitter.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                        <span className="footer-nav-link">Twitter</span>
                    </a>
                    <a href="https://dev.to/corinamurg" target="_blank" rel="noopener noreferrer">
                        <span className="footer-nav-link">Blog</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
