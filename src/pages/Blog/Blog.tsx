import React from "react"
import { Link } from "react-router-dom"
import { useThemeClass } from "../../hooks/useThemeClass"
import useScrollToTop from "../../hooks/useScrollToTop"
import useScrollToSection from "../../hooks/useScrollToSection"
import useDocTitle from "../../hooks/useDocTitle"
import useHighlightTOC from "../../hooks/useHighlightTOC"
import { blogPostsData } from "../../data/blogData/blogPostsData"
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton"
import styles from './Blog.module.css'
import "../../global.css"

export default function Accessibility() {  
    useDocTitle("Blog | Web for Everyone");
    useScrollToTop();
    useScrollToSection();

    const { activeId } = useHighlightTOC();

    const sectionTitles = {
        "accessibility-101": "Accessibility 101",
        "your-portfolio-site": "Your portfolio site",
        "html-for-accessibility": "HTML for accessibility",
        "css-for-accessibility": "CSS for accessibility",
        "tools-for-accessibility": "Tools for accessibility",
        "example-accessible-components": "Examples of accessible components",
    };

    const themeClass = useThemeClass();
  
    return (
        <div className={`${styles.resources} ${themeClass} resources no-back-links-container`}>
          
            <h1 className="article-heading-desktop">
                <span>Accessibility resources</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>Accessibility</span>
                <span>resources</span>
            </h1>
            <div className={styles['resources--table-contents']}>
                <h2 id="table-of-contents">
                    Table of Contents
                </h2>
                <nav aria-labelledby="table-of-contents" className={themeClass}>
                    <ul className={`${styles['resources--table-contents']}`}>
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
                        <h2 className="pink-heading heading">
                            {heading}
                        </h2>     
                        <div className={`${styles['section-content']}`}>
                            {blogPostsData.filter(post => post.label === label).map((post, index) => (
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
                                                    onClick = {() => { useScrollToTop(); }}
                                                >
                                                    {post.title}
                                                </Link>
                                            ) : null}
                                        </h3>
                                        <p id={`${post.id}-subtitle`} className={styles['article--subtitle']}>{post.subtitle}</p>
                                    </div>
                                    <div className={styles['article--description']}>
                                        <p>{post.description}</p>   
                                        <div className={`${styles['article--author--container']}`}>
                                            <p id={`${post.id}-author`} className={`${styles['article--author']}`}>         
                                                {post.author}
                                                
                                            </p>
                                            <svg aria-hidden="true" id="arrow" width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="17" cy="17" r="17" fill="currentColor"></circle>
                                                <path d="M25.6563 18.2071C26.0469 17.8166 26.0469 17.1834 25.6563 16.7929L19.2924 10.4289C18.9018 10.0384 18.2687 10.0384 17.8782 10.4289C17.4876 10.8195 17.4876 11.4526 17.8782 11.8431L23.535 17.5L17.8782 23.1569C17.4876 23.5474 17.4876 24.1805 17.8782 24.5711C18.2687 24.9616 18.9018 24.9616 19.2924 24.5711L25.6563 18.2071ZM9.94922 18.5L24.9492 18.5L24.9492 16.5L9.94922 16.5L9.94922 18.5Z" fill="currentColor" transform="translate(-0.5,0)"></path>
                                            </svg>
                                        </div>       
                                        
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>   
            <ScrollToTopButton />    
        </div>
    )
}
    
