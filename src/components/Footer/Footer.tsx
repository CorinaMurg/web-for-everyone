import React from "react"
import { Link } from "react-router-dom"
import scrollToTop from "../../utils/scrollToTop"
import WELogo from "../WELogo/WELogo"
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <h2 className="sr-only">Footer</h2>
                <div className="footer-left">
                    <Link className="logo-link" to="/" onClick={() => { scrollToTop()}}>
                        <div className="logo-container">
                            <img src="/assets/faviconDull.png" alt="" />
                        </div> 
                        <span>Web for</span> <span>Everyone</span>
                    </Link>
                </div>
                <div className="footer-right">
                    <nav aria-label="site links" className="footer-right--navigation">
                        <h3 className="footer-heading">Site Links</h3>
                        <ul>
                            <li><Link to="/" onClick={scrollToTop}><span className="footer-nav-link">Home</span></Link></li>
                            {/* <li><Link to="/projects" onClick={scrollToTop}><span className="footer-nav-link">Your Users</span></Link></li> */}
                            <li><Link to="/resources" onClick={scrollToTop}><span className="footer-nav-link">Resources</span></Link></li>
                            <li><Link to="/about" onClick={scrollToTop}><span className="footer-nav-link">About</span></Link></li>
                        </ul>
                    </nav>
                    <div className="footer-right--social">
                        <h3 className="footer-heading">Contact</h3>
                        <a href="https://www.linkedin.com/company/webforeveryone/" target="_blank" rel="noopener noreferrer">
                            <span className="footer-nav-link">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">
                    <span>&#169;</span><span>Web for Everyone 2024</span>
                </div>
                
                <span className="vertical-bar" style={{ fontWeight: "500"}}> · </span> 
                <span className="built-span"><span> </span>made with ❤️ and React by Corina Murg</span>
            </div>
        </footer>
    )
}
