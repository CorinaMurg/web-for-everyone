import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../../../hooks/useDocTitle"
import "./WhatIsA11y.css"

export default function MostCommonBugs() {
    useDocTitle("Most Common A11y Bugs | Web for Everyone");    
    
    return (
        <div className="article-container commonbugs-container">
            <div className="back-links">
                <Link to="/resources" className="back-link hover-pink">Resources</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#what-is-accessibility" className="back-link hover-pink">Understanding Accessibility</Link>
            </div>
            
            <h1>What is Accessibility?</h1>
            <p className="subtitle">And why does it matter?</p>

            <section className="table-contents">
                <h2 className="heading blue-heading">Table of Contents</h2>
                <ul className="table-contents--list">
                    <li className="table-contents--list--item">
                        <a href="#" className="hover-pink">WebAIM Million Study</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#low-contrast" className="hover-pink">Low Contrast Text</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#alt-text" className="hover-pink">Missing Alternative Text for Images</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#empty-links" className="hover-pink">Empty Links</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#empty-buttons" className="hover-pink">Empty Buttons</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#missing-inputLabels" className="hover-pink">Missing Input Labels</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#missing-lang" className="hover-pink">Missing Document Language</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#misused-headings" className="hover-pink">Misused Headings</a>
                    </li> 
                    <li className="table-contents--list--item">
                        <a href="#conclusion" className="hover-pink">Conclusion</a>
                    </li> 
                </ul>
            </section>
            
            <article className="article-content whatisa11y">
                 {/* *************0. INTRO********************** */}
                <section className="intro scroll-target" id="intro">
                    <p>
                        Here's one cool thing that happens every year: the organization WebAIM -
                            <a href="https://webaim.org/" target="_blank" rel="noreferrer">
                                Web Accessibility in Mind
                            </a>         
                        - analyzes the top 1,000,000 home pages to check for accessibility errors. 

                        The results have always been pretty grim, and 2023 was no exception:
                    </p>
                    
                    <div className="highlight">
                        <p className="numbers"><span>96.3</span> the percentage of home pages with a11y bugs</p> 
                        <p className="numbers"><span>50</span> the average bugs per page</p> 
                        <p className="numbers"><span>106,245</span> the highest number of bugs found on a single home page</p>        
                    </div>
                    
                    <p>
                        WebAIM audits these pages using an automated tool, the WAVE accessibility engine. 
                        Automated tools are not perfect and fail to detect all  
                        accessibility barriers and guidelines violations.
                        As a result, the actual number of bugs is likely to be higher.
                    </p>

                    <p>
                        I recommend reading the full 
                            <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                                WebAIM Million
                            </a>
                        report, but in the meantime let's go over the list of the most common bugs: 
                    </p>
                    
                    <p>The good news? These are some of the easiest bugs to avoid or fix.</p>

                    <div className="highlight bad-news">
                        <p className="fake-heading-p">The sad news?</p>
                        <p>The top 6 types of bugs accounted for over 96% of all bugs found.  
                            <span aria-hidden="true"> 😔</span>
                        </p>
                        <p>Worse: they've been the "most common bugs" for the last 5 years.  
                            <span aria-hidden="true"> 😢</span>
                        </p>
                    </div>
                </section>


                

                {/* CONCLUSION */}
                <section className="bug conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        We just looked at the most common accessibility bugs as reported by the WebAIM Million Study.
                        
                        Fortunately, these are also the easiest to fix!
                    </p>
                    <p>
                        Next, let's look at how to avoid or fix these bugs when building your portfolio site.
                        
                    </p>
                    
                    <div className="next-article">
                        <span className="fake-heading-p">Read next:</span>
                        <Link to="/resources/make-it-accessible" className="fake-heading-p pink-text">
                            Your Portfolio Site: Let's Make It Accessible!
                        </Link>
                    </div>
                    
                </section>

            </article>
            
        </div>
    )
}


