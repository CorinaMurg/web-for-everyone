import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <div className="footer-left--top">
                    <Link to="/"><span>Corina Murg</span></Link>
                    <span>Thank you for reading!</span>
                </div>
                <div className="footer-left--bottom">
                <span>Build in React by Corina Murg. &#169; 2023 Corina Murg</span>
                </div>
                
                
            </div>
            <div className="footer-right">
                <div className="footer-right--navigation">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/accessibility">Accessibility</Link>
                    <Link to="/about">About</Link>
                    <a href="https://dev.to/corinamurg" target="_blank" rel="noopener noreferrer">Blog</a>
                </div>
                <div className="footer-right--social">
                    <a href="https://www.linkedin.com/in/corinamurg/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://github.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://twitter.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </div>
                
            </div>






        </footer>
    )
}

// &#169; 2023 Corina Murg