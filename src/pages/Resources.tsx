import React from "react"
import { useDocTitle } from "../hooks/useDocTitle"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import { Link } from "react-router-dom"
import './Resources.css'

export default function Accessibility() {  
    useDocTitle("Resources | Web for Everyone");

    const sectionTitles = {
        "html": "Understand Your HTML",
        "css": "CSS for Accessibility",
        "components": "Building Accessible Components",
        "profile": "Accessibility and Your Digital Presence",
        "ai": "AI and Accessibility",
    };

    return (
        <div className="resources">

            <h1>Resources to expand your accessibility skills</h1>
            {Object.entries(sectionTitles).map(([label, heading], index) => (
                <div key={index} className={`section-container section-container--${index + 1}`} >
                    <h2 className={`blue-heading update-margin heading heading--${index}`} id={`heading--${index}`}>
                        {heading}
                    </h2>     
                    <section className={`update-margin section section--${index}`}>
                        {resourcesPostsData.filter(post => post.label === label).map((post, index) => (
                            <article key={index} className="post">
                                <h3>
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
            <aside className="aside-resources">
                <h3>Resources List</h3>
                {Object.entries(sectionTitles).map(([label, heading], index) => (
                    <ul key={index} className="resources-list">
                        <li className="resources-list--item">
                        <a href={`#heading--${index}`} onClick={(e) => {
                            e.preventDefault();
                            const section = document.getElementById(`heading--${index}`);
                            section?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            {heading}
                        </a>

                            {resourcesPostsData.filter(post => post.label === label).map((post, index) => (
                                <ul key={index} className="resources-list--item--sublist">
                                    <li>
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
                                    </li>
                                </ul>
                            ))}
                        </li>
                    </ul>
                ))}
            </aside>
        </div>
    )
}
    
