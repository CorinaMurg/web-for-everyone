import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";
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
                        onClick={() => { scrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Home
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/your-users"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { scrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Your Users
                    </NavLink>
                </li> */}
                
                <li>
                    <NavLink
                        to="/resources"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { scrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Resources
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { scrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        About
                    </NavLink>
                </li>
            </ul> 
        </nav>
    )
}