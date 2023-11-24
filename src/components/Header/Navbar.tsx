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
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/accessibility"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                >
                    Accessibility
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
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

            </ul>
            
        </nav>
    )
}