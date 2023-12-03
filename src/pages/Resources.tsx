import React from "react"
import { resourcesIntroData } from "../data/resourcesData/resourcesIntroData"
import { resourcesPostsData } from "../data/resourcesData/resourcesPostsData"
import A11yAside from "../components/A11y/A11yAside"
import './Resources.css'

export default function Accessibility() {  
    const sectionTitles = {
        "html": "Understand Your HTML",
        "css": "CSS for Accessibility",
        "components": "Building Accessible Components",
        "profile": "Accessibility and Your Digital Presence",
        "ai": "AI and Accessibility",
    };

    return (
        <div className="a11y">
            <div className="a11y--intro">
                
                <div className="a11y--intro--description" >
                    <h1>Accessibility is a Responsability.</h1>
                    {resourcesIntroData.description.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div> 
                <div className="a11y--intro--image">
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
                                    <a  
                                        href={post.href} 
                                        aria-label={post.hrefAriaLabel} 
                                        target="_blank" rel="noopener noreferrer"
                                        className="hover-underline"
                                    >
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="post--author">{post.author}</p>
                                <div className="post--description">
                                    <p>{post.description}</p>
                                    <a  
                                        href={post.href} 
                                        aria-label={post.readMoreAriaLabel} 
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <span className="read-more hover-underline">Read more</span>
                                    </a>
                                </div>
                                
                            </article>
                        ))}
                    </section>
                </div>
            ))}
            <A11yAside/>
        </div>
    )
}
    

            {/* <h2 className="blue-heading update-margin">Understand Your HTML</h2>     
            <div className="update-margin">
                {resourcesPostsData.filter(post => post.label === "html").map((post, index) => (
                    <article key={index} className="left--post--div">
                        <h3>
                            <a  
                                href={post.href} 
                                aria-label={post.hrefAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                                className="hover-underline"
                            >
                                {post.title}
                            </a>
                        </h3>
                       
                        <div className="post-description">
                            <p>{post.description}</p>
                            <a  
                                href={post.href} 
                                aria-label={post.readMoreAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="read-more hover-underline">Read more</span>
                            </a>
                        </div>
                        
                    </article>
                ))}
            </div>

            <h2 className='update-margin'>CSS for Accessibility</h2>     
            <div className="update-margin">
                {resourcesPostsData.filter(post => post.label === "css").map((post, index) => (
                    <article key={index} className="left--post--div">
                        <h3>
                            <a  
                                href={post.href} 
                                aria-label={post.hrefAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                                className="hover-underline"
                            >
                                {post.title}
                            </a>
                        </h3>
                        <div className="post-description">
                            <p>{post.description}</p>
                            <a  
                                href={post.href} 
                                aria-label={post.readMoreAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="read-more hover-underline">Read more</span>
                            </a>
                        </div>
                        
                    </article>
                ))}
            </div>

            <A11yAside/>
        </div> */}

