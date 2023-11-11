
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {

    return (
        <header>
            <div className="site-name-container">
                <Link className="site-name" to="/">Corina Murg </Link>
                <span>Software Engineer focused on Accessibility</span>
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/accessibility"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                >
                    Accessibility
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                >
                    About
                </NavLink>
                <a  className="nav-link"
                    href="https://corinamurg.dev/blog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Blog
                </a>
            </nav>
        </header>
    )
}