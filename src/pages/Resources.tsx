import React from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import useScrollToTop from "../hooks/useScrollToTop"
import useScrollToSection from "../hooks/useScrollToSection"
import useDocTitle from "../hooks/useDocTitle"
import useHighlightTOC from "../hooks/useHighlightTOC"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import { ThemeContext } from "../App"
import styles from './Resources.module.css'
import "../global.css"

export default function Accessibility() {  
    useDocTitle("Resources | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    const { activeId } = useHighlightTOC();
    const { theme } = useContext(ThemeContext);
    const sectionTitles = {
        "understanding-accessibility": "Understanding Accessibility",
        "your-digital-presence": "Your Digital Presence",
        "html-for-accessibility": "HTML for Accessibility",
        "css-for-accessibility": "CSS for Accessibility",
        "example-accessible-components": "Examples of Accessible Components",
        // "learning-resources": "Learning Resources",
    };
  
    return (
        <div className={`${styles.resources} ${theme}-theme resources no-back-links-container`}>

            <h1 className="article-heading-desktop">
                <span>Resources to grow</span>
                <span>your <span className="yellow-bg">accessibility skills</span></span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>Resources</span>
                <span>to grow your</span>
                <span><span className="yellow-bg">accessibility</span> skills</span>
            </h1>
            <div className={styles['resources--table-contents']}>
                <h2 id="table-of-contents">
                    Table of Contents
                </h2>
                <nav aria-labelledby="table-of-contents">
                    <ul className={styles['resources--table-contents']}>
                        {Object.entries(sectionTitles).map(([label, heading], index) => (
                            <li key={index}>
                                <a href={`#${label}`} 
                                    className={`${label === activeId ? styles.active : ''}`}
                                >
                                    {heading}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
            </div>
            <div className={styles['resources-content']}>
                {Object.entries(sectionTitles).map(([label, heading], index) => (
                    <div key={index} className={`${styles['section-container']} scroll-target`} id={`${label}`}>
                        <h2 className="blue-heading heading">
                            {heading}
                        </h2>     
                        <div className={`${styles['section-content']}`}>
                            {resourcesPostsData.filter(post => post.label === label).map((post, index) => (
                                <article key={index} className={styles.article}>
                                    <div>
                                        <h3 id={`${post.id}`}>
                                            {post.href ? (
                                                <a  
                                                    href={post.href} 
                                                    aria-describedby={post.subtitle ? `${post.id}-subtitle ${post.id}-author` : `${post.id}-author`} 
                                                    target="_blank" rel="noopener noreferrer"
                                                    className={styles['article--link']}
                                                >
                                                    {post.title}
                                                    <span className="sr-only"> opens in a new tab</span>
                                                </a>
                                            ) : post.to ? (
                                                <Link 
                                                    to={post.to} 
                                                    aria-describedby={post.subtitle ? `${post.id}-subtitle ${post.id}-author` : `${post.id}-author`}
                                                    className={styles['article--link']}
                                                >
                                                    {post.title}
                                                </Link>
                                            ) : null}
                                        </h3>
                                        <p id={`${post.id}-subtitle`} className={styles['article--subtitle']}>{post.subtitle}</p>
                                    </div>
                                    <div className={styles['article--description']}>
                                        <p>{post.description}</p>          
                                        <p id={`${post.id}-author`} className={`${styles['article--author']}`}>         
                                            {post.author}
                                            <svg aria-hidden="true" id="arrow" width="26" height="26" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="17" cy="17" r="17" fill="currentColor"></circle>
                                                <path d="M25.6563 18.2071C26.0469 17.8166 26.0469 17.1834 25.6563 16.7929L19.2924 10.4289C18.9018 10.0384 18.2687 10.0384 17.8782 10.4289C17.4876 10.8195 17.4876 11.4526 17.8782 11.8431L23.535 17.5L17.8782 23.1569C17.4876 23.5474 17.4876 24.1805 17.8782 24.5711C18.2687 24.9616 18.9018 24.9616 19.2924 24.5711L25.6563 18.2071ZM9.94922 18.5L24.9492 18.5L24.9492 16.5L9.94922 16.5L9.94922 18.5Z" fill="currentColor"></path>
                                            </svg>
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>       
        </div>
    )
}
    
