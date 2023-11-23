
import { Link, NavLink } from "react-router-dom"
import handleLinkClick from "../../utils/handleLinkClick"
import "./Header.css"

export default function Header() {

    return (
        <header>
            <a className="skip-to-content" href="#main">Skip to Content</a>
            <div className="header-left">
                <Link className="logo" to="/">Corina Murg </Link>
                <span>Software Engineer focused on Accessibility</span>
            </div>
            
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={handleLinkClick}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={handleLinkClick}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/accessibility"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={handleLinkClick}
                >
                    Accessibility
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={handleLinkClick}
                >
                    About
                </NavLink>
                <a  className="nav-link"
                    href="https://dev.to/corinamurg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Blog
                </a>
            </nav>
        </header>
    )
}