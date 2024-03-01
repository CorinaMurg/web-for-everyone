import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import MenuModal from "./MenuModal";
import Logo from "../Logo/Logo";
import { ThemeContext } from "../../App";
import styles from "./Header.module.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleModal() {
        setIsMenuOpen(!isMenuOpen);
    }

    const { theme, toggleTheme } = React.useContext(ThemeContext)
    
    return (
        <header>
            <a className={styles['skip-to-content']} href="#main">Skip to Content</a>
            <div className={styles['header-left']}>
                <Logo color = "var(--text-dark-color)" fontWeight={600}/>
            </div>
            <button onClick={toggleTheme} className={`${theme}-theme ${styles['toggle-theme']}`}>
                <span className="sr-only">Light Dark Theme</span>
           </button>
            
            <button 
                className={styles['mobile-nav-toggle']} 
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="sr-only">
                    Navigation Menu
                </span>
            </button>
            <Navbar/>
            <MenuModal isMenuOpen={isMenuOpen} closeModal={toggleModal} />
        </header>
    )
}