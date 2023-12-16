import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import MenuModal from "./MenuModal";
import "./Header.css"
import WELogo from "../WELogo/WELogo";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleModal() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <a className="skip-to-content" href="#main">Skip to Content</a>
            <div className="header-left">
                <Link className="logo" to="/">
                    <WELogo size="1.7rem"/>
                    <span className="logo-vertical"> | </span> 
                    Web for Everyone
                </Link>
            </div>
            <button 
                className="mobile-nav-toggle" 
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="menu-icon sr-only">
                    Menu
                </span>
            </button>
            <Navbar/>
            <MenuModal isMenuOpen={isMenuOpen} closeModal={toggleModal} />
        </header>
    )
}