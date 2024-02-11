import React from "react"
import { Link } from "react-router-dom"
import useScrollToSection from "../hooks/useScrollToSection"
import useDocTitle from "../hooks/useDocTitle"
import useHighlightTOC from "../hooks/useHighlightTOC"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import scrollToTop from "../utils/scrollToTop"
import styles from './Resources.module.css'
import "../global.css"

export default function Accessibility() {  
    useDocTitle("Resources | Web for Everyone");
    useScrollToSection();
    const { activeId } = useHighlightTOC();
    const sectionTitles = {
        "understanding-accessibility": "Understanding Accessibility",
        "accessible-digital-presence": "Your Digital Presence",
        "html-for-accessibility": "HTML for Accessibility",
        "css-for-accessibility": "CSS for Accessibility",
        "example-accessible-components": "Examples of Accessible Components",
        // "learning-resources": "Learning Resources",
    };
  
    return (
        <div className={`${styles.resources} resources no-back-links-container`}>

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
                    <code>Table of Contents</code>
                </h2>
                <nav aria-labelledby="table-of-contents">
                    <ul className={styles['resources--table-contents--list']}>
                        {Object.entries(sectionTitles).map(([label, heading], index) => (
                            <li key={index} className={styles['resources--table-contents--list--item']}>
                                <a href={`#${label}`} 
                                    className={`hover-pink ${label === activeId ? styles.active : ''}`}
                                >
                                    <code>{heading}</code>
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
                                    <h3 id={`${post.id}`}>
                                        {post.href ? (
                                            <a  
                                                href={post.href} 
                                                aria-label={post.ariaLabel} 
                                                target="_blank" rel="noopener noreferrer"
                                                className={styles['article--link']}
                                            >
                                                {post.title}
                                            </a>
                                        ) : post.to ? (
                                            <Link 
                                                to={post.to} 
                                                className={styles['article--link']}
                                                onClick={scrollToTop}
                                            >
                                                {post.title}
                                            </Link>
                                        ) : null}
                                    </h3>
                                    <p className={styles['article--subtitle']}>{post.subtitle}</p>
                                    <div className={styles['article--description']}>
                                        <p>{post.description}</p>          
                                        <p className={styles['article--author']}><strong>{post.author}</strong></p>
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
    
