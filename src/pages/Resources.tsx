import React from "react"
import { useDocTitle } from "../hooks/useDocTitle"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import { Link } from "react-router-dom"
import './Resources.css'

export default function Accessibility() {  
    useDocTitle("Resources | Web for Everyone");

    const sectionTitles = {
        "understanding-accessibility": "Understanding Accessibility",
        "html-for-accessibility": "HTML for Accessibility",
        "css-for-accessibility": "CSS for Accessibility",
        "accessible-digital-presence": "Accessibility and Your Digital Presence",
        "build-accessible-components": "Building Accessible Components",
        "learning-resources": "Learning Resources",
    };

    return (
        <div className="resources">

            <h1>Resources to expand your accessibility skills</h1>
            <aside className="aside-resources">
                <h2 className="heading blue-heading">Table of Contents</h2>
                <ul className="resources-list">
                    {Object.entries(sectionTitles).map(([label, heading], index) => (
                        <li key={index} className="resources-list--item">
                            <a href={`#${label}`} 
                                className="hover-pink"
                            >
                                {heading}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
            {Object.entries(sectionTitles).map(([label, heading], index) => (
                <div key={index} className={`section-container section-container--${index + 1}`} >
                    <h2 className={`blue-heading update-margin heading heading--${index}`} >
                        <a id={`${label}`}></a>
                        {heading}
                    </h2>     
                    <section className={`update-margin section section--${index}`}>
                        {resourcesPostsData.filter(post => post.label === label).map((post, index) => (
                            <article key={index} className="post">
                                <h3 id={`sub-heading--${post.title}`}>
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
                                        >
                                            {post.title}
                                        </Link>
                                    ) : null}
                                </h3>
                                
                                <div className="post--description">
                                    <p>{post.description}</p>          
                                    <p className="post--author">{post.author}</p>
                                </div>
                                
                            </article>
                        ))}
                    </section>
                </div>
            ))}
            
        </div>
    )
}
    
