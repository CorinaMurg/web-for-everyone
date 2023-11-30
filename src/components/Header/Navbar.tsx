import React from "react";
import { NavLink } from "react-router-dom";
import handleLinkClick from "../../utils/handleLinkClick"
import "./Navbar.css";

type NavbarProps = {
    closeModal?: () => void;
};

export default function Navbar({ closeModal }: NavbarProps) {

    return (
        <nav>
            <ul className="primary-navigation">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                    >
                        Resources
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/accessibility"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <a  className="nav-link"
                        href="https://dev.to/corinamurg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Blog
                    </a>
                </li>
            </ul> 
        </nav>
    )
}