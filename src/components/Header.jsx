
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
    const activeStyles = {
        fontSize: "1rem",
        fontWeight: "600",
        color: "var(--text-dark-color)"
    }

    return (
        <header>
            <div className="site-name-container">
                <Link className="site-name" to="/">Corina Murg </Link>
                <span>Software Engineer. Accessibility Advocate</span>
            </div>
            <nav>
                <NavLink
                    to="/projects"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    <span className="nav-link">Projects</span>
                </NavLink>
                <NavLink
                    to="/accessibility"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    <span className="nav-link">Accessibility</span>
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    <span className="nav-link">About</span>
                </NavLink>
                <a  className="blog-nav-link"
                    href="https://corinamurg.dev/blog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span className="nav-link">Blog</span>
                </a>
            </nav>
        </header>
    )
}