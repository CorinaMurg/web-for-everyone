import React from "react"
import { useDocTitle } from "../hooks/useDocTitle"
import { resourcesIntroData } from "../data/resourcesData/resourcesIntroData"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import ResourcesAside from "../components/Resources/ResourcesAside"
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
            <div className="resources--intro">
                <div className="resources--intro--description" >
                    <h1>Accessibility is a Responsability.</h1>
                    {resourcesIntroData.description.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div> 
                <div className="resources--intro--image">
                    <img src="/assets/brickWallWithAccessibleEntrySign.jpg" 
                         alt="brick wall with accessible entry sign"/>
                </div>
            </div>
          
            {Object.entries(sectionTitles).map(([label, heading], index) => (
                <div key={index} className="section-container" >
                    <h2 className={`blue-heading update-margin heading heading--${index}`}>
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
                                    {/* <a  
                                        href={post.href} 
                                        aria-label={post.readMoreAriaLabel} 
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <span className="read-more hover-underline">Read more</span>
                                    </a> */}
                                    <p className="post--author">{post.author}</p>
                                </div>
                                
                            </article>
                        ))}
                    </section>
                </div>
            ))}
            <ResourcesAside/>
        </div>
    )
}
    
