import React from "react"
import { useRef } from "react"
import { useDocTitle } from "../hooks/useDocTitle"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import { Link } from "react-router-dom"
import './Resources.css'

export default function Accessibility() {  
    useDocTitle("Resources | Web for Everyone");

    const headingFocusRefs = useRef({});

    const sectionTitles = {
        "intro": "Understanding Accessibility",
        "html": "Understand Your HTML",
        "css": "CSS for Accessibility",
        "profile": "Accessibility and Your Digital Presence",
        "components": "Building Accessible Components",
        "learning": "Learning Resources",
        
    };

    return (
        <div className="resources">

            <h1>Resources to expand your accessibility skills</h1>
            <aside className="aside-resources">
                <h2 className="heading blue-heading">Table of Contents</h2>
                <ul className="resources-list">
                    {Object.entries(sectionTitles).map(([label, heading], index) => (
                        <li key={index} className="resources-list--item">
                            <a href={`#heading--${label}`} 
                                aria-label={heading}
                                className="hover-pink"
                                // onClick={(e) => {
                                //     e.preventDefault();
                                //     const focusElement = headingFocusRefs.current[`heading--${label}`];
                                //     if (focusElement) {
                                //         focusElement.focus();
                                //     }
                                // }}
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
                        {/* <a ref={el => headingFocusRefs.current[`heading--${label}`] = el} href={`#heading--${label}`} className="heading-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        </a> */}
                        <a id={`heading--${label}`}></a>
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
    
