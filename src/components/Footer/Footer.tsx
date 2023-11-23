import { Link } from "react-router-dom"
import handleLinkClick from "../../utils/handleLinkClick"
import "./Footer.css"
import React from "react"

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-left">
                    <Link to="/" onClick={handleLinkClick} className="logo">Corina Murg</Link>
                    <span>The web is for everyone!</span>
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
            </div>
            <div className="footer-bottom">
                <div>
                    <span className="blue-span">&#169;</span><span> 2023 Corina Murg</span>
                </div>
                
                <span>|</span>
                <span className="built-span">Built with React
                    <img className="react-logo" alt="react logo" src="/assets/react.svg"/>
                </span>
                <span>|</span>
                <span>Tested with Playwright 🎭</span>
            </div>
        </footer>
    )
}
