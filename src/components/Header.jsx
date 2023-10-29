
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        color: "var(--text-dark-color)"
    }

    return (
        <header>
            <div>
                <Link className="site-name" to="/">@ Corina Murg </Link>
                <span>Software Engineer. Accessibility Advocate</span>
            </div>
            <nav>
                <NavLink
                    to="/projects"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/accessibility"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Accessibility
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <a 
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