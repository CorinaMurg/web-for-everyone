
import { a11yIntroData } from "../data/a11yData/a11yIntroData"
import { a11yPostsData } from "../data/a11yData/a11yPostsData"
import A11yAside from "../components/A11y/A11yAside"
import './Accessibility.css'
import React from "react"

export default function Accessibility() {  
    return (
        <div className="a11y">
            <div className="page-intro a11y--intro">
                <div className='white-bg'>
                    <h1>{a11yIntroData.title}</h1>
                    <div className="intro--text">
                        {a11yIntroData.description.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
            
            <h2 className="left-my-posts-heading blue-heading">My A11y Posts</h2>     
            <div className="left-my-posts-div">
                {a11yPostsData.filter(post => post.label === "corina").map((post, index) => (
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

            <h2 className='left-other-heading'>Articles by A11y Specialists</h2>     
            <div className="left-other-div">
                {a11yPostsData.filter(post => post.label === "other").map((post, index) => (
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

            <A11yAside className="right"/>
        </div>
    )
}
