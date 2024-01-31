import React from "react"
import { useEffect } from "react"
import useScrollToSection from "../hooks/useScrollToSection"
import { Link } from "react-router-dom"
import useDocTitle from "../hooks/useDocTitle"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import scrollToTop from "../utils/scrollToTop"
import styles from './Resources.module.css'
import "../global.css"

export default function Accessibility() {  
    useDocTitle("Resources | Web for Everyone");
    // useScrollToSection();

    const sectionTitles = {
        "understanding-accessibility": "Understanding Accessibility",
        "accessible-digital-presence": "Your Digital Presence: Make it Accessible",
        "html-for-accessibility": "HTML for Accessibility",
        "css-for-accessibility": "CSS for Accessibility",
        "build-accessible-components": "Building Accessible Components",
        "learning-resources": "Learning Resources",
    };
  
    return (
        <div className={styles.resources}>

            <h1>Resources to grow 
                <span>your <span className="yellow-bg">accessibility skills</span></span>
            </h1>
            <div className={styles['resources--table-contents']}>
                <h2 className="blue-heading">Table of Contents</h2>
                <ul className={styles['resources--table-contents--list']}>
                    {Object.entries(sectionTitles).map(([label, heading], index) => (
                        <li key={index} className={styles['resources--table-contents--list--item']}>
                            <a href={`#${label}`} 
                                className="hover-pink"
                            >
                                <code>{heading}</code>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles['resources-content']}>
                {Object.entries(sectionTitles).map(([label, heading], index) => (
                    <div key={index} className={`${styles['section-container']} scroll-target`} id={`${label}`}>
                        <h2 className="blue-heading heading update-margin ">
                            {/* does not scroll corectly */}
                            {/* <a id={`${label}`} className="scroll-target"></a> */}
                            {heading}
                        </h2>     
                        <div className={`update-margin ${styles['section-content']}`}>
                            {resourcesPostsData.filter(post => post.label === label).map((post, index) => (
                                <article key={index} className={styles['post']}>
                                    <h3 id={`${post.id}`}>
                                        {post.href ? (
                                            <a  
                                                href={post.href} 
                                                aria-label={post.ariaLabel} 
                                                target="_blank" rel="noopener noreferrer"
                                                className="hover-underline"
                                            >
                                                {post.title}
                                            </a>
                                        ) : post.to ? (
                                            <Link 
                                                to={post.to} 
                                                className="hover-underline"
                                                onClick={scrollToTop}
                                            >
                                                {post.title}
                                            </Link>
                                        ) : null}
                                    </h3>
                                    <p className={styles['post--subtitle']}>{post.subtitle}</p>
                                    <div className={styles['post--description']}>
                                        <p>{post.description}</p>          
                                        <p className={styles['post--author']}>{post.author}</p>
                                    </div>
                                    
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* <img src="/assets/images/blueBlue.jpg" alt=""/> */}
            
        </div>
    )
}
    
