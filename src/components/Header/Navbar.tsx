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
                        to="/your-users"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                    >
                        Your Users
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/resources"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                    >
                        Resources
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        onClick={() => { handleLinkClick(); if (closeModal) {closeModal();}}}
                    >
                        About
                    </NavLink>
                </li>
            </ul> 
        </nav>
    )
}