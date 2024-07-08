import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import useScrollToTop from "../../hooks/useScrollToTop"
import styles from "./Footer.module.css"
import '../../index.css'

export default function Footer() {
    return (
        <footer role="contentinfo">
            <div className={styles['footer--top']}>
                <h2 className="sr-only">Footer</h2>
                <div className={styles['footer--left']}>
                    <Logo color="var(--cream-color)" fontWeight={500}/>
                </div>
                <div className={styles['footer--right']}>
                    <div className={styles['footer--right--navigation']}>
                        <h3 className={styles['footer--heading']}>Site Links</h3>
                        <ul>         
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => { useScrollToTop()}}

                                    // className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                    to="/blog"
                                    // className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                                    onClick={() => { useScrollToTop()}}
                                >
                                    <span className="footer--nav-link">Blog</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    // className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                                    onClick={() => { useScrollToTop()}}
                                >
                                    <span className="footer--nav-link">About</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/accessibility-statement" 
                                    // className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                                    onClick={() => { useScrollToTop() }}
                                >
                                    <span className={styles['footer--nav-link']}>Accessibility Statement</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['footer--right--contact']}>
                        <h3 className={styles['footer--heading']}>Contact</h3>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/corinamurg/" target="_blank" rel="noopener noreferrer">
                                    <span className={styles['footer--nav-link']}>LinkedIn</span>
                                    <span className="sr-only"> (opens in new tab)</span>
                                </a>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className={styles['footer--bottom']}>
                <div className={styles.copyright}>
                    <span>&#169;</span><span>Web for Everyone {new Date().getFullYear()}</span>
                </div>
                
                <span className={styles['vertical-bar']} style={{ fontWeight: "500"}}> · </span> 
                <span className={styles['built-span']}><span> </span>Made with ❤️ + React + Typescript + Playwright</span>
                <span className={styles['built-span']}>by Corina Murg</span>
            </div>
        </footer>
    )
}
