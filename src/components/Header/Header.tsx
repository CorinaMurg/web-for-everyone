import React from "react"
import { useState, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { useThemeClass } from "../../hooks/useThemeClass";
import Navbar from "../Navbar/Navbar";
import MenuModal from "../MenuModal/MenuModal";
import Logo from "../Logo/Logo";
import "../../global.css";
import styles from "./Header.module.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleModal() {
        setIsMenuOpen(!isMenuOpen);
    }

    const { theme } = useContext(ThemeContext);
    const themeClass = useThemeClass();
    
    return (
        <header className={themeClass}>
            <a className={styles['skip-to-content']} href="#main">Skip to content</a>
            <div className={styles['header--left']}>
                <Logo 
                    theme={theme}
                />
                <span className={styles.beta}>Beta</span>
            </div>
            
            <button 
                className={styles['mobile-nav-toggle']} 
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
                // a11y concern: too verbose. "navigation menu menu button. collapsed. submenu"
                // aria-haspopup="true"
                onClick={() => toggleModal()}
            >
                <span className="sr-only">
                    Navigation Menu
                </span>
                <svg id="menu-dark" width="20px" height="23px" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
            <Navbar/>
            <MenuModal isMenuOpen={isMenuOpen} closeModal={toggleModal} />
        </header>
    )
}