import React from "react"
import { useDocTitle } from "../hooks/useDocTitle"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import { Link } from "react-router-dom"
import handleLinkClick from "../utils/windowScrollTop"
import './Resources.css'

export default function Accessibility() {  
    useDocTitle("Resources | Web for Everyone");
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', ''); 
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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

            <h1>Resources to grow 
                <span>your <span className="yellow-bg">accessibility skills</span></span>
            </h1>
            <div className="resources--table-contents">
                <h2 className="blue-heading">Table of Contents</h2>
                <ul className="resources--table-contents--list">
                    {Object.entries(sectionTitles).map(([label, heading], index) => (
                        <li key={index} className="resources--table-contents--list--item">
                            <a href={`#${label}`} 
                                className="hover-pink"
                            >
                                {heading}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="resources-content">
                {Object.entries(sectionTitles).map(([label, heading], index) => (
                    <div key={index} className="section-container scroll-target" id={`${label}`}>
                        <h2 className="blue-heading heading update-margin">
                            {/* <a id={`${label}`}></a> */}
                            {heading}
                        </h2>     
                        <div className="update-margin section">
                            {resourcesPostsData.filter(post => post.label === label).map((post, index) => (
                                <article key={index} className="post">
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
                                                onClick={handleLinkClick}
                                            >
                                                {post.title}
                                            </Link>
                                        ) : null}
                                    </h3>
                                    <p className="post--subtitle">{post.subtitle}</p>
                                    <div className="post--description">
                                        <p>{post.description}</p>          
                                        <p className="post--author">{post.author}</p>
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
    
