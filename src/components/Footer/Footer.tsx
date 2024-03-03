import React from "react"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import useScrollToTop from "../../hooks/useScrollToTop"
import styles from "./Footer.module.css"
import '../../index.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles['footer--top']}>
                <h2 className="sr-only">Footer</h2>
                <div className={styles['footer--left']}>
                    <Logo color="var(--text-light-color)" fontWeight={500}/>
                </div>
                <div className={styles['footer--right']}>
                    <nav aria-label="footer site links" className={styles['footer--right--navigation']}>
                        <h3 className={styles['footer--heading']}>Site Links</h3>
                        <ul>
                            <li>
                                <Link to="/" onClick={() => { useScrollToTop() }}>
                                    <span className="footer--nav-link">Home</span>
                                </Link>
                            </li>
                            {/* <li><Link to="/projects" onClick={scrollToTop}><span className="footer-nav-link">Your Users</span></Link></li> */}
                            <li>
                                <Link to="/resources" onClick={() => { useScrollToTop() }}>
                                    <span className="footer--nav-link">Resources</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => { useScrollToTop() }}>
                                    <span className="footer--nav-link">About</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles['footer--right--contact']}>
                        <h3 className={styles['footer--heading']}>Contact</h3>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/company/webforeveryone/" target="_blank" rel="noopener noreferrer">
                                    <span className={styles['footer--nav-link']}>LinkedIn</span>
                                    <span className="sr-only"> (opens in new tab)</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/accessibility-statement" onClick={() => { useScrollToTop() }}>
                                    <span className={styles['footer--nav-link']}>Accessibility Statement</span>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className={styles['footer--bottom']}>
                <div className={styles.copyright}>
                    <span>&#169;</span><span>Web for Everyone 2024</span>
                </div>
                
                <span className={styles['vertical-bar']} style={{ fontWeight: "500"}}> · </span> 
                <span className={styles['built-span']}><span> </span>Made with ❤️ and React by Corina Murg</span>
            </div>
        </footer>
    )
}
