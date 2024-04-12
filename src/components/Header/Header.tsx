import React from "react"
import { useState } from "react"
import Navbar from "../Navbar/Navbar";
import MenuModal from "../MenuModal/MenuModal";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleModal() {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <header role="banner">
            <a className={styles['skip-to-content']} href="#main">Skip to content</a>
            <div className={styles['header--left']}>
                <Logo color = "var(--text-nav-color)" fontWeight={600}/>
                <span className={styles.beta}>Beta</span>
            </div>
            
            <button 
                className={styles['mobile-nav-toggle']} 
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
                onClick={() => toggleModal()}
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