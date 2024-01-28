import React from "react"
import { Link } from "react-router-dom"
import scrollToTop from "../../utils/scrollToTop"
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <h2 className="sr-only">Footer</h2>
                <div className="footer-left">
                    <Link to="/" onClick={scrollToTop} className="logo">WE <span className="logo-vertical">|</span>Web for Everyone</Link>
                    
                </div>
                <div className="footer-right">
                    <div className="footer-right--navigation">
                        <span className="footer-heading">Site</span>
                        <ul>
                            <li><Link to="/" onClick={scrollToTop}><span className="footer-nav-link">Home</span></Link></li>
                            <li><Link to="/projects" onClick={scrollToTop}><span className="footer-nav-link">Projects</span></Link></li>
                            <li><Link to="/accessibility" onClick={scrollToTop}><span className="footer-nav-link">Accessibility</span></Link></li>
                            <li><Link to="/about" onClick={scrollToTop}><span className="footer-nav-link">About</span></Link></li>
                        </ul>
                    </div>
                    <div className="footer-right--social">
                        <span className="footer-heading">Profiles</span>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/corinamurg/" target="_blank" rel="noopener noreferrer">
                                    <span className="footer-nav-link">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                                    <span className="footer-nav-link">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                                    <span className="footer-nav-link">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://dev.to/corinamurg" target="_blank" rel="noopener noreferrer">
                                    <span className="footer-nav-link">Blog</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">
                    <span>&#169;</span><span>Web for Everyone 2023</span>
                </div>
                
                <span className="vertical-bar">|</span> 
                <span className="built-span">Built with React by Corina Murg</span>
            </div>
        </footer>
    )
}
