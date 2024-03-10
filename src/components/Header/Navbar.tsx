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
                        to="/resources"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Resources
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
                <li className="mobile-only-link">
                    <NavLink 
                        to="/accessibility-statement" 
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { useScrollToTop() }}
                    >
                        Accessibility Statement
                    </NavLink>
                </li>
            </ul> 
        </nav>
    )
}