import React from "react";
import { NavLink } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import "./Navbar.css";

interface NavbarTypes {
    closeModal?: () => void;
};

export default function Navbar({ closeModal }: NavbarTypes) {

    return (
        <nav aria-label="site links" className="navbar">
            <ul className="primary-navigation">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Blog
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/GAAD-2024"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        GAAD 2024
                    </NavLink>
                </li>
                <li className="mobile-only-link">
                    <NavLink 
                        to="/accessibility-statement" 
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { useScrollToTop() }}
                    >
                        Accessibility Statement
                    </NavLink>
                </li>
                {/* <li className="mobile-only-link">
                    <a href="https://www.linkedin.com/company/webforeveryone/" 
                        target="_blank" rel="noopener noreferrer"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    >
                        <span >LinkedIn</span>
                        <span className="sr-only"> (opens in new tab)</span>
                    </a>
                </li> */}
            </ul> 
        </nav>
    )
}