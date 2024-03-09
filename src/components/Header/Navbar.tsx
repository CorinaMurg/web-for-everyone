import React from "react";
import { NavLink } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./Navbar.module.css";

interface NavbarTypes {
    closeModal?: () => void;
};

export default function Navbar({ closeModal }: NavbarTypes) {
    return (
        <nav role="navigation" className={styles['navbar']}>
            <ul role="list" className={styles['primary-navigation']}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? `${styles['nav-link']} ${styles['active-link']}` : `${styles['nav-link']}`}

                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/resources"
                        className={({ isActive }) => isActive ? `${styles['nav-link']} ${styles['active-link']}` : `${styles['nav-link']}`}

                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        Resources
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? `${styles['nav-link']} ${styles['active-link']}` : `${styles['nav-link']}`}
                        onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
                    >
                        About
                    </NavLink>
                </li>
            </ul> 
        </nav>
    )
}